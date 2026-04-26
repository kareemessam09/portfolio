export default function SectionHeading({ label, title }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <p
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "0.5rem",
        }}
      >
        {label}
      </p>
      <h2
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 600,
          color: "var(--text-primary)",
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
  );
}
