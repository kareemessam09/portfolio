import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, Smartphone, Cpu, Star } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { projects } from "../data";
import RevealOnScroll from "../components/RevealOnScroll";
import SectionHeading from "../components/SectionHeading";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "mobile", label: "Mobile" },
  { key: "ai", label: "AI / ML" },
];

const categoryIcon = {
  fullstack: <Layers size={14} />,
  mobile: <Smartphone size={14} />,
  ai: <Cpu size={14} />,
};

export default function Work() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="section-border" style={{ padding: "6rem 0" }}>
      <div className="container-main">
        <RevealOnScroll>
          <SectionHeading label="// projects" title="Selected Work" />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                style={{
                  padding: "0.4rem 1rem",
                  fontSize: "0.78rem",
                  fontFamily: '"JetBrains Mono", monospace',
                  border: "1px solid",
                  borderColor: filter === f.key ? "var(--accent-border)" : "var(--border)",
                  borderRadius: "6px",
                  background: filter === f.key ? "var(--accent-soft)" : "var(--bg-card)",
                  color: filter === f.key ? "var(--accent)" : "var(--text-muted)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.25rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="card"
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {project.featured && (
                  <div style={{ position: "absolute", top: "1rem", right: "1rem", color: "var(--accent)" }}>
                    <Star size={14} fill="currentColor" />
                  </div>
                )}

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem", color: "var(--text-dimmed)", fontSize: "0.75rem", fontFamily: '"JetBrains Mono", monospace' }}>
                  {categoryIcon[project.category]}
                  <span>{project.year}</span>
                </div>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--text-primary)", margin: "0 0 0.6rem", letterSpacing: "-0.01em" }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "var(--text-secondary)", margin: "0 0 1.2rem", flexGrow: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.2rem" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "1rem", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontSize: "0.78rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                      <Github size={14} />
                      Source
                    </a>
                  )}
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontSize: "0.78rem", color: "var(--accent-green)", textDecoration: "none", transition: "color 0.2s" }}
                    >
                      <IoLogoGooglePlaystore size={14} />
                      Play Store
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontSize: "0.78rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
