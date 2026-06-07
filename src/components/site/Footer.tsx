export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground/70 md:flex-row">
        <div>© {new Date().getFullYear()} Studio. All rights reserved.</div>
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent" />
          Designed & built with care.
        </div>
        <div>Crafted in dark mode.</div>
      </div>
    </footer>
  );
}
