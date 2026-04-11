import { Quote } from "lucide-react";
import {
  Container,
  Section,
  SectionHeader
} from "../ui/Layout";
import Badge from "../ui/Badge";
import {
  useReveal,
  staggerDelay
} from "../../hooks/useReveal";
import { TESTIMONIALS } from "../../data/testimonialsData";

export default function Testimonials() {
  const { ref, isVisible } = useReveal();

  return (
    <Section
      id="engagement"
      tone="sunken"
      className="border-y border-(--bt-border-subtle)"
    >
      <Container>
        <div ref={ref}>
          <SectionHeader
            eyebrow="Success Stories"
            title="Trusted by founders who turned their ideas into reality."
            description="Hear from business owners who bypassed the technical hurdles and launched their platforms in record time."
          />

          <div className="grid lg:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.code}
                className={`bt-card p-8 lg:p-10 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: staggerDelay(i, 150) }}
              >
                {/* Top row */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-(--bt-border-subtle)">
                  <Badge variant="outline">{t.code}</Badge>
                  <Quote
                    className="w-5 h-5 text-(--bt-accent-500)"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Quote */}
                <blockquote className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-(--bt-ink-900) leading-snug mb-5">
                    {t.headline}
                  </h3>
                  <p className="text-[0.9375rem] text-(--bt-ink-600) leading-relaxed">
                    {t.quote}
                  </p>
                </blockquote>

                {/* Author */}
                <figcaption className="mt-8 pt-6 border-t border-(--bt-border-subtle) flex items-center gap-4">
                  <div className="w-11 h-11 rounded-(--bt-radius-sm) border border-(--bt-border-subtle) bg-(--bt-accent-50) text-(--bt-accent-700) font-semibold flex items-center justify-center">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-[0.9375rem] font-semibold text-(--bt-ink-900)">
                      {t.author}
                    </div>
                    <div className="text-[0.8125rem] text-(--bt-ink-500)">
                      {t.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
