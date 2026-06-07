import { Code2, Palette, Sparkles, Wand2 } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Palette,
    title: "Product Design",
    desc: "End-to-end UX & UI for web and mobile products. Research, flows, systems, and polished pixel-perfect interfaces.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Production React, Next.js, and TypeScript builds. Performance-first, accessible, and ready to scale.",
  },
  {
    icon: Wand2,
    title: "Brand & Identity",
    desc: "Visual systems that travel — logos, type, tokens, and guidelines that translate across every surface.",
  },
  {
    icon: Sparkles,
    title: "Motion & Interaction",
    desc: "Framer Motion-powered micro-interactions and scroll experiences that elevate without distracting.",
  },
];

export function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Services"
        title="How I can help."
        description="Engagements scoped to your phase — from quick design sprints to full product builds."
      />
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur transition-colors duration-500 hover:bg-surface">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: "oklch(0.70 0.18 295 / 0.3)" }}
              />
              <div className="relative flex items-start gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-elevated">
                  <s.icon className="size-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
