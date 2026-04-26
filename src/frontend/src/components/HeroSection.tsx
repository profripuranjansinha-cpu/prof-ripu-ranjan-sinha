import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "oklch(var(--navy))" }}
    >
      {/* Hero banner background */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-banner.dim_1400x500.jpg"
          alt="Global connectivity"
          className="w-full h-full object-cover opacity-20"
        />
        {/* Deep directional gradient — navy stronger at left where text is */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, oklch(var(--navy)) 30%, oklch(var(--navy-mid) / 0.75) 70%, oklch(var(--navy) / 0.5) 100%)",
          }}
        />
      </div>

      {/* Fix 1: Refined geometric accent — thin vertical gold rule, right quarter */}
      <div
        className="absolute top-0 right-[38%] w-px h-full opacity-[0.07]"
        style={{ backgroundColor: "oklch(var(--gold))" }}
      />
      {/* Diagonal slice — right panel atmosphere */}
      <div
        className="absolute top-0 right-0 w-[45%] h-full opacity-[0.04]"
        style={{
          background:
            "linear-gradient(160deg, transparent 40%, oklch(var(--gold)) 100%)",
        }}
      />

      {/* Atmospheric orbs — tighter placement */}
      <div
        className="absolute top-20 right-[10%] w-96 h-96 rounded-full blur-3xl opacity-[0.08]"
        style={{ backgroundColor: "oklch(var(--gold))" }}
      />
      <div
        className="absolute bottom-10 left-[5%] w-64 h-64 rounded-full blur-2xl opacity-[0.06]"
        style={{ backgroundColor: "oklch(0.55 0.1 252)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Text content */}
        <div className="z-10">
          {/* Eye-brow label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-7"
          >
            {/* Gold dot accent */}
            <span
              className="block w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: "oklch(var(--gold))" }}
            />
            <span className="section-label">Global Leadership Platform</span>
          </motion.div>

          {/* Fix 1: Full name as a single commanding headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-bold leading-[1.0] mb-2"
            style={{
              fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
              color: "oklch(var(--white))",
              letterSpacing: "-0.01em",
            }}
          >
            Prof. Ripu Ranjan
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display font-bold leading-[1.0] mb-8"
            style={{
              fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            <span className="text-gradient-gold">Sinha</span>
          </motion.div>

          {/* Fix 1: Authority credential line — elegant pipe-separated, not badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="flex items-center mb-8 pl-5 border-l-2"
            style={{ borderColor: "oklch(var(--gold) / 0.5)" }}
          >
            <p className="hero-credential">
              Transformationist
              <span className="hero-credential-separator">·</span>
              Policy Strategist
              <span className="hero-credential-separator">·</span>
              International Liaison
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="font-body text-base leading-[1.75] mb-10 max-w-md"
            style={{ color: "oklch(var(--gold-pale) / 0.72)" }}
          >
            Catalyzing global transformation across economy, culture,
            technology, agriculture, renewable energy, food security, and mental
            health — connecting leaders, thinkers, and change-makers worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            <button
              type="button"
              onClick={() => scrollToSection("#connect")}
              className="font-ui font-semibold text-sm px-8 py-3.5 rounded-none transition-all duration-200 hover:shadow-gold-glow hover:-translate-y-0.5"
              style={{
                backgroundColor: "oklch(var(--gold))",
                color: "oklch(var(--navy))",
                letterSpacing: "0.03em",
              }}
            >
              Join the Movement
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("#about")}
              className="font-ui font-semibold text-sm px-8 py-3.5 rounded-none border transition-all duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: "oklch(var(--gold) / 0.4)",
                color: "oklch(var(--gold-light))",
                letterSpacing: "0.03em",
              }}
            >
              Explore Vision
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t"
            style={{ borderColor: "oklch(var(--gold) / 0.12)" }}
          >
            {[
              { value: "50+", label: "Countries" },
              { value: "100+", label: "Initiatives" },
              { value: "1M+", label: "Lives Impacted" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-display text-4xl font-bold leading-none"
                  style={{ color: "oklch(var(--gold))" }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-ui text-[0.65rem] tracking-[0.18em] uppercase mt-2"
                  style={{ color: "oklch(var(--gold-pale) / 0.5)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:flex justify-center items-center relative"
        >
          {/* Outer atmospheric ring — large, very faint */}
          <div
            className="absolute w-[520px] h-[520px] rounded-full"
            style={{
              border: "1px solid oklch(var(--gold) / 0.08)",
              boxShadow: "0 0 100px oklch(var(--gold) / 0.06)",
            }}
          />
          {/* Inner ring */}
          <div
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{ border: "1px solid oklch(var(--gold) / 0.12)" }}
          />

          <div className="relative z-10">
            {/* Portrait frame with refined border accent */}
            <div
              className="w-[400px] h-[480px] overflow-hidden"
              style={{
                boxShadow:
                  "0 32px 100px -16px oklch(var(--navy) / 0.9), 0 0 0 1px oklch(var(--gold) / 0.18)",
              }}
            >
              <img
                src="/assets/generated/hero-portrait.dim_600x700.png"
                alt="Prof. Ripu Ranjan Sinha"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Fix 1: Larger, more architecturally intentional corner marks */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2"
              style={{ borderColor: "oklch(var(--gold))" }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r opacity-40"
              style={{ borderColor: "oklch(var(--gold))" }}
            />
            <div
              className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2"
              style={{ borderColor: "oklch(var(--gold) / 0.5)" }}
            />

            {/* Name plate below portrait */}
            <div className="mt-5 px-1 flex items-center justify-between">
              <div>
                <p
                  className="font-display text-sm font-semibold"
                  style={{ color: "oklch(var(--gold))" }}
                >
                  Prof. Ripu Ranjan Sinha
                </p>
                <p
                  className="font-ui text-[0.6rem] tracking-widest uppercase mt-0.5"
                  style={{ color: "oklch(var(--gold-pale) / 0.45)" }}
                >
                  Global Transformationist
                </p>
              </div>
              <a
                href="https://www.ripuranjansinha.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui text-[0.6rem] tracking-wide hover:underline"
                style={{ color: "oklch(var(--gold) / 0.5)" }}
              >
                ripuranjansinha.in ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={() => scrollToSection("#about")}
      >
        <span
          className="font-ui text-[0.58rem] tracking-[0.2em] uppercase"
          style={{ color: "oklch(var(--gold) / 0.4)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
          style={{ color: "oklch(var(--gold) / 0.4)" }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
