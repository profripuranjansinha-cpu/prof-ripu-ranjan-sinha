import { Skeleton } from "@/components/ui/skeleton";
import {
  Briefcase,
  Code2,
  Cpu,
  Crown,
  FileText,
  Layers,
  type LucideIcon,
  Network,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import type { CommunitySegment } from "../backend.d.ts";
import { useCommunitySegments } from "../hooks/useQueries";

const segmentIcons: LucideIcon[] = [
  Crown,
  Network,
  Cpu,
  Layers,
  FileText,
  Briefcase,
  Code2,
  Sparkles,
];

const fallbackSegments: CommunitySegment[] = [
  {
    title: "Global Leaders",
    description:
      "Heads of state, ministers, ambassadors, and institutional leaders shaping international policy and global governance frameworks.",
  },
  {
    title: "Associates & Partners",
    description:
      "Strategic collaborators, institutional partners, and allied organizations advancing shared transformation agendas worldwide.",
  },
  {
    title: "Global Technologists",
    description:
      "Innovators, engineers, and digital pioneers leveraging technology to solve humanitarian challenges at planetary scale.",
  },
  {
    title: "Solution Architects",
    description:
      "Systems thinkers and design strategists who build the frameworks and blueprints for scalable, lasting change.",
  },
  {
    title: "Policy Enablers",
    description:
      "Analysts, advisors, and legislators who translate vision into actionable governance frameworks and regulatory innovation.",
  },
  {
    title: "Consultants & Advisors",
    description:
      "Domain experts providing specialized knowledge across economics, health, environment, agriculture, and social policy.",
  },
  {
    title: "Designers & Developers",
    description:
      "Creative and technical talent building the digital infrastructure, platforms, and experiences that power transformation.",
  },
  {
    title: "Youth Change-Makers",
    description:
      "The next generation of leaders, entrepreneurs, and activists who bring radical optimism and fresh energy to global challenges.",
  },
];

function SegmentCard({
  segment,
  index,
}: {
  segment: CommunitySegment;
  index: number;
}) {
  const IconComponent = segmentIcons[index % segmentIcons.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.06 * index }}
      className="flex-shrink-0 w-72 p-6 rounded-sm border card-hover"
      style={{
        backgroundColor: "oklch(var(--white))",
        borderColor: "oklch(var(--navy) / 0.08)",
        boxShadow: "0 2px 16px oklch(var(--navy) / 0.06)",
      }}
    >
      <div
        className="w-11 h-11 rounded-sm flex items-center justify-center mb-4"
        style={{
          backgroundColor: "oklch(var(--navy) / 0.06)",
          border: "1px solid oklch(var(--navy) / 0.1)",
        }}
      >
        <IconComponent size={20} style={{ color: "oklch(var(--gold))" }} />
      </div>
      <h3
        className="font-display text-base font-semibold mb-2"
        style={{ color: "oklch(var(--navy))" }}
      >
        {segment.title}
      </h3>
      <p
        className="font-body text-sm leading-relaxed"
        style={{ color: "oklch(var(--navy-light))" }}
      >
        {segment.description}
      </p>
    </motion.article>
  );
}

export function CommunitySection() {
  const { data: segments, isLoading } = useCommunitySegments();
  const displaySegments =
    segments && segments.length > 0 ? segments : fallbackSegments;

  return (
    <section id="community" className="section-light py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label block mb-4">Who We Serve</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-display text-4xl md:text-5xl font-bold gold-line"
              style={{ color: "oklch(var(--navy))" }}
            >
              Our Global Community
            </h2>
            <p
              className="font-body text-base max-w-sm leading-relaxed"
              style={{ color: "oklch(var(--navy-light))" }}
            >
              A movement for every mind open to transforming the world.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scrollable cards */}
      {isLoading ? (
        <div className="px-6 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"].map((k) => (
            <Skeleton key={k} className="h-40 rounded-sm" />
          ))}
        </div>
      ) : (
        <div className="relative">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, oklch(var(--cream)), transparent)",
            }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, oklch(var(--cream)), transparent)",
            }}
          />

          <div
            className="flex gap-5 overflow-x-auto pb-4 px-6 md:px-12 scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {displaySegments.map((seg, i) => (
              <SegmentCard key={seg.title} segment={seg} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 justify-center"
        >
          <p
            className="font-body text-base"
            style={{ color: "oklch(var(--navy-light))" }}
          >
            Ready to be part of the transformation?
          </p>
          <button
            type="button"
            onClick={() => {
              const el = document.querySelector("#connect");
              if (el) {
                const top =
                  el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            className="font-ui font-semibold text-sm px-6 py-3 rounded-sm transition-all duration-200 hover:shadow-navy-md hover:-translate-y-0.5"
            style={{
              backgroundColor: "oklch(var(--navy))",
              color: "oklch(var(--gold))",
              border: "1px solid oklch(var(--gold) / 0.3)",
            }}
          >
            Request Engagement →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
