import { ArrowRight, ArrowUpRight, Layers, Rocket, Server, Smartphone } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import RevealOnScroll from "../components/RevealOnScroll";

const SERVICES = [
  {
    num: "01",
    icon: Smartphone,
    title: "Android Apps",
    desc: "Native Android with Jetpack Compose and MVVM — from Figma file to a production listing on Google Play.",
    cue: "Fixed-scope quotes",
    chips: ["Jetpack Compose", "MVVM", "Play Store deploy"],
    featured: true,
  },
  {
    num: "02",
    icon: Layers,
    title: "Cross-platform Mobile",
    desc: "Flutter and Kotlin Multiplatform — one codebase, both stores, half the maintenance.",
    cue: "DM for rates",
  },
  {
    num: "03",
    icon: Server,
    title: "Backend APIs",
    desc: "Node.js REST APIs with auth, real-time data, and deployment handled end to end.",
    cue: "DM for rates",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Product shipping",
    desc: "Store compliance, release management, and monitoring setup — the unglamorous last mile, done.",
    cue: "Per-release pricing",
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  if (service.featured) {
    return (
      <div className="service-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
        <span className="service-num" aria-hidden="true">{service.num}</span>
        <div className="service-icon" style={{ width: "52px", height: "52px" }}>
          <Icon size={24} />
        </div>
        <div>
          <h3 style={{ fontSize: "1.45rem", fontWeight: 600, color: "var(--text-primary)", margin: "0 0 0.55rem", letterSpacing: "-0.02em" }}>
            {service.title}
          </h3>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "var(--text-secondary)", margin: 0, maxWidth: "40ch" }}>
            {service.desc}
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
          {service.chips.map((c) => (
            <span key={c} className="tag">{c}</span>
          ))}
        </div>
        <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
          <span className="service-cue">{service.cue}</span>
        </div>
        <ArrowUpRight size={18} className="service-arrow" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="service-card" style={{ display: "flex", alignItems: "flex-start", gap: "1.1rem" }}>
      <span className="service-num" aria-hidden="true" style={{ fontSize: "1.3rem", top: "1.1rem" }}>{service.num}</span>
      <div className="service-icon">
        <Icon size={20} />
      </div>
      <div style={{ minWidth: 0, paddingRight: "1.5rem" }}>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)", margin: "0 0 0.4rem", letterSpacing: "-0.01em" }}>
          {service.title}
        </h3>
        <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "var(--text-secondary)", margin: "0 0 0.85rem" }}>
          {service.desc}
        </p>
        <span className="service-cue">{service.cue}</span>
      </div>
      <ArrowUpRight size={16} className="service-arrow" aria-hidden="true" />
    </div>
  );
}

export default function Services() {
  const [featured, ...rest] = SERVICES;

  return (
    <section id="services" className="section-border" style={{ padding: "6rem 0" }}>
      <div className="container-main">
        <RevealOnScroll>
          <SectionHeading label="// what i do" title="What I can ship for you." />
        </RevealOnScroll>

        <div className="services-grid">
          {/* Large feature card */}
          <RevealOnScroll delay={0.05}>
            <ServiceCard service={featured} />
          </RevealOnScroll>

          {/* Stacked compact cards */}
          <div className="services-stack">
            {rest.map((s, i) => (
              <RevealOnScroll key={s.num} delay={0.1 + i * 0.07}>
                <ServiceCard service={s} />
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <RevealOnScroll delay={0.15}>
          <div
            style={{
              marginTop: "4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
                letterSpacing: "-0.03em",
              }}
            >
              Got a project?
            </span>
            <a href="#contact" className="services-cta">
              Let&apos;s talk
              <ArrowRight size={17} />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
