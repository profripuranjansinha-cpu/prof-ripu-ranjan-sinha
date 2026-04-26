import { ExternalLink, Heart } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Focus Areas", href: "#focus-areas" },
  { label: "Community", href: "#community" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Connect", href: "#connect" },
];

const focusAreas = [
  "Economy",
  "Culture",
  "Technology",
  "Agriculture",
  "Renewable Energy",
  "Food Security",
  "Mental Health",
];

export function SiteFooter() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "oklch(var(--navy))" }}
    >
      {/* Gold top border */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(var(--gold)), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <h3
              className="font-display text-2xl font-bold mb-2"
              style={{ color: "oklch(var(--gold))" }}
            >
              Prof. Ripu Ranjan Sinha
            </h3>
            <p
              className="font-ui text-xs tracking-widest uppercase mb-4"
              style={{ color: "oklch(var(--gold-light) / 0.6)" }}
            >
              Transformationist | Policy Strategist | International Liaison
            </p>
            <p
              className="font-body text-sm leading-relaxed max-w-xs mb-6"
              style={{ color: "oklch(var(--gold-pale) / 0.5)" }}
            >
              Catalyzing global change through visionary leadership, inclusive
              policy, and cross-sector collaboration.
            </p>
            <a
              href="https://www.ripuranjansinha.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-ui text-sm font-semibold hover:underline transition-colors"
              style={{ color: "oklch(var(--gold))" }}
            >
              <ExternalLink size={14} />
              www.ripuranjansinha.in
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-ui text-xs tracking-widest uppercase mb-5"
              style={{ color: "oklch(var(--gold) / 0.6)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm transition-colors duration-200 text-left hover:text-gold"
                    style={{ color: "oklch(var(--gold-pale) / 0.5)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus areas */}
          <div>
            <h4
              className="font-ui text-xs tracking-widest uppercase mb-5"
              style={{ color: "oklch(var(--gold) / 0.6)" }}
            >
              Focus Areas
            </h4>
            <ul className="space-y-3">
              {focusAreas.map((area) => (
                <li key={area}>
                  <span
                    className="font-body text-sm"
                    style={{ color: "oklch(var(--gold-pale) / 0.5)" }}
                  >
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10 h-px"
          style={{ backgroundColor: "oklch(var(--gold) / 0.08)" }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="font-body text-xs"
            style={{ color: "oklch(var(--gold-pale) / 0.35)" }}
          >
            &copy; {year} Prof. Ripu Ranjan Sinha. All rights reserved.
          </p>

          <p
            className="font-body text-xs flex items-center gap-1.5"
            style={{ color: "oklch(var(--gold-pale) / 0.35)" }}
          >
            Built with{" "}
            <Heart
              size={12}
              className="inline"
              style={{ color: "oklch(var(--gold))" }}
              fill="oklch(var(--gold))"
            />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "oklch(var(--gold) / 0.6)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
