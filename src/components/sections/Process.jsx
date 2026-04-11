import {
  Package,
  GitCommit,
  Rocket
} from "lucide-react";
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
import {
  PHASES,
  TIMELINE
} from "../../data/processData";

export default function Process() {
  const { ref, isVisible } = useReveal();
  const phase = PHASES[0];

  return (
    <Section
      id="process"
      tone="sunken"
      className="border-y border-(--bt-border-subtle)"
    >
      <Container>
        <div ref={ref}>
          <SectionHeader
            eyebrow="Process"
            title="A ten-day delivery cadence built on engineering discipline."
            description="Speed without process is chaos. Our sprint is engineered for predictability — daily checkpoints, tagged deliverables, and a working build at every stage."
          />

          {/* Discovery card — sits above the timeline */}
          <div
            className={`bt-card p-7 mb-12 grid md:grid-cols-[auto_1fr_auto] items-center gap-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-(--bt-radius-sm) border border-(--bt-border-subtle) bg-(--bt-surface-sunken)">
                <GitCommit
                  className="w-5 h-5 text-(--bt-accent-600)"
                  strokeWidth={1.75}
                />
              </div>
              <Badge variant="accent">{phase.code}</Badge>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-(--bt-ink-900) mb-1">
                {phase.name} & engineering brief
              </h3>
              <p className="text-[0.875rem] text-(--bt-ink-600)">
                {phase.body}
              </p>
            </div>
            <div className="md:text-right">
              <div className="bt-mono text-[10px] uppercase tracking-[0.14em] text-(--bt-ink-500)">
                Duration
              </div>
              <div className="text-[0.9375rem] font-medium text-(--bt-ink-900)">
                {phase.duration}
              </div>
            </div>
          </div>

          {/* Sprint header */}
          <div className="flex items-center gap-4 mb-8">
            <Badge variant="accent" withDot pulse>
              Sprint Active
            </Badge>
            <div className="flex-1 h-px bg-(--bt-border-subtle)" />
            <span className="bt-mono text-[10px] uppercase tracking-[0.14em] text-(--bt-ink-500)">
              10-Day Build Window
            </span>
          </div>

          {/* Timeline */}
          <div className="bt-card overflow-hidden">
            <div className="grid grid-cols-[auto_1fr] divide-y divide-(--bt-border-subtle)">
              {/* Header row */}
              <div className="col-span-2 grid grid-cols-[120px_1fr] bg-(--bt-surface-sunken) border-b border-(--bt-border-subtle)">
                <div className="px-6 py-3 bt-mono text-[10px] uppercase tracking-[0.14em] text-(--bt-ink-500) border-rborder-(--bt-border-subtle)">
                  Day
                </div>
                <div className="px-6 py-3 bt-mono text-[10px] uppercase tracking-[0.14em] text-(--bt-ink-500)">
                  Milestone
                </div>
              </div>

              {/* Rows */}
              {TIMELINE.map((row, i) => (
                <div
                  key={i}
                  className={`col-span-2 grid grid-cols-[120px_1fr] group hover:bg-(--bt-surface-sunken) transition-colors duration-300
                    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
                  style={{
                    transitionProperty: "opacity, transform",
                    transitionDuration: "700ms",
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                    transitionDelay: staggerDelay(i, 60),
                  }}
                >
                  {/* Day cell */}
                  <div className="px-6 py-6 border-r border-(--bt-border-subtle) flex items-start gap-3">
                    <span
                      className={`bt-mono text-[0.9375rem] font-semibold tracking-tight tabular-nums
                        ${row.isLast ? "text-(--bt-accent-600)" : "text-(--bt-ink-900)"}`}
                    >
                      {row.day}
                    </span>
                  </div>

                  {/* Content cell */}
                  <div className="px-6 py-6">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h4 className="text-[0.9375rem] font-semibold text-(--bt-ink-900) flex items-center gap-2">
                        {row.isLast && (
                          <Rocket
                            className="w-4 h-4 text-(--bt-accent-600)"
                            strokeWidth={2}
                          />
                        )}
                        {row.title}
                      </h4>
                      {row.deliverable && (
                        <Badge variant="accent" className="shrink-0">
                          <Package className="w-2.5 h-2.5" />
                          {row.deliverable}
                        </Badge>
                      )}
                    </div>
                    <p className="text-[0.8125rem] text-(--bt-ink-500) leading-relaxed">
                      {row.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer summary */}
            <div className="bg-(--bt-ink-900) text-white px-8 py-6 grid sm:grid-cols-3 gap-6">
              <div>
                <div className="bt-mono text-[10px] uppercase tracking-[0.14em] text-white/50 mb-1">
                  Tagged deliverables
                </div>
                <div className="text-2xl font-semibold tracking-tight">04</div>
              </div>
              <div>
                <div className="bt-mono text-[10px] uppercase tracking-[0.14em] text-white/50 mb-1">
                  Daily checkpoints
                </div>
                <div className="text-2xl font-semibold tracking-tight">10</div>
              </div>
              <div>
                <div className="bt-mono text-[10px] uppercase tracking-[0.14em] text-white/50 mb-1">
                  Final outcome
                </div>
                <div className="text-2xl font-semibold tracking-tight">
                  Live product
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
