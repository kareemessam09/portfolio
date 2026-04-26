import { ArrowUpRight, Clock } from "lucide-react";
import { blogs } from "../data";
import RevealOnScroll from "../components/RevealOnScroll";
import SectionHeading from "../components/SectionHeading";

export default function Blog() {
  return (
    <section id="blog" className="section-border" style={{ padding: "6rem 0" }}>
      <div className="container-main">
        <RevealOnScroll>
          <SectionHeading label="// writing" title="Blog & Articles" />
        </RevealOnScroll>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
          {blogs.map((post, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <a
                href={post.medium_link}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{ display: "flex", flexDirection: "column", padding: "1.5rem", textDecoration: "none", height: "100%", cursor: "pointer" }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.7rem", color: "var(--text-muted)" }}>
                    {post.date}
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontFamily: '"JetBrains Mono", monospace', fontSize: "0.7rem", color: "var(--text-dimmed)" }}>
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)", margin: "0 0 0.6rem", lineHeight: 1.35, letterSpacing: "-0.01em" }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "var(--text-secondary)", margin: 0, flexGrow: 1 }}>
                  {post.summary}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginTop: "1.2rem", fontSize: "0.78rem", fontWeight: 500, color: "var(--accent)" }}>
                  Read on Medium
                  <ArrowUpRight size={13} />
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
