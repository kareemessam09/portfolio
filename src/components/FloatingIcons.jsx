import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext";

/*
 * FloatingIcons — Canvas-based interactive background.
 * Reads CSS variable --float-color to adapt to the current theme.
 * Icons are now MORE VISIBLE with higher opacity and larger sizes.
 */

const GLYPHS = [
  // Kotlin "K"
  (ctx, s) => {
    ctx.font = `bold ${s}px "JetBrains Mono", monospace`;
    ctx.fillText("K", 0, 0);
  },
  // Flutter diamond
  (ctx, s) => {
    const h = s * 0.5;
    ctx.beginPath();
    ctx.moveTo(0, -h);
    ctx.lineTo(h, 0);
    ctx.lineTo(0, h);
    ctx.lineTo(-h, 0);
    ctx.closePath();
    ctx.stroke();
    ctx.globalAlpha *= 0.3;
    ctx.fill();
    ctx.globalAlpha /= 0.3;
  },
  // Curly braces { }
  (ctx, s) => {
    ctx.font = `${s}px "JetBrains Mono", monospace`;
    ctx.fillText("{ }", 0, 0);
  },
  // Terminal prompt $>
  (ctx, s) => {
    ctx.font = `${s}px "JetBrains Mono", monospace`;
    ctx.fillText("$>_", 0, 0);
  },
  // Angle brackets </>
  (ctx, s) => {
    ctx.font = `${s}px "JetBrains Mono", monospace`;
    ctx.fillText("</>", 0, 0);
  },
  // Android head
  (ctx, s) => {
    const r = s * 0.4;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(0, 0, r, Math.PI, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(-r * 0.4, -r * 0.25, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(r * 0.4, -r * 0.25, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-r * 0.35, -r);
    ctx.lineTo(-r * 0.55, -r * 1.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(r * 0.35, -r);
    ctx.lineTo(r * 0.55, -r * 1.5);
    ctx.stroke();
  },
  // Database cylinder
  (ctx, s) => {
    const w = s * 0.35;
    const h = s * 0.5;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(0, -h * 0.5, w, h * 0.2, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-w, -h * 0.5);
    ctx.lineTo(-w, h * 0.3);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w, -h * 0.5);
    ctx.lineTo(w, h * 0.3);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(0, h * 0.3, w, h * 0.2, 0, 0, Math.PI);
    ctx.stroke();
  },
  // git branch
  (ctx, s) => {
    const r = s * 0.12;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.4);
    ctx.lineTo(0, s * 0.4);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(s * 0.3, -s * 0.1, s * 0.3, -s * 0.3);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, -s * 0.4, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(0, s * 0.4, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(s * 0.3, -s * 0.3, r, 0, Math.PI * 2);
    ctx.fill();
  },
  // Lambda λ
  (ctx, s) => {
    ctx.font = `${s * 1.2}px serif`;
    ctx.fillText("λ", 0, 0);
  },
  // API arrow →
  (ctx, s) => {
    ctx.font = `bold ${s * 0.8}px "JetBrains Mono", monospace`;
    ctx.fillText("→", 0, 0);
  },
  // Semicolon ;
  (ctx, s) => {
    ctx.font = `bold ${s * 1.3}px "JetBrains Mono", monospace`;
    ctx.fillText(";", 0, 0);
  },
];

function createParticle(w, h) {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    size: 16 + Math.random() * 14,
    opacity: 0.12 + Math.random() * 0.18, // Much higher opacity
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.004,
    glyph: Math.floor(Math.random() * GLYPHS.length),
  };
}

export default function FloatingIcons() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const particles = useRef([]);
  const raf = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const getColor = () => {
      return theme === "light"
        ? "rgba(2, 132, 199, VAR)"
        : "rgba(56, 189, 248, VAR)";
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor((window.innerWidth * window.innerHeight) / 22000);
      particles.current = Array.from(
        { length: Math.min(count, 55) },
        () => createParticle(window.innerWidth, window.innerHeight)
      );
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });

    const draw = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      ctx.clearRect(0, 0, W, H);

      const baseColor = theme === "light" ? [2, 132, 199] : [56, 189, 248];

      for (const p of particles.current) {
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Mouse repulsion (stronger near cursor)
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.vx += (dx / dist) * force * 0.2;
          p.vy += (dy / dist) * force * 0.2;
        }

        p.vx *= 0.994;
        p.vy *= 0.994;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;

        if (p.x < -50) p.x = W + 50;
        if (p.x > W + 50) p.x = -50;
        if (p.y < -50) p.y = H + 50;
        if (p.y > H + 50) p.y = -50;

        // Glow near cursor
        let glowBoost = 0;
        if (dist < 200) {
          glowBoost = ((200 - dist) / 200) * 0.15;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = Math.min(p.opacity + glowBoost, 0.45);
        const [r, g, b] = baseColor;
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 1)`;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`;
        ctx.lineWidth = 1.2;
        GLYPHS[p.glyph](ctx, p.size);
        ctx.restore();
      }

      raf.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(raf.current);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
