import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  LayoutDashboard,
  Server,
  ShoppingBag,
  Smartphone,
  Users,
} from "lucide-react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import SectionHeading from "../components/SectionHeading";
import RevealOnScroll from "../components/RevealOnScroll";
import { projects } from "../data";

import shotWelcome from "../../besor3a/Screenshot_20260813_144554.jpg";
import shotRoles from "../../besor3a/Screenshot_20260813_144600.jpg";
import shotHome from "../../besor3a/Screenshot_20260813_144608.jpg";
import shotMenu from "../../besor3a/Screenshot_20260813_144614.jpg";
import shotItem from "../../besor3a/Screenshot_20260813_144619.jpg";
import shotLogin from "../../besor3a/Screenshot_20260813_144630.jpg";
import shotOrders from "../../besor3a/Screenshot_20260813_144659.jpg";
import shotProfile from "../../besor3a/Screenshot_20260813_144709.jpg";
import shotAnalytics from "../../besor3a/Screenshot_20260813_144754.jpg";
import shotSidebar from "../../besor3a/Screenshot_20260813_144802.jpg";
import shotMerchants from "../../besor3a/Screenshot_20260813_144923.jpg";

const PLAY_STORE_URL = projects.find((p) => p.playStore)?.playStore;

const ROLES = [
  {
    id: "customer",
    label: "Customer",
    icon: ShoppingBag,
    tagline: "Browse, order, track.",
    description:
      "Customers browse local stores and restaurant menus, customize items with add-ons, and check out in a few taps. Live order states and a full history keep them in the loop from cart to doorstep.",
    highlights: ["Add-ons & custom quantities", "Live order states", "Google sign-in"],
    shots: [
      { src: shotHome, cap: "storefront home", alt: "Customer home — categories and popular stores" },
      { src: shotMenu, cap: "menu & pricing", alt: "Store menu with item prices in EGP" },
      { src: shotItem, cap: "item detail", alt: "Item detail with add-ons and quantity picker" },
      { src: shotLogin, cap: "sign-in", alt: "Customer login with Google sign-in" },
      { src: shotOrders, cap: "orders", alt: "Orders screen with active and past orders" },
      { src: shotProfile, cap: "profile", alt: "Profile with delivery address and settings" },
    ],
  },
  {
    id: "partners",
    label: "Partners",
    icon: Users,
    tagline: "Sellers & drivers, one onboarding flow.",
    description:
      "Merchants and delivery drivers join from the same app — no separate tooling. Sellers get a live storefront with an incoming-order queue; drivers get dispatched jobs with pickup, drop-off, and payout baked in.",
    highlights: ["Same-app onboarding", "Storefront + order queue", "Quota-based dispatch"],
    shots: [
      { src: shotRoles, cap: "partner onboarding", alt: "Partner onboarding — join as a seller or driver" },
    ],
  },
  {
    id: "admin",
    label: "Admin",
    icon: LayoutDashboard,
    tagline: "The control room.",
    description:
      "Admins get a full console inside the same app: user demographics, order and revenue analytics with daily, weekly, and monthly views, plus merchant and driver management.",
    highlights: ["Demographics analytics", "Merchant approvals", "Driver management"],
    shots: [
      { src: shotWelcome, cap: "welcome", alt: "Besor3a welcome screen" },
      { src: shotAnalytics, cap: "analytics", alt: "Admin analytics — user demographics and order stats" },
      { src: shotSidebar, cap: "console nav", alt: "Admin navigation — dashboard, drivers, merchants, orders" },
      { src: shotMerchants, cap: "merchant ops", alt: "Merchant management with activate and suspend actions" },
    ],
  },
];

const ARCH = [
  { icon: Smartphone, title: "Flutter", sub: "Android client · 4 roles" },
  { icon: Server, title: "Node.js", sub: "REST API · auth · dispatch" },
  { icon: Database, title: "PostgreSQL + Firestore", sub: "relational + realtime" },
];

/* Eased count-up for metric numbers */
function useCountUp(target, start, duration = 1300) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

