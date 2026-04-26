import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Testimonial } from "../backend.d.ts";
import { useTestimonials } from "../hooks/useQueries";

const fallbackTestimonials: Testimonial[] = [
  {
    author: "Dr. Amara Osei-Bonsu",
    role: "Minister of Economic Planning",
    organization: "Republic of Ghana",
    quote:
      "Prof. Sinha's policy frameworks have been transformative for our national development agenda. His ability to bridge theoretical rigor with practical implementation is unmatched. The food security program he helped design is already lifting tens of thousands of families out of poverty.",
  },
  {
    author: "H.E. Sofia Mendez-Carvalho",
    role: "Ambassador",
    organization: "Regional Development Bank",
    quote:
      "Working with Prof. Sinha is an education in itself. He sees connections between technology, culture, and governance that others miss entirely. His vision for a truly multipolar, equitable world order is not just inspiring — it's actionable.",
  },
  {
    author: "Prof. Yuki Tanaka",
    role: "Director of Innovation Policy",
    organization: "Asia-Pacific Forum",
    quote:
      "The renewable energy transition framework Prof. Sinha architected has been adopted by six nations across our region. His approach respects local context while pursuing universal goals — exactly what inclusive transformation looks like in practice.",
  },
  {
    author: "Aisha Mohammed Al-Farsi",
    role: "Youth Delegate & Entrepreneur",
    organization: "Global Youth Assembly",
    quote:
      "Prof. Sinha gave our generation a seat at the table when no one else would. He genuinely believes that youth are not just stakeholders but architects of the future. His mentorship changed the trajectory of my career and my community.",
  },
  {
    author: "Dr. Rajesh Krishnamurthy",
    role: "Chief Technology Officer",
    organization: "Digital Public Infrastructure Institute",
    quote:
      "Few people understand the intersection of technology and policy at the depth Prof. Sinha does. His guidance helped us navigate regulatory landscapes across twelve jurisdictions and deploy digital solutions that have reached 2 million users.",
  },
  {
    author: "Maria Conceição de Lima",
    role: "Executive Director",
    organization: "Pan-American Health Coalition",
    quote:
      "Mental health advocacy at the global stage has always been an afterthought — until Prof. Sinha made it a priority. His tireless work to place mental wellness in the SDG framework has been nothing short of revolutionary.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="h-full flex flex-col">
      {/* Large quote mark */}
      <div className="mb-6">
        <Quote
          size={40}
          style={{ color: "oklch(var(--gold) / 0.4)" }}
          className="rotate-180"
        />
      </div>

      <blockquote
        className="font-body text-base leading-relaxed flex-1 italic"
        style={{ color: "oklch(var(--gold-pale) / 0.8)" }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <footer
        className="mt-8 pt-6 border-t"
        style={{ borderColor: "oklch(var(--gold) / 0.15)" }}
      >
        <div
          className="font-display text-base font-semibold"
          style={{ color: "oklch(var(--white))" }}
        >
          {testimonial.author}
        </div>
        <div
          className="font-ui text-sm mt-0.5"
          style={{ color: "oklch(var(--gold))" }}
        >
          {testimonial.role}
        </div>
        <div
          className="font-ui text-xs mt-0.5"
          style={{ color: "oklch(var(--gold-pale) / 0.5)" }}
        >
          {testimonial.organization}
        </div>
      </footer>
    </div>
  );
}

export function TestimonialsSection() {
  const { data: testimonials, isLoading } = useTestimonials();
  const displayTestimonials =
    testimonials && testimonials.length > 0
      ? testimonials
      : fallbackTestimonials;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const VISIBLE = 3;
  const maxIndex = Math.max(0, displayTestimonials.length - VISIBLE);

  const prev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((i) => i - 1);
    }
  };

  const next = () => {
    if (currentIndex < maxIndex) {
      setDirection(1);
      setCurrentIndex((i) => i + 1);
    }
  };

  const visible = displayTestimonials.slice(
    currentIndex,
    currentIndex + VISIBLE,
  );

  return (
    <section
      id="testimonials"
      className="section-light py-28 relative overflow-hidden"
    >
      {/* Decorative depth orbs — work with section-light atmosphere */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-[0.06]"
        style={{ backgroundColor: "oklch(var(--navy))" }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-[0.06]"
        style={{ backgroundColor: "oklch(var(--gold))" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="section-label block mb-4">Voices of Impact</span>
            <h2
              className="font-display text-4xl md:text-5xl font-bold gold-line"
              style={{ color: "oklch(var(--navy))" }}
            >
              What Leaders Say
            </h2>
          </div>

          {/* Nav controls */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-11 h-11 rounded-sm border flex items-center justify-center transition-all duration-200 disabled:opacity-30 hover:border-navy"
              style={{
                borderColor: "oklch(var(--navy) / 0.2)",
                color: "oklch(var(--navy))",
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="w-11 h-11 rounded-sm border flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              style={{
                borderColor: "oklch(var(--navy) / 0.2)",
                color: "oklch(var(--navy))",
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {["t1", "t2", "t3"].map((k) => (
              <Skeleton key={k} className="h-64 rounded-sm" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((testimonial, i) => (
                <motion.div
                  key={`${testimonial.author}-${currentIndex}`}
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 40 : -40,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: direction > 0 ? -40 : 40,
                  }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="p-8 rounded-sm border card-hover"
                  style={{
                    backgroundColor: "oklch(var(--navy))",
                    borderColor: "oklch(var(--gold) / 0.12)",
                    boxShadow: "0 4px 24px oklch(var(--navy) / 0.15)",
                  }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }, (_, i) => i).map((i) => (
            <button
              key={`dot-${i}`}
              type="button"
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className="transition-all duration-200 rounded-full"
              style={{
                width: i === currentIndex ? "24px" : "8px",
                height: "8px",
                backgroundColor:
                  i === currentIndex
                    ? "oklch(var(--navy))"
                    : "oklch(var(--navy) / 0.2)",
              }}
              aria-label={`Go to testimonial page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
