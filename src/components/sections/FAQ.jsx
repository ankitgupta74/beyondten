import { useState } from "react";
import { Plus } from "lucide-react";
import {
  Container,
  Section,
  SectionHeader
} from "../ui/Layout";
import {
  useReveal,
  staggerDelay
} from "../../hooks/useReveal";
import { FAQS } from "../../data/faqData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { ref, isVisible } = useReveal();

  return (
    <Section id="faq" tone="page">
      <Container>
        <div ref={ref} className="grid lg:grid-cols-12 gap-12">
          {/* Left column — header */}
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="FAQ"
              title="Answers, before you ask."
              description="Clear answers to the questions we hear most often from founders ready to launch their product."
              maxWidth="100%"
            />
          </div>

          {/* Right column — accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-(--bt-border-subtle)">
              {FAQS.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`border-b border-(--bt-border-subtle) transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                    style={{ transitionDelay: staggerDelay(i, 60) }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-5">
                        <span className="bt-mono text-[10px] uppercase tracking-[0.14em] text-(--bt-ink-400) mt-1.5 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-[1.0625rem] font-semibold text-(--bt-ink-900) leading-snug pr-4">
                          {faq.q}
                        </h3>
                      </div>
                      <div
                        className={`shrink-0 mt-1 w-7 h-7 flex items-center justify-center rounded-(--bt-radius-xs) border border-(--bt-border-subtle) transition-all duration-500
                          ${
                            isOpen
                              ? "bg-(--bt-ink-900) border-(--bt-ink-900) text-white rotate-45"
                              : "bg-white text-(--bt-ink-500) group-hover:border-(--bt-ink-900) group-hover:text-(--bt-ink-900)"
                          }
                        `}
                      >
                        <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-12 pr-12 pb-6 -mt-1">
                          <p className="text-[0.9375rem] text-(--bt-ink-600) leading-relaxed max-w-[60ch]">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
