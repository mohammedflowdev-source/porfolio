import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="noise relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      {/* Background mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-mesh)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[700px]"
        style={{ background: "var(--gradient-glow)" }}
      />
      {/* Grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:gap-16 lg:grid-cols-12 lg:px-10">
        {/* Text */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for new projects — 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 text-gradient font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Web Developer
            <br />
            <span className="text-muted-foreground/70">&</span> UI/UX Designer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            I craft elegant digital experiences — from pixel-precise interfaces to performant,
            production-ready code. Quiet design. Loud impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
            >
              View Work
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-surface"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex items-center gap-8 text-xs text-muted-foreground"
          >
            <div>
              <div className="text-2xl font-semibold text-foreground">1+</div>
              <div className="mt-1">Years crafting</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="text-2xl font-semibold text-foreground">3+</div>
              <div className="mt-1">Shipped products</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="text-2xl font-semibold text-foreground">3</div>
              <div className="mt-1">Global clients</div>
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            {/* Glow */}
            <div
              aria-hidden
              className="absolute -inset-10 rounded-[3rem] blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, oklch(0.70 0.18 295 / 0.35), transparent 70%)",
              }}
            />
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-10 z-20 glass rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)] md:-left-8"
            >
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Currently
              </div>
              <div className="text-sm font-medium">Designing in Figma</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-16 z-20 glass rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)] md:-right-8"
            >
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Stack
              </div>
              <div className="text-sm font-medium">Next · React · TS</div>
            </motion.div>

            {/* Frame */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-border glow-ring">
              <div
                aria-hidden
                className="absolute inset-0 z-10 rounded-[2rem]"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, oklch(0.16 0.012 270 / 0.6) 100%)",
                }}
              />
              <img src={portrait} alt="Portrait"/>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground md:flex"
      >
        <span className="uppercase tracking-widest">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
