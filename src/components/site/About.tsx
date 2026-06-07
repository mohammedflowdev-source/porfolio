import { Section, SectionHeader } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="About" title={<>Designing with intent. <br className="hidden md:block" /> Building with care.</>} />
      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            I'm a multidisciplinary designer and developer based on the
            internet. For the past six years I've partnered with founders,
            agencies, and product teams to ship interfaces that feel
            inevitable — the kind of work that disappears into use.
            <br />
            <br />
            <span className="text-foreground">
              My focus: turning ambiguous briefs into clear, beautiful
              products
            </span>
            . I move between Figma and the codebase fluidly, which means fewer
            handoffs, tighter feedback loops, and end results that match the
            vision down to the last pixel.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="space-y-6 rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur">
            {[
              { k: "Based", v: "Remote — EU/US hours" },
              { k: "Focus", v: "Product · Brand · Web" },
              { k: "Tools", v: "Figma, Cursor, Linear" },
              { k: "Languages", v: "English, French" },
            ].map((row) => (
              <div
                key={row.k}
                className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
              >
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {row.k}
                </span>
                <span className="text-sm font-medium">{row.v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
