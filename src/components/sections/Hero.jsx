import {
  useEffect,
  useState
} from "react";
import {
  ArrowUpRight,
  ArrowRight
} from "lucide-react";
import {
  WHATSAPP_URL,
  HERO_BADGE,
  HERO_TITLE,
  HERO_DESCRIPTION,
  HERO_STATS,
  HERO_TRUST,
  HERO_FOOTER,
} from "../../data/heroData";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { Container } from "../ui/Layout";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const reveal = (delay) => ({
    style: { transitionDelay: `${delay}ms` },
    className: `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`,
  });

  return (
    <main
      id="hero"
      className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-(--bt-surface-page) overflow-hidden"
    >
      {/* Architectural grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bt-grid-bg opacity-[0.4] mask-[radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      {/* Soft accent wash */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-150 h-150 bg-(--bt-accent-50) rounded-full blur-3xl opacity-60 -translate-y-1/3 translate-x-1/4 pointer-events-none"
      />

      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Headline + supporting */}
          <div className="lg:col-span-8">
            <div {...reveal(0)}>
              <Badge variant="accent" withDot pulse>
                {HERO_BADGE}
              </Badge>
            </div>

            <h1
              {...reveal(120)}
              className={`bt-display-1 mt-7 max-w-[18ch] ${reveal(120).className}`}
            >
              {HERO_TITLE.prefix}
              <span className="text-(--bt-accent-600)">
                {" "}
                {HERO_TITLE.highlight}{" "}
              </span>
              {HERO_TITLE.suffix}
            </h1>

            <p
              {...reveal(240)}
              className={`bt-lead mt-7 max-w-[58ch] ${reveal(240).className}`}
            >
              {HERO_DESCRIPTION}
            </p>

            <div
              {...reveal(360)}
              className={`mt-10 flex flex-col sm:flex-row gap-3 ${reveal(360).className}`}
            >
              <Button
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                iconRight={<ArrowUpRight className="w-4 h-4" />}
              >
                Start a project
              </Button>
              <Button
                href="#process"
                variant="secondary"
                size="lg"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                See our process
              </Button>
            </div>

            {/* Trust microline */}
            <div
              {...reveal(480)}
              className={`mt-12 flex items-center gap-6 text-[0.8125rem] text-(--bt-ink-500) ${reveal(480).className}`}
            >
              {HERO_TRUST.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="bt-mono text-(--bt-accent-600)">
                    {item.label}
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stat panel */}
          <aside
            {...reveal(300)}
            className={`lg:col-span-4 ${reveal(300).className}`}
          >
            <div className="bt-card overflow-hidden">
              {/* Header strip */}
              <div className="px-6 py-3 border-b border-(--bt-border-subtle) bg-(--bt-surface-sunken) flex items-center justify-between">
                <span className="bt-mono text-[10px] uppercase tracking-[0.12em] text-(--bt-ink-500)">
                  Engagement Spec
                </span>
                <span className="flex items-center gap-1.5 text-[10px] bt-mono uppercase tracking-[0.12em] text-(--bt-success-600)">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 rounded-full bg-(--bt-success-500) animate-ping opacity-60" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-(--bt-success-500)" />
                  </span>
                  Live
                </span>
              </div>

              {/* Stats */}
              <dl className="divide-y divide-(--bt-border-subtle)">
                {HERO_STATS.map((stat, i) => (
                  <div
                    key={i}
                    className="px-6 py-5 flex items-baseline justify-between gap-4"
                  >
                    <dt className="text-[0.8125rem] text-(--bt-ink-500)">
                      {stat.label}
                    </dt>
                    <dd className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-semibold text-(--bt-ink-900) tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-[0.75rem] bt-mono text-(--bt-ink-500) uppercase tracking-wider">
                        {stat.unit}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Footer */}
              <div className="px-6 py-4 bg-(--bt-surface-sunken) border-t border-(--bt-border-subtle)">
                <div className="flex items-center justify-between text-[0.75rem]">
                  <span className="bt-mono uppercase -tracking-widest text-(--bt-ink-500)">
                    {HERO_FOOTER.slot}
                  </span>
                  <span className="text-(--bt-ink-700) font-medium">
                    {HERO_FOOTER.status}
                  </span>
                </div>
                <div className="mt-2 h-1 rounded-full bg-(--bt-ink-200) overflow-hidden">
                  <div
                    className="h-full bg-(--bt-accent-500)"
                    style={{ width: HERO_FOOTER.progress }}
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* SR-only keyword paragraph for SEO continuity */}
        <p className="sr-only">
          beyondten is an enterprise-grade SaaS engineering studio in India. We
          design, architect, and deliver production web applications and mobile
          MVPs in ten working days, with a guaranteed twenty-four hour response.
          Our engineering studio specializes in rapid SaaS development, MVP
          delivery, and launch-ready product engineering for startups and
          operators.
        </p>
      </Container>
    </main>
  );
}
