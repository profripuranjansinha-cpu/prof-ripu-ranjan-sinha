import { Skeleton } from "@/components/ui/skeleton";
import { Award, Globe, Lightbulb, Users } from "lucide-react";
import { motion } from "motion/react";
import { useProfileInfo } from "../hooks/useQueries";

const highlights = [
  {
    icon: Globe,
    value: "50+",
    label: "Countries Engaged",
    desc: "Global network spanning every continent",
  },
  {
    icon: Lightbulb,
    value: "100+",
    label: "Policy Initiatives",
    desc: "Transformative programs implemented",
  },
  {
    icon: Users,
    value: "1M+",
    label: "Lives Impacted",
    desc: "Individuals touched by our work",
  },
  {
    icon: Award,
    value: "25+",
    label: "Years of Leadership",
    desc: "Decades of global transformation",
  },
];

const fallbackProfile = {
  name: "Prof. Ripu Ranjan Sinha",
  titles: "Transformationist | Policy Strategist | International Liaison",
  credentials:
    "PhD International Policy | Global Leadership Fellow | UN Advisor",
  bio: "Prof. Ripu Ranjan Sinha is a globally recognized transformationist and policy strategist who has dedicated his career to bridging divides across nations, sectors, and generations. With deep expertise in international policy, he has worked with governments, multilateral organizations, and civil society to craft frameworks that address humanity's most pressing challenges — from food security and renewable energy to mental health and cultural preservation.\n\nHis unique approach combines rigorous analytical thinking with grassroots engagement, ensuring that global strategies translate into tangible impact at the community level. As an International Liaison, he fosters partnerships that amplify voices from the Global South, bringing diverse perspectives to the world stage.",
  visionStatement:
    "A world where every nation thrives through inclusive growth, where technology serves humanity, where culture unites rather than divides — and where the next generation inherits a planet of abundance, dignity, and boundless possibility.",
};

export function AboutSection() {
  const { data: profile, isLoading } = useProfileInfo();
  const display = profile || fallbackProfile;

  return (
    <section
      id="about"
      className="section-light py-28 relative overflow-hidden"
    >
      {/* Additional directional depth */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-[0.035] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, oklch(var(--navy)), transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label block mb-4">About</span>
            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-3 gold-line"
              style={{ color: "oklch(var(--navy))" }}
            >
              Vision &amp; Mission
            </h2>

            <div className="mt-6 space-y-5">
              {isLoading ? (
                <>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </>
              ) : (
                display.bio.split("\n\n").map((para) => (
                  <p
                    key={para.slice(0, 30)}
                    className="font-body text-base leading-relaxed"
                    style={{ color: "oklch(var(--navy-light))" }}
                  >
                    {para}
                  </p>
                ))
              )}
            </div>

            {/* Vision Statement — elevated treatment */}
            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 relative"
            >
              {/* Gold quotation mark — large, decorative */}
              <span
                className="font-display absolute -top-5 -left-2 text-7xl leading-none select-none"
                style={{ color: "oklch(var(--gold) / 0.18)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <div
                className="pl-8 pr-4 py-5 border-l-[3px] relative"
                style={{
                  borderColor: "oklch(var(--gold))",
                  backgroundColor: "oklch(var(--navy) / 0.04)",
                }}
              >
                <p
                  className="font-display text-xl italic font-medium leading-[1.6]"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  {isLoading
                    ? "Loading vision statement..."
                    : display.visionStatement}
                </p>
              </div>
            </motion.blockquote>

            {/* Credentials */}
            {!isLoading && display.credentials && (
              <div className="mt-8 flex flex-wrap gap-2">
                {display.credentials.split("|").map((cred) => (
                  <span
                    key={cred.trim()}
                    className="font-ui text-xs font-medium px-3 py-1.5 rounded-sm"
                    style={{
                      backgroundColor: "oklch(var(--navy) / 0.06)",
                      color: "oklch(var(--navy-mid))",
                      border: "1px solid oklch(var(--navy) / 0.12)",
                    }}
                  >
                    {cred.trim()}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right: Stats + highlights */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  className="p-6 rounded-sm border card-hover"
                  style={{
                    backgroundColor: "oklch(var(--white))",
                    borderColor: "oklch(var(--navy) / 0.08)",
                    boxShadow: "0 2px 12px oklch(var(--navy) / 0.06)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center mb-4"
                    style={{ backgroundColor: "oklch(var(--navy) / 0.06)" }}
                  >
                    <h.icon size={20} style={{ color: "oklch(var(--gold))" }} />
                  </div>
                  <div
                    className="font-display text-3xl font-bold"
                    style={{ color: "oklch(var(--navy))" }}
                  >
                    {h.value}
                  </div>
                  <div
                    className="font-ui text-sm font-semibold mt-1"
                    style={{ color: "oklch(var(--navy-mid))" }}
                  >
                    {h.label}
                  </div>
                  <div
                    className="font-body text-xs mt-1 leading-relaxed"
                    style={{ color: "oklch(var(--navy-light))" }}
                  >
                    {h.desc}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Reference website */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-5 rounded-sm border flex items-center gap-4"
              style={{
                backgroundColor: "oklch(var(--navy) / 0.03)",
                borderColor: "oklch(var(--gold) / 0.3)",
              }}
            >
              <Globe
                size={24}
                style={{ color: "oklch(var(--gold))", flexShrink: 0 }}
              />
              <div>
                <p
                  className="font-ui text-xs tracking-wider uppercase mb-0.5"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  Official Website
                </p>
                <a
                  href="https://www.ripuranjansinha.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-base font-semibold hover:underline transition-colors"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  www.ripuranjansinha.in
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
