import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";
import { personalInfo, navLinks } from "../data";
import { useTheme } from "../components/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backdropFilter: scrolled ? "blur(16px) saturate(1.8)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.8)" : "none",
          background: scrolled ? "var(--bg-nav)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "background 0.3s, border-bottom 0.3s, backdrop-filter 0.3s",
        }}
      >
        <div
          className="container-main"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "4rem",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "var(--text-primary)",
              textDecoration: "none",
              letterSpacing: "0.06em",
            }}
          >
            {personalInfo.initials}
            <span style={{ color: "var(--accent)" }}>.</span>
          </a>

          {/* Desktop links */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            className="nav-desktop"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {link.label}
              </a>
            ))}

            <span style={{ width: "1px", height: "20px", background: "var(--border)" }} />

            {/* Theme toggle button */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              style={{
                background: "none",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "0.35rem",
                cursor: "pointer",
                color: "var(--text-muted)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-border)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="nav-mobile-toggle" style={{ display: "none", alignItems: "center", gap: "0.5rem" }}>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              style={{
                background: "none",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
                padding: "0.25rem",
              }}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                color: "var(--text-primary)",
                cursor: "pointer",
                padding: "0.25rem",
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: theme === "dark" ? "rgba(10,10,15,0.96)" : "rgba(250,250,250,0.96)",
              backdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem" }}>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)" }}>
                <Github size={22} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)" }}>
                <Linkedin size={22} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
