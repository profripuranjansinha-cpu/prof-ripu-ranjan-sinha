import { Skeleton } from "@/components/ui/skeleton";
import {
  Cpu,
  Globe2,
  Heart,
  Leaf,
  type LucideIcon,
  ShieldCheck,
  TrendingUp,
  Wind,
} from "lucide-react";
import { motion } from "motion/react";
import type { FocusArea } from "../backend.d.ts";
import { useFocusAreas } from "../hooks/useQueries";

const iconMap: Record<string, LucideIcon> = {
  economy: TrendingUp,
  culture: Globe2,
  technology: Cpu,
  agriculture: Leaf,
  renewable_energy: Wind,
  food_security: ShieldCheck,
  mental_health: Heart,
  default: TrendingUp,
};

const fallbackAreas: FocusArea[] = [
  {
    icon: "economy",
    title: "Economy & Growth",
    description:
      "Designing inclusive economic frameworks that foster equitable prosperity, reduce inequality, and empower communities across the global South and North alike.",
  },
  {
    icon: "culture",
    title: "Culture & Heritage",
    description:
      "Preserving cultural identity while facilitating cross-cultural dialogue — celebrating diversity as a catalyst for innovation and shared human flourishing.",
  },
  {
    icon: "technology",
    title: "Technology & Innovation",
    description:
      "Harnessing emerging technologies ethically to solve systemic challenges, bridge digital divides, and accelerate sustainable development goals.",
  },
  {
    icon: "agriculture",
    title: "Agriculture & Rural Dev",
    description:
      "Transforming agricultural systems through smart policy, precision farming, and knowledge transfer to ensure food sovereignty and farmer dignity.",
  },
  {
    icon: "renewable_energy",
    title: "Renewable Energy",
    description:
      "Driving the global energy transition through policy advocacy, investment frameworks, and community-centered clean energy deployment strategies.",
  },
  {
    icon: "food_security",
    title: "Food Security",
    description:
      "Building resilient food systems that guarantee nutritional security for all, from farm to table — eliminating hunger as a solvable policy challenge.",
  },
  {
    icon: "mental_health",
    title: "Mental Health & Wellbeing",
    description:
      "Elevating mental health to a global development priority — destigmatizing, integrating, and funding mental wellness infrastructure worldwide.",
  },
];

function FocusCard({ area, index }: { area: FocusArea; index: number }) {
  const IconComponent =
    iconMap[area.icon.toLowerCase().replace(/ /g, "_")] || iconMap.default;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: 0.07 * index }}
      className="relative p-8 rounded-none border card-hover group cursor-default"
      style={{
        backgroundColor: "oklch(var(--navy-mid))",
        borderColor: "oklch(var(--gold) / 0.1)",
        borderLeftColor: "oklch(var(--gold) / 0.22)",
      }}
    >
      {/* Hover gold glow — top-center radial */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(var(--gold) / 0.07), transparent 70%)",
        }}
      />

      {/* Fix 3: Larger icon container, more distinctive — circle not square */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-6 relative"
        style={{
          backgroundColor: "oklch(var(--gold) / 0.1)",
          border: "1px solid oklch(var(--gold) / 0.22)",
          boxShadow: "0 0 20px oklch(var(--gold) / 0.08)",
        }}
      >
        <IconComponent size={24} style={{ color: "oklch(var(--gold))" }} />
      </div>

      <h3
        className="font-display text-xl font-semibold mb-3 leading-snug"
        style={{ color: "oklch(var(--white))" }}
      >
        {area.title}
      </h3>
      {/* Fix 3: Body text raised to 75% opacity for readability */}
      <p
        className="font-body text-sm leading-[1.75]"
        style={{ color: "oklch(var(--gold-pale) / 0.72)" }}
      >
        {area.description}
      </p>

      {/* Bottom accent line — animates on hover */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: "oklch(var(--gold) / 0.6)" }}
      />
    </motion.article>
  );
}

export function FocusAreasSection() {
  const { data: areas, isLoading } = useFocusAreas();
  const displayAreas = areas && areas.length > 0 ? areas : fallbackAreas;

  return (
    <section
      id="focus-areas"
      className="py-28 relative"
      style={{ backgroundColor: "oklch(var(--navy))" }}
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/assets/generated/hero-banner.dim_1400x500.jpg"
          alt=""
          className="w-full h-full object-cover opacity-10"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "oklch(var(--navy) / 0.9)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="section-label block mb-4">Areas of Impact</span>
              <h2
                className="font-display font-bold leading-tight"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "oklch(var(--white))",
                }}
              >
                Seven Pillars of{" "}
                <span className="text-gradient-gold">Transformation</span>
              </h2>
            </div>
            <p
              className="font-body text-sm max-w-xs leading-[1.7] md:text-right flex-shrink-0"
              style={{ color: "oklch(var(--gold-pale) / 0.55)" }}
            >
              Simultaneous action across interconnected domains — addressing
              root causes, not symptoms.
            </p>
          </div>
          {/* Horizontal rule with gold fade */}
          <div
            className="mt-8 h-px w-full"
            style={{
              background:
                "linear-gradient(to right, oklch(var(--gold) / 0.35), oklch(var(--gold) / 0.05) 60%, transparent)",
            }}
          />
        </motion.div>

        {isLoading ? (
          /* Fix 3: 3-column max grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
            {["s1", "s2", "s3", "s4", "s5", "s6", "s7"].map((k) => (
              <Skeleton key={k} className="h-56" />
            ))}
          </div>
        ) : (
          /* Fix 3: Removed xl:grid-cols-4 — max 3 columns for readability */
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ backgroundColor: "oklch(var(--gold) / 0.08)" }}
          >
            {displayAreas.map((area, i) => (
              <FocusCard key={area.icon} area={area} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
