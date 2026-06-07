import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { Reveal } from "./Reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Lumen Analytics",
    type: "SaaS Dashboard · 2025",
    tag: "Product Design + Dev",
    img: p1,
    span: "md:col-span-7",
  },
  {
    title: "Halo Commerce",
    type: "Mobile App · 2025",
    tag: "iOS + Android",
    img: p2,
    span: "md:col-span-5",
  },
  {
    title: "Atelier Studio",
    type: "Brand Site · 2024",
    tag: "Webflow + Motion",
    img: p3,
    span: "md:col-span-5",
  },
  {
    title: "Orbit Design System",
    type: "Design System · 2024",
    tag: "Figma + React",
    img: p4,
    span: "md:col-span-7",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Selected Work"
        title="Recent case studies."
        description="A small selection of products and brands I've shaped end-to-end."
      />
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className={p.span}>
            <a
              href="#"
              className="group relative block overflow-hidden rounded-3xl border border-border bg-surface"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-80"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(400px circle at 50% 50%, oklch(0.70 0.18 295 / 0.18), transparent 70%)",
                  }}
                />
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {p.tag}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.type}</p>
                </div>
                <div className="rounded-full border border-border bg-surface-elevated/60 p-3 transition-all group-hover:border-accent/50 group-hover:bg-surface-elevated">
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
