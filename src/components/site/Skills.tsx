import { Section, SectionHeader } from "./Section";
import { Reveal } from "./Reveal";

const skills = [
  { name: "React.js", category: "Development" },
  { name: "Next.js", category: "Framework" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "TypeScript", category: "Language" },
  { name: "Figma", category: "Design" },
  { name: "Framer", category: "Motion" },
  { name: "Webflow", category: "No-code" },
  { name: "UI/UX Design", category: "Craft" },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="A focused toolkit."
        description="Eight tools, mastered. I keep my stack lean so I can ship faster and think deeper."
      />
      <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4">
        {skills.map((skill, i) => (
          <Reveal key={skill.name} delay={i * 0.05}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur transition-all duration-500 hover:border-accent/40 hover:bg-surface">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(200px circle at 50% 0%, oklch(0.70 0.18 295 / 0.18), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {skill.category}
                </div>
                <div className="mt-3 text-lg font-medium tracking-tight">
                  {skill.name}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
