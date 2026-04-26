import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Focus Areas", href: "#focus-areas" },
  { label: "Community", href: "#community" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Connect", href: "#connect" },
];

export function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "oklch(var(--navy))" : "transparent",
        boxShadow: scrolled ? "0 4px 32px oklch(var(--navy) / 0.5)" : "none",
        borderBottom: scrolled ? "1px solid oklch(var(--gold) / 0.1)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <button
          type="button"
          className="flex flex-col leading-none text-left"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span
            className="font-display text-xl font-semibold"
            style={{ color: "oklch(var(--gold))" }}
          >
            Prof. Ripu Ranjan Sinha
          </span>
          <span
            className="font-ui text-[0.6rem] tracking-widest uppercase mt-0.5"
            style={{ color: "oklch(var(--gold-light))" }}
          >
            Global Transformationist
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="font-ui text-sm font-medium tracking-wide transition-colors duration-200 hover:text-gold"
                style={{ color: "oklch(var(--gold-light) / 0.8)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => scrollToSection("#connect")}
              className="font-ui text-sm font-semibold px-5 py-2.5 rounded-sm border transition-all duration-200 hover:bg-gold hover:text-navy"
              style={{
                borderColor: "oklch(var(--gold))",
                color: "oklch(var(--gold))",
              }}
            >
              Join Movement
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2"
          style={{ color: "oklch(var(--gold))" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t"
            style={{
              backgroundColor: "oklch(var(--navy))",
              borderColor: "oklch(var(--gold) / 0.2)",
            }}
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="font-ui text-base font-medium block py-1"
                    style={{ color: "oklch(var(--gold-light))" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
