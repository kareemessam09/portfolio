import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Code, Smartphone, Server, Wrench } from "lucide-react";
import { experience, education, skills } from "../data";
import RevealOnScroll from "../components/RevealOnScroll";
import SectionHeading from "../components/SectionHeading";

const SKILL_GROUPS = [
  {
    key: "languages",
    label: "Languages",
    icon: <Code size={18} />,
    color: "var(--accent)",
    items: skills.languages,
  },
  {
    key: "mobile",
    label: "Mobile & UI",
    icon: <Smartphone size={18} />,
    color: "var(--accent-green)",
    items: skills.mobile,
  },
  {
    key: "backend",
    label: "Backend & Infra",
    icon: <Server size={18} />,
    color: "var(--accent-secondary)",
    items: skills.backend,
  },
  {
    key: "tools",
    label: "Tools & Testing",
    icon: <Wrench size={18} />,
    color: "var(--accent-orange)",
    items: skills.tools,
  },
];

export default function Experience() {
  const [activeGroup, setActiveGroup] = useState(null);

  return (
    <section id="experience" className="section-border" style={{ padding: "6rem 0" }}>
      <div className="container-main">
        <RevealOnScroll>
          <SectionHeading label="// experience" title="Where I've Worked" />
        </RevealOnScroll>

        {/* Work experience timeline */}
        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          <div
            className="timeline-line"
            style={{ position: "absolute", top: "6px", bottom: "0", left: "4px" }}
          />
          {experience.map((exp, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div style={{ position: "relative", marginBottom: "2.5rem" }}>
                <div className="timeline-dot" style={{ position: "absolute", left: "-2rem", top: "6px" }} />
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>
                    {exp.title}
                  </h3>
                  <span style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: 500 }}>
                    @ {exp.company}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.72rem", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                    <Briefcase size={12} />
                    {exp.period}
                  </span>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.72rem", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                </div>
                <ul style={{ margin: 0, paddingLeft: "1.1rem", listStyleType: "none" }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: "0.35rem", position: "relative", paddingLeft: "0.8rem" }}>
                      <span style={{ position: "absolute", left: 0, top: "0.6em", width: "4px", height: "4px", borderRadius: "50%", background: "var(--text-dimmed)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Education */}
        <RevealOnScroll delay={0.2}>
          <div style={{ marginTop: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
              <GraduationCap size={18} style={{ color: "var(--accent)" }} />
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>
                Education
              </h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
              {education.map((edu, i) => (
                <div key={i} className="card" style={{ padding: "1.25rem" }}>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)", margin: "0 0 0.25rem" }}>
                    {edu.school}
                  </h4>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", margin: "0 0 0.5rem" }}>
                    {edu.degree} — GPA: {edu.gpa}
                  </p>
                  <div style={{ display: "flex", gap: "1rem", fontFamily: '"JetBrains Mono", monospace', fontSize: "0.7rem", color: "var(--text-muted)" }}>
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Interactive Skills Section */}
        <RevealOnScroll delay={0.3}>
          <div style={{ marginTop: "4rem" }}>
            <SectionHeading label="// tech stack" title="Skills & Technologies" />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1rem",
              }}
            >
              {SKILL_GROUPS.map((group) => (
                <motion.div
                  key={group.key}
                  className="skill-group"
                  onClick={() => setActiveGroup(activeGroup === group.key ? null : group.key)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  style={{ cursor: "pointer" }}
                >
                  {/* Group header */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "8px",
                        background: "var(--accent-soft)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: group.color,
                      }}
                    >
                      {group.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>
                        {group.label}
                      </h4>
                      <p style={{ fontSize: "0.68rem", fontFamily: '"JetBrains Mono", monospace', color: "var(--text-dimmed)", margin: 0 }}>
                        {group.items.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Skill items */}
                  <AnimatePresence>
                    <motion.div
                      initial={false}
                      animate={{
                        height: activeGroup === group.key ? "auto" : "2.2rem",
                      }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      style={{
                        overflow: "hidden",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.35rem",
                      }}
                    >
                      {group.items.map((skill, idx) => (
                        <motion.span
                          key={skill}
                          className="tag"
                          initial={activeGroup === group.key ? { opacity: 0, scale: 0.8 } : false}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.03 }}
                          style={{
                            borderColor: activeGroup === group.key ? "var(--accent-border)" : undefined,
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </AnimatePresence>

                  {/* Expand hint */}
                  {activeGroup !== group.key && group.items.length > 4 && (
                    <p
                      style={{
                        fontSize: "0.65rem",
                        fontFamily: '"JetBrains Mono", monospace',
                        color: "var(--accent)",
                        margin: "0.5rem 0 0",
                        textAlign: "right",
                      }}
                    >
                      click to expand ↓
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
