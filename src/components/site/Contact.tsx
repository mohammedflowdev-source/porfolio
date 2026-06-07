import { ArrowUpRight, Mail } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="noise relative overflow-hidden rounded-[2.5rem] border border-border bg-surface/40 px-6 py-20 text-center backdrop-blur md:px-16 md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: "var(--gradient-glow)" }}
          />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="size-1 rounded-full bg-accent" />
              Contact
            </div>
            <h2 className="mt-6 text-gradient font-display text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
              Let's build
              <br /> something rare.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground md:text-lg">
              Have a product, brand, or idea worth shipping? I'd love to hear
              about it. Replies within 24 hours.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:hello@studio.com"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
              >
                <Mail className="size-4" />
                hello@studio.com
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-surface"
              >
                Book a call
              </a>
            </div>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {["Twitter", "LinkedIn", "Dribbble", "GitHub", "Read.cv"].map(
                (l) => (
                  <a
                    key={l}
                    href="#"
                    className="transition-colors hover:text-foreground"
                  >
                    {l} ↗
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
