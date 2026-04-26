import { Mail, ArrowUpRight, Phone, MapPin } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";
import { personalInfo } from "../data";
import RevealOnScroll from "../components/RevealOnScroll";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="section-border" style={{ padding: "6rem 0 0" }}>
      <div className="container-main">
        <RevealOnScroll>
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
            <p
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "0.75rem",
              }}
            >
              // contact
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                margin: "0 0 1rem",
              }}
            >
              Let&apos;s build something.
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: "2.5rem" }}>
              Got a project in mind, an interesting idea, or just want to connect?
              I&apos;m always open to a good conversation.
            </p>
          </div>
        </RevealOnScroll>

        {/* Contact cards */}
        <RevealOnScroll delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              maxWidth: "720px",
              margin: "0 auto 2.5rem",
            }}
          >
            <a href={`mailto:${personalInfo.email}`} className="card" style={{ padding: "1.5rem", textDecoration: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "var(--accent-soft)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                <Mail size={18} />
              </div>
              <div>
                <p style={{ fontSize: "0.72rem", fontFamily: '"JetBrains Mono", monospace', color: "var(--text-muted)", margin: "0 0 0.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Email</p>
                <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", margin: 0, fontWeight: 500 }}>{personalInfo.email}</p>
              </div>
            </a>

            <a href={`tel:${personalInfo.phone}`} className="card" style={{ padding: "1.5rem", textDecoration: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(52, 211, 153, 0.1)", border: "1px solid rgba(52, 211, 153, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-green)" }}>
                <Phone size={18} />
              </div>
              <div>
                <p style={{ fontSize: "0.72rem", fontFamily: '"JetBrains Mono", monospace', color: "var(--text-muted)", margin: "0 0 0.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Phone</p>
                <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", margin: 0, fontWeight: 500 }}>{personalInfo.phone}</p>
              </div>
            </a>

            <div className="card" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(251, 146, 60, 0.1)", border: "1px solid rgba(251, 146, 60, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-orange)" }}>
                <MapPin size={18} />
              </div>
              <div>
                <p style={{ fontSize: "0.72rem", fontFamily: '"JetBrains Mono", monospace', color: "var(--text-muted)", margin: "0 0 0.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Location</p>
                <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", margin: 0, fontWeight: 500 }}>{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Social links */}
        <RevealOnScroll delay={0.2}>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="card" style={{ padding: "1rem 1.5rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.6rem", fontSize: "0.85rem", fontWeight: 500, color: "var(--text-primary)" }}>
              <Github size={18} /> GitHub <ArrowUpRight size={13} style={{ color: "var(--text-muted)" }} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="card" style={{ padding: "1rem 1.5rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.6rem", fontSize: "0.85rem", fontWeight: 500, color: "var(--text-primary)" }}>
              <Linkedin size={18} /> LinkedIn <ArrowUpRight size={13} style={{ color: "var(--text-muted)" }} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="card"
              style={{ padding: "1rem 1.5rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.6rem", fontSize: "0.85rem", fontWeight: 500, color: "#fff", background: "var(--accent)", borderColor: "var(--accent)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent-hover)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--accent)"; }}
            >
              <Mail size={18} /> Say Hello <ArrowUpRight size={13} />
            </a>
          </div>
        </RevealOnScroll>

        {/* Closing quote with funny photo */}
        <RevealOnScroll delay={0.3}>
          <div
            style={{
              borderTop: "1px solid var(--border)",
              marginTop: "1rem",
              padding: "3rem 0 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            {/* Funny photo — tilted */}
            <div
              style={{
                flexShrink: 0,
                position: "relative",
              }}
            >
              <img
                src="/me-quote.jpg"
                alt="Kareem being dramatic"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid var(--accent-border)",
                  transform: "rotate(-6deg)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
              />
              {/* Little emoji thought bubble */}
              <span
                style={{
                  position: "absolute",
                  top: "2px",
                  right: "2px",
                  fontSize: "1.8rem",
                  animation: "float-bob 3s ease-in-out infinite",
                }}
              >
                💭
              </span>
            </div>

            {/* Speech bubble quote */}
            <div className="speech-bubble" style={{ maxWidth: "480px" }}>
              <p
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "clamp(0.82rem, 1.6vw, 0.95rem)",
                  fontStyle: "italic",
                  color: "var(--text-muted)",
                  letterSpacing: "0.01em",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                &ldquo;{personalInfo.closingQuote}&rdquo;
              </p>
              <p
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "0.65rem",
                  color: "var(--text-dimmed)",
                  margin: "0.5rem 0 0",
                  textAlign: "right",
                }}
              >
                — me, at 3 AM probably
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Footer */}
        <footer
          style={{
            marginTop: "2rem",
            padding: "1.5rem 0",
            borderTop: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.7rem", color: "var(--text-dimmed)" }}>
            © {year} {personalInfo.name} — Built and shipped for Fun.
          </span>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: "var(--text-dimmed)", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dimmed)")}>
              <Github size={14} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "var(--text-dimmed)", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dimmed)")}>
              <Linkedin size={14} />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email" style={{ color: "var(--text-dimmed)", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dimmed)")}>
              <Mail size={14} />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
