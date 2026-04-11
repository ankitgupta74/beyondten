import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa6";
import {
  Container,
  Section,
  Eyebrow
} from "../ui/Layout";
import {
  WHATSAPP_URL,
  EMAIL_URL,
  CHANNELS,
  SOCIAL_LINKS,
} from "../../data/contactData";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { useReveal } from "../../hooks/useReveal";

export default function Contact() {
  const { ref, isVisible } = useReveal();

  return (
    <Section
      id="contact"
      tone="inverse"
      className="py-24! lg:py-32! overflow-hidden relative"
    >
      {/* Architectural grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] [radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Soft accent glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-(--bt-accent-700) rounded-full blur-[140px] opacity-30 pointer-events-none"
      />

      <Container className="relative">
        <div ref={ref} className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left — headline */}
          <div className="lg:col-span-7">
            <div
              className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Eyebrow inverse>Start an engagement</Eyebrow>
            </div>

            <h2
              className={`bt-display-1 text-white mt-7 max-w-[16ch] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                transitionDelay: "120ms",
                color: "white",
              }}
            >
              Ship the next ten days
              <span className="text-(--bt-accent-400)"> with us.</span>
            </h2>

            <p
              className={`bt-lead mt-7 max-w-[58ch] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                transitionDelay: "240ms",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Tell us what you're building. We'll reply within twenty-four
              hours, scope the engagement together, and start the sprint the
              morning after.
            </p>

            <div
              className={`mt-10 flex flex-col sm:flex-row gap-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "360ms" }}
            >
              <Button
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="inverse"
                size="lg"
                iconRight={<ArrowUpRight className="w-4 h-4" />}
              >
                Start a project
              </Button>
              <Button
                href={EMAIL_URL}
                variant="inverseGhost"
                size="lg"
                iconLeft={<Mail className="w-4 h-4" />}
              >
                Email the team
              </Button>
            </div>

            {/* SLA line */}
            <div
              className={`mt-12 flex items-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "480ms" }}
            >
              <Badge variant="inverse" withDot pulse>
                24-hour reply SLA
              </Badge>
              <span className="text-[0.8125rem] text-white/50">
                Currently accepting new engagements
              </span>
            </div>
          </div>

          {/* Right — channel list */}
          <aside
            className={`lg:col-span-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="border border-white/10 rounded-(--bt-radius-lg) overflow-hidden bg-white/2 backdrop-blur-sm">
              {/* Header */}
              <div className="px-6 py-3 border-b border-white/10 bg-white/3 flex items-center justify-between">
                <span className="bt-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                  Direct Channels
                </span>
                <span className="bt-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                  03 / 03
                </span>
              </div>

              {/* Channels */}
              <ul className="divide-y divide-white/10">
                {CHANNELS.map((c) => {
                  const Icon = c.icon;
                  return (
                    <li key={c.code}>
                      <a
                        href={c.href}
                        target={
                          c.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          c.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex items-center gap-5 px-6 py-5 hover:bg-white/4 transition-colors"
                      >
                        <div className="w-10 h-10 flex items-center justify-center rounded-(--bt-radius-sm) border border-white/10 bg-white/4 text-white/70 group-hover:text-white group-hover:border-white/30 transition-colors">
                          <Icon className="w-4 h-4" strokeWidth={1.75} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="bt-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
                              {c.code}
                            </span>
                            <span className="text-[0.75rem] text-white/60">
                              {c.label}
                            </span>
                          </div>
                          <div className="text-[0.9375rem] font-medium text-white truncate">
                            {c.value}
                          </div>
                        </div>
                        <ArrowUpRight
                          className="w-4 h-4 text-white/30 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                          strokeWidth={2}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Social footer */}
              <div className="px-6 py-4 border-t border-white/10 bg-white/3 flex items-center justify-between">
                <span className="bt-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                  Follow
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={SOCIAL_LINKS[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-(--bt-radius-xs) border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-(--bt-radius-xs) border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
