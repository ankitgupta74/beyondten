import { ArrowUpRight } from "lucide-react";
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
import { PROJECTS } from "../../data/workData";

export default function Work() {
  const { ref, isVisible } = useReveal();

  return (
    <Section id="work" tone="page">
      <Container>
        <div ref={ref}>
          <div className="flex items-end justify-between gap-8 mb-14 flex-wrap">
            <SectionHeader
              eyebrow="Client Success"
              title="Real businesses launched in 10 days."
              description="See how founders turned their ideas into live, revenue-generating products without the technical headaches."
              maxWidth="44rem"
            />
            <div className="hidden lg:flex items-center gap-2 mb-1">
              <Badge variant="success" withDot pulse>
                Both live
              </Badge>
            </div>
          </div>

          {/* Case study grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <a
                key={p.id}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bt-card overflow-hidden flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: staggerDelay(i, 150) }}
              >
                {/* Header strip — like a window chrome */}
                <div className="px-5 py-3 border-b border-(--bt-border-subtle) bg-(--bt-surface-sunken) flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-(--bt-ink-200)" />
                      <span className="w-2.5 h-2.5 rounded-full bg-(--bt-ink-200)" />
                      <span className="w-2.5 h-2.5 rounded-full bg-(--bt-ink-200)" />
                    </div>
                    <span className="bt-mono text-[10px] uppercase tracking-[0.14em] text-(--bt-ink-500)">
                      {p.code}
                    </span>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 text-(--bt-ink-400) group-hover:text-(--bt-accent-600) group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                    strokeWidth={2}
                  />
                </div>

                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-(--bt-surface-sunken) border-b border-(--bt-border-subtle)">
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.innerHTML += `
                        <div class="absolute inset-0 flex items-center justify-center bt-mono text-xs uppercase tracking-[0.14em] text-(--bt-ink-400)">
                          ${p.title}
                        </div>
                      `;
                    }}
                  />
                </div>

                {/* Body */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline">{p.category}</Badge>
                    <Badge variant="neutral">{p.sector}</Badge>
                    <span className="ml-auto bt-mono text-[10px] uppercase tracking-[0.14em] text-(--bt-ink-500)">
                      {p.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-(--bt-ink-900) mb-3 group-hover:text-(--bt-accent-600) transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[0.9375rem] text-(--bt-ink-600) leading-relaxed mb-6">
                    {p.summary}
                  </p>

                  {/* Metrics row */}
                  <div className="mt-auto pt-6 border-t border-(--bt-border-subtle) grid grid-cols-2 gap-4">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="bt-mono text-[10px] uppercase tracking-[0.14em] text-(--bt-ink-500) mb-1">
                          {m.label}
                        </div>
                        <div className="text-[0.9375rem] font-medium text-(--bt-ink-900)">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