function PhoneFrame({ src, alt }) {
  return (
    <div className="phone-frame">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}

export default function Besor3a() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [shotIdx, setShotIdx] = useState(0);
  const tabRefs = useRef([]);
  const role = ROLES[roleIdx];

  const metricsRef = useRef(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: "-80px" });
  const rolesCount = useCountUp(4, metricsInView);
  const usersCount = useCountUp(52, metricsInView);

  const selectRole = (i) => {
    setRoleIdx(i);
    setShotIdx(0);
  };

  /* Roving-tabindex keyboard navigation for the tablist */
  const onTabsKeyDown = (e) => {
    let next = null;
    if (e.key === "ArrowRight") next = (roleIdx + 1) % ROLES.length;
    else if (e.key === "ArrowLeft") next = (roleIdx - 1 + ROLES.length) % ROLES.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = ROLES.length - 1;
    if (next !== null) {
      e.preventDefault();
      selectRole(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section id="besor3a" className="section-border" style={{ padding: "6rem 0" }}>
      <div className="container-main">
        {/* Header: heading + Play Store button */}
        <RevealOnScroll>
          <div className="cs-header">
            <SectionHeading
              label="// featured case study"
              title="Besor3a — multi-role delivery, shipped."
              color="var(--lime)"
            />
            {PLAY_STORE_URL && (
              <a
                className="cs-play-btn"
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoGooglePlaystore size={16} />
                <span>Get it on Play Store</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </RevealOnScroll>

        {/* Meta: role + stack */}
        <RevealOnScroll delay={0.05}>
          <div className="cs-meta">
            <span className="cs-role-line">
              Mobile Developer · Backend Integration · Al-Salhia Al-Jadida, Egypt
            </span>
            <div className="cs-stack-tags">
              {["Flutter", "Node.js", "Firebase", "Google Play"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Metrics band */}
        <RevealOnScroll delay={0.1}>
          <div ref={metricsRef} className="cs-metrics">
            <div className="cs-metric">
              <span className="cs-metric-value">{rolesCount}</span>
              <span className="cs-metric-label">user roles · one app</span>
            </div>
            <div className="cs-metric">
              <span className="cs-metric-value">
                <span className="cs-live-dot" aria-hidden="true" />
                Live
              </span>
              <span className="cs-metric-label">on Google Play Store</span>
            </div>
            <div className="cs-metric">
              <span className="cs-metric-value">{usersCount}+</span>
              <span className="cs-metric-label">active users</span>
            </div>
            <div className="cs-metric">
              <span className="cs-metric-value">
                1<span style={{ color: "var(--text-dimmed)" }}>→</span>4
              </span>
              <span className="cs-metric-label">backend · role clients</span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Role tabs */}
        <RevealOnScroll delay={0.12}>
          <div
            className="role-tabs"
            role="tablist"
            aria-label="Besor3a user roles"
            onKeyDown={onTabsKeyDown}
          >
            {ROLES.map((r, i) => (
              <button
                key={r.id}
                ref={(el) => (tabRefs.current[i] = el)}
                role="tab"
                id={`cs-tab-${r.id}`}
                aria-selected={i === roleIdx}
                aria-controls="cs-panel"
                tabIndex={i === roleIdx ? 0 : -1}
                className="role-tab"
                onClick={() => selectRole(i)}
              >
                <r.icon size={14} aria-hidden="true" />
                {r.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Stage: spotlight phone + role info + filmstrip */}
        <RevealOnScroll delay={0.15}>
          <div
            className="cs-stage"
            role="tabpanel"
            id="cs-panel"
            aria-labelledby={`cs-tab-${role.id}`}
          >
            <span aria-hidden="true" className="cs-watermark">بسرعة</span>

            {/* Spotlight */}
            <div className="cs-spotlight">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${role.id}-${shotIdx}`}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.985 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <PhoneFrame src={role.shots[shotIdx].src} alt={role.shots[shotIdx].alt} />
                </motion.div>
              </AnimatePresence>
              <p className="cs-caption">
                <span style={{ color: "var(--lime)" }}>
                  {String(shotIdx + 1).padStart(2, "0")}
                </span>
                <span>
                  {" "}/ {String(role.shots.length).padStart(2, "0")} — {role.shots[shotIdx].cap}
                </span>
              </p>
            </div>

            {/* Role info + filmstrip */}
            <div className="cs-info">
              <AnimatePresence mode="wait">
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
                >
                  <div>
                    <p className="cs-eyebrow">// {role.id} experience</p>
                    <h3 className="cs-tagline">{role.tagline}</h3>
                  </div>
                  <p className="cs-desc">{role.description}</p>
                  <div className="cs-chips">
                    {role.highlights.map((h) => (
                      <span key={h} className="cs-chip">{h}</span>
                    ))}
                  </div>

                  {role.shots.length > 1 && (
                    <div className="filmstrip" role="group" aria-label={`${role.label} screenshots`}>
                      {role.shots.map((s, i) => (
                        <button
                          key={s.cap}
                          type="button"
                          className="film-thumb"
                          aria-current={i === shotIdx}
                          aria-label={`Show screenshot: ${s.alt}`}
                          onClick={() => setShotIdx(i)}
                        >
                          <img src={s.src} alt="" loading="lazy" decoding="async" />
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </RevealOnScroll>

        {/* Architecture strip */}
        <RevealOnScroll delay={0.1}>
          <div className="cs-arch">
            <p className="cs-eyebrow">// under the hood</p>
            <div className="arch-row">
              {ARCH.map((node, i) => (
                <div key={node.title} style={{ display: "contents" }}>
                  {i > 0 && <div className="arch-connector" aria-hidden="true" />}
                  <div className="arch-node">
                    <node.icon size={20} aria-hidden="true" />
                    <strong>{node.title}</strong>
                    <span>{node.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
