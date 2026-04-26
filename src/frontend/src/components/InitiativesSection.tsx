import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle2, Clock, Zap } from "lucide-react";
import { motion } from "motion/react";
import type { GlobalInitiative } from "../backend.d.ts";
import { useGlobalInitiatives } from "../hooks/useQueries";

const fallbackInitiatives: GlobalInitiative[] = [
  {
    status: "Active",
    title: "Global Youth Leadership Summit 2026",
    description:
      "A landmark gathering bringing together 5,000 young leaders from 120+ countries to co-create solutions for climate, technology, and governance challenges.",
  },
  {
    status: "Active",
    title: "Digital Equity Initiative for Rural Communities",
    description:
      "Deploying low-cost digital infrastructure and literacy programs across underserved regions in Asia, Africa, and Latin America.",
  },
  {
    status: "Active",
    title: "Food Security Policy Framework 2030",
    description:
      "A multilateral policy roadmap adopted by 35 nations to eliminate extreme hunger through regenerative agriculture and supply chain reform.",
  },
  {
    status: "Upcoming",
    title: "Global Mental Health Ministerial Conference",
    description:
      "First-of-its-kind ministerial conference dedicated exclusively to mental health policy, bringing together health ministers from 80 countries.",
  },
  {
    status: "Upcoming",
    title: "Renewable Energy Transition Accelerator",
    description:
      "A blended finance mechanism targeting $10B to accelerate clean energy transition in emerging economies over the next five years.",
  },
  {
    status: "Completed",
    title: "Cultural Diplomacy Exchange Program",
    description:
      "Successfully facilitated cultural exchanges between 200 institutions across 40 countries, fostering mutual understanding and soft power diplomacy.",
  },
  {
    status: "Completed",
    title: "Smart Agriculture Knowledge Transfer Program",
    description:
      "Deployed precision agriculture technologies and training to 500,000 smallholder farmers across Southeast Asia, increasing yields by 40%.",
  },
];

const statusConfig = {
  Active: {
    icon: Zap,
    label: "Active",
    bg: "oklch(var(--gold) / 0.12)",
    border: "oklch(var(--gold) / 0.35)",
    text: "oklch(var(--gold))",
    dot: "oklch(var(--gold))",
  },
  Upcoming: {
    icon: Clock,
    label: "Upcoming",
    bg: "oklch(0.65 0.15 220 / 0.12)",
    border: "oklch(0.65 0.15 220 / 0.35)",
    text: "oklch(0.65 0.15 220)",
    dot: "oklch(0.65 0.15 220)",
  },
  Completed: {
    icon: CheckCircle2,
    label: "Completed",
    bg: "oklch(0.65 0.15 145 / 0.12)",
    border: "oklch(0.65 0.15 145 / 0.35)",
    text: "oklch(0.65 0.15 145)",
    dot: "oklch(0.65 0.15 145)",
  },
};

function StatusBadge({ status }: { status: string }) {
  const config =
    statusConfig[status as keyof typeof statusConfig] || statusConfig.Completed;

  return (
    <span
      className="inline-flex items-center gap-1.5 font-ui text-xs font-semibold px-3 py-1.5 rounded-sm"
      style={{
        backgroundColor: config.bg,
        border: `1px solid ${config.border}`,
        color: config.text,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: config.dot }}
      />
      {config.label}
    </span>
  );
}

function InitiativeCard({
  initiative,
  index,
}: {
  initiative: GlobalInitiative;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: 0.07 * index }}
      className="relative p-7 rounded-sm border card-hover group"
      style={{
        backgroundColor: "oklch(var(--navy-mid) / 0.9)",
        borderColor: "oklch(var(--gold) / 0.1)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Left accent */}
      <div
        className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
        style={{
          backgroundColor:
            initiative.status === "Active"
              ? "oklch(var(--gold))"
              : initiative.status === "Upcoming"
                ? "oklch(0.65 0.15 220)"
                : "oklch(0.65 0.15 145)",
        }}
      />

      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <h3
          className="font-display text-lg font-semibold flex-1 min-w-0"
          style={{ color: "oklch(var(--white))" }}
        >
          {initiative.title}
        </h3>
        <StatusBadge status={initiative.status} />
      </div>
      <p
        className="font-body text-sm leading-relaxed"
        style={{ color: "oklch(var(--gold-pale) / 0.6)" }}
      >
        {initiative.description}
      </p>
    </motion.article>
  );
}

export function InitiativesSection() {
  const { data: initiatives, isLoading } = useGlobalInitiatives();
  const displayInitiatives =
    initiatives && initiatives.length > 0 ? initiatives : fallbackInitiatives;

  return (
    <section
      id="initiatives"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "oklch(var(--navy))" }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-15">
        <img
          src="/assets/generated/section-bg.dim_1600x900.jpg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(var(--navy) / 0.5), oklch(var(--navy)) 80%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label block mb-4">In Action</span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "oklch(var(--white))" }}
          >
            Global Initiatives
          </h2>
          <p
            className="font-body text-base mt-4 max-w-xl mx-auto leading-relaxed"
            style={{ color: "oklch(var(--gold-pale) / 0.65)" }}
          >
            From boardrooms to villages — transformative programs already
            changing lives across continents.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {Object.entries(statusConfig).map(([status, config]) => (
              <span
                key={status}
                className="inline-flex items-center gap-2 font-ui text-xs"
                style={{ color: "oklch(var(--gold-pale) / 0.6)" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: config.dot }}
                />
                {config.label}
              </span>
            ))}
          </div>
        </motion.div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-5">
            {["i1", "i2", "i3", "i4", "i5", "i6"].map((k) => (
              <Skeleton key={k} className="h-36 rounded-sm" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {displayInitiatives.map((initiative, i) => (
              <InitiativeCard
                key={initiative.title}
                initiative={initiative}
                index={i}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
