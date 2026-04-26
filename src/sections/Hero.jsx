import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";
import { personalInfo } from "../data";

/* Typing effect for role cycling */
function useTypingCycle(words, typingSpeed = 90, pauseMs = 2200) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;
    if (!deleting && charIdx <= word.length) {
      timeout = setTimeout(() => {
        setDisplay(word.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, typingSpeed);
    } else if (!deleting && charIdx > word.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setCharIdx((c) => c - 1);
        setDisplay(word.slice(0, charIdx - 1));
      }, typingSpeed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, typingSpeed, pauseMs]);
  return display;
}

function SocialPill({ href, icon: Icon, label, external = true }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.45rem 0.9rem",
        fontSize: "0.78rem",
        fontFamily: '"JetBrains Mono", monospace',
        color: "var(--text-muted)",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        textDecoration: "none",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--accent)";
        e.currentTarget.style.borderColor = "var(--accent-border)";
        e.currentTarget.style.background = "var(--accent-soft)";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--text-muted)";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.background = "var(--bg-card)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <Icon size={15} />
      {label}
    </a>
  );
}

export default function Hero() {
  const typed = useTypingCycle(personalInfo.roles);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Ambient gradient orbs */}
      <div className="hero-glow" style={{ top: "5%", left: "10%", background: "var(--glow-color)" }} />
      <div className="hero-glow" style={{ bottom: "15%", right: "5%", background: "var(--accent-secondary)", width: "400px", height: "400px" }} />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      <motion.div
        className="container-main"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          paddingTop: "7rem",
          paddingBottom: "4rem",
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {/* Left: text content */}
        <div style={{ flex: "1 1 480px", minWidth: 0 }}>
          <motion.div variants={childVariants} style={{ marginBottom: "1.5rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.9rem",
                fontSize: "0.75rem",
                fontFamily: '"JetBrains Mono", monospace',
                color: "var(--accent)",
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-border)",
                borderRadius: "999px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--accent-green)",
                  boxShadow: "0 0 8px var(--accent-green)",
                }}
              />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={childVariants}
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              margin: "0 0 0.5rem",
            }}
          >
            I build things
            <br />
            for mobile <span style={{ color: "var(--accent)" }}>&</span> the cloud.
          </motion.h1>

          <motion.div
            variants={childVariants}
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              color: "var(--accent)",
              marginBottom: "1.25rem",
              minHeight: "1.6em",
            }}
          >
            {typed}
            <span className="cursor-blink" style={{ marginLeft: "2px", color: "var(--accent)" }}>|</span>
          </motion.div>

          <motion.p
            variants={childVariants}
            style={{
              fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              maxWidth: "540px",
              marginBottom: "2rem",
            }}
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            variants={childVariants}
            style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}
          >
            <a
              href="#work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.7rem 1.5rem",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "#fff",
                background: "var(--accent)",
                border: "none",
                borderRadius: "8px",
                textDecoration: "none",
                cursor: "pointer",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent-hover)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View Work
              <ArrowDown size={15} />
            </a>
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.7rem 1.5rem",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "var(--text-primary)",
                background: "transparent",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                textDecoration: "none",
                cursor: "pointer",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-border)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FileText size={15} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={childVariants}
            style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
          >
            <SocialPill href={personalInfo.github} icon={Github} label="GitHub" />
            <SocialPill href={personalInfo.linkedin} icon={Linkedin} label="LinkedIn" />
            <SocialPill href={`mailto:${personalInfo.email}`} icon={Mail} label="Email" external={false} />
          </motion.div>
        </div>

        {/* Right: profile photo + funny mascots */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ flex: "0 0 auto", position: "relative" }}
          className="hero-photo-wrap"
        >
          {/* Decorative rings */}
          <div style={{ position: "absolute", inset: "-8px", borderRadius: "50%", border: "1px solid var(--accent-border)", animation: "spin-slow 20s linear infinite" }} />
          <div style={{ position: "absolute", inset: "-20px", borderRadius: "50%", border: "1px dashed var(--border)", animation: "spin-slow 30s linear infinite reverse" }} />

          <img
            src={personalInfo.photo}
            alt={personalInfo.name}
            style={{
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid var(--accent-border)",
              display: "block",
            }}
          />

          {/* Status dot */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: "var(--accent-green)",
              border: "3px solid var(--bg-primary)",
              boxShadow: "0 0 12px var(--accent-green)",
            }}
          />

          {/* Android mascot */}
          <motion.img
            src="/icons8-android-logo-480.png"
            alt="Android logo"
            animate={{ y: [0, -12, 0], rotate: [-6, 6, -6] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "-35px",
              right: "-20px",
              width: "55px",
              height: "55px",
              filter: "drop-shadow(0 4px 12px rgba(61, 220, 132, 0.4))",
            }}
          />

          {/* Flutter logo */}
          <motion.img
            src="/icons8-flutter-384.png"
            alt="Flutter logo"
            animate={{ y: [0, -10, 0], rotate: [4, -4, 4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            style={{
              position: "absolute",
              bottom: "10px",
              left: "-35px",
              width: "48px",
              height: "48px",
              filter: "drop-shadow(0 4px 12px rgba(66, 165, 245, 0.4))",
            }}
          />

          {/* Spring Boot logo */}
          <motion.img
            src="/icons8-spring-boot-480.png"
            alt="Spring Boot logo"
            animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            style={{
              position: "absolute",
              bottom: "-25px",
              right: "40px",
              width: "45px",
              height: "45px",
              filter: "drop-shadow(0 4px 12px rgba(109, 179, 63, 0.4))",
            }}
          />

          {/* Node.js logo */}
          <motion.img
            src="/icons8-nodejs-480.png"
            alt="Node.js logo"
            animate={{ y: [0, -10, 0], rotate: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            style={{
              position: "absolute",
              top: "20px",
              left: "-45px",
              width: "50px",
              height: "50px",
              filter: "drop-shadow(0 4px 12px rgba(104, 160, 99, 0.4))",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "var(--text-dimmed)" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .hero-photo-wrap {
            display: flex;
            justify-content: center;
            width: 100%;
          }
          .hero-photo-wrap img:first-of-type {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}
