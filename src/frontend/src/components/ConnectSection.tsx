import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Globe, Loader2, Mail, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitEngagementRequest } from "../hooks/useQueries";

const SECTORS = [
  "Government & Policy",
  "Technology & Innovation",
  "Agriculture & Rural Development",
  "Healthcare & Mental Health",
  "Renewable Energy",
  "Education & Youth",
  "Economy & Finance",
  "Culture & Arts",
  "Civil Society & NGO",
  "Media & Communications",
  "Other",
];

const ROLES = [
  "Head of State / Minister",
  "Ambassador / Diplomat",
  "Policy Strategist",
  "Senior Executive",
  "Academic / Researcher",
  "Technologist / Developer",
  "Solution Architect",
  "Consultant / Advisor",
  "Designer / Creative",
  "Youth Leader / Student",
  "Entrepreneur",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  role: string;
  sector: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  email: "",
  role: "",
  sector: "",
  message: "",
};

export function ConnectSection() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync, isPending } = useSubmitEngagementRequest();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.email ||
      !form.role ||
      !form.sector ||
      !form.message
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const result = await mutateAsync({
        name: form.name,
        email: form.email,
        role: form.role,
        sector: form.sector,
        message: form.message,
      });

      if (result) {
        setSubmitted(true);
        setForm(emptyForm);
        toast.success("Engagement request submitted successfully!");
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch {
      toast.error("An error occurred. Please try again.");
    }
  };

  const inputStyle = {
    backgroundColor: "oklch(var(--navy-mid))",
    borderColor: "oklch(var(--gold) / 0.2)",
    color: "oklch(var(--white))",
  } as React.CSSProperties;

  return (
    <section
      id="connect"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "oklch(var(--navy))" }}
    >
      {/* Bg texture */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/assets/generated/section-bg.dim_1600x900.jpg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "oklch(var(--navy) / 0.85)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label block mb-4">Get Involved</span>
            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "oklch(var(--white))" }}
            >
              Join the Global
              <span className="text-gradient-gold ml-2">Movement</span>
            </h2>

            <p
              className="font-body text-base leading-relaxed mb-8"
              style={{ color: "oklch(var(--gold-pale) / 0.7)" }}
            >
              Whether you're a global leader, a young innovator, a policy
              enabler, or a technologist — there's a place for you in this
              transformation. Submit your engagement request and let's build a
              better world together.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4">
              <div
                className="flex items-center gap-4 p-4 rounded-sm border"
                style={{
                  backgroundColor: "oklch(var(--navy-mid) / 0.6)",
                  borderColor: "oklch(var(--gold) / 0.15)",
                }}
              >
                <Globe
                  size={20}
                  style={{ color: "oklch(var(--gold))", flexShrink: 0 }}
                />
                <div>
                  <p
                    className="font-ui text-xs tracking-wider uppercase mb-0.5"
                    style={{ color: "oklch(var(--gold-pale) / 0.5)" }}
                  >
                    Official Website
                  </p>
                  <a
                    href="https://www.ripuranjansinha.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm font-semibold hover:underline"
                    style={{ color: "oklch(var(--gold-light))" }}
                  >
                    www.ripuranjansinha.in
                  </a>
                </div>
              </div>

              <div
                className="flex items-center gap-4 p-4 rounded-sm border"
                style={{
                  backgroundColor: "oklch(var(--navy-mid) / 0.6)",
                  borderColor: "oklch(var(--gold) / 0.15)",
                }}
              >
                <Mail
                  size={20}
                  style={{ color: "oklch(var(--gold))", flexShrink: 0 }}
                />
                <div>
                  <p
                    className="font-ui text-xs tracking-wider uppercase mb-0.5"
                    style={{ color: "oklch(var(--gold-pale) / 0.5)" }}
                  >
                    Engagement
                  </p>
                  <p
                    className="font-body text-sm font-semibold"
                    style={{ color: "oklch(var(--gold-light))" }}
                  >
                    Use the form to initiate collaboration
                  </p>
                </div>
              </div>
            </div>

            {/* Audience tags */}
            <div className="mt-10">
              <p
                className="font-ui text-xs tracking-wider uppercase mb-4"
                style={{ color: "oklch(var(--gold-pale) / 0.45)" }}
              >
                Open to
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Global Leaders",
                  "Technologists",
                  "Policy Makers",
                  "Youth",
                  "Researchers",
                  "Entrepreneurs",
                  "NGOs",
                  "Designers",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-ui text-xs px-3 py-1.5 rounded-sm border"
                    style={{
                      borderColor: "oklch(var(--gold) / 0.2)",
                      color: "oklch(var(--gold-pale) / 0.6)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="p-8 md:p-10 rounded-sm border"
              style={{
                backgroundColor: "oklch(var(--navy-mid))",
                borderColor: "oklch(var(--gold) / 0.15)",
                boxShadow: "0 24px 80px oklch(var(--navy) / 0.5)",
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2
                    size={56}
                    className="mx-auto mb-6"
                    style={{ color: "oklch(0.65 0.15 145)" }}
                  />
                  <h3
                    className="font-display text-2xl font-bold mb-3"
                    style={{ color: "oklch(var(--white))" }}
                  >
                    Request Received!
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed mb-8"
                    style={{ color: "oklch(var(--gold-pale) / 0.65)" }}
                  >
                    Thank you for reaching out. Our team will review your
                    engagement request and connect with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="font-ui text-sm font-semibold px-6 py-3 rounded-sm border transition-all duration-200"
                    style={{
                      borderColor: "oklch(var(--gold) / 0.4)",
                      color: "oklch(var(--gold))",
                    }}
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3
                    className="font-display text-xl font-bold mb-2"
                    style={{ color: "oklch(var(--white))" }}
                  >
                    Request Collaboration
                  </h3>
                  <p
                    className="font-body text-sm mb-8"
                    style={{ color: "oklch(var(--gold-pale) / 0.5)" }}
                  >
                    Tell us about yourself and how you'd like to engage.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <Label
                        htmlFor="name"
                        className="font-ui text-xs tracking-wider uppercase mb-2 block"
                        style={{ color: "oklch(var(--gold-pale) / 0.55)" }}
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        style={inputStyle}
                        className="placeholder:text-white/20 focus-visible:ring-gold/40 border-gold/20"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label
                        htmlFor="email"
                        className="font-ui text-xs tracking-wider uppercase mb-2 block"
                        style={{ color: "oklch(var(--gold-pale) / 0.55)" }}
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@organization.com"
                        required
                        style={inputStyle}
                        className="placeholder:text-white/20 focus-visible:ring-gold/40 border-gold/20"
                      />
                    </div>

                    {/* Role */}
                    <div>
                      <Label
                        htmlFor="role"
                        className="font-ui text-xs tracking-wider uppercase mb-2 block"
                        style={{ color: "oklch(var(--gold-pale) / 0.55)" }}
                      >
                        Role / Title *
                      </Label>
                      <select
                        id="role"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 rounded-sm text-sm border focus:outline-none focus:ring-2 focus:ring-gold/40"
                        style={{
                          ...inputStyle,
                          backgroundColor: "oklch(var(--navy-mid))",
                        }}
                      >
                        <option value="" disabled>
                          Select your role
                        </option>
                        {ROLES.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Sector */}
                    <div>
                      <Label
                        htmlFor="sector"
                        className="font-ui text-xs tracking-wider uppercase mb-2 block"
                        style={{ color: "oklch(var(--gold-pale) / 0.55)" }}
                      >
                        Sector / Domain *
                      </Label>
                      <select
                        id="sector"
                        name="sector"
                        value={form.sector}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 rounded-sm text-sm border focus:outline-none focus:ring-2 focus:ring-gold/40"
                        style={{
                          ...inputStyle,
                          backgroundColor: "oklch(var(--navy-mid))",
                        }}
                      >
                        <option value="" disabled>
                          Select your sector
                        </option>
                        {SECTORS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <Label
                        htmlFor="message"
                        className="font-ui text-xs tracking-wider uppercase mb-2 block"
                        style={{ color: "oklch(var(--gold-pale) / 0.55)" }}
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="How would you like to collaborate or engage?"
                        required
                        rows={4}
                        style={inputStyle}
                        className="placeholder:text-white/20 focus-visible:ring-gold/40 border-gold/20 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-sm font-ui font-semibold text-sm transition-all duration-200 hover:shadow-gold-glow hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{
                        backgroundColor: "oklch(var(--gold))",
                        color: "oklch(var(--navy))",
                      }}
                    >
                      {isPending ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Request Collaboration
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
