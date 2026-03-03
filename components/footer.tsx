export function Footer() {
  return (
    <footer className="relative border-t border-gold/10 py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-lg font-bold text-gold tracking-wide">
              SALAMISIM
            </span>
            <span className="text-sm text-foreground/40 ml-2 italic">
              Beyond Hiraya
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            <a
              href="#home"
              className="text-xs text-foreground/40 hover:text-gold transition-colors tracking-wide font-[var(--font-inter)]"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-xs text-foreground/40 hover:text-gold transition-colors tracking-wide font-[var(--font-inter)]"
            >
              About
            </a>
            <a
              href="#misconceptions"
              className="text-xs text-foreground/40 hover:text-gold transition-colors tracking-wide font-[var(--font-inter)]"
            >
              Misconceptions
            </a>
            <a
              href="#discover"
              className="text-xs text-foreground/40 hover:text-gold transition-colors tracking-wide font-[var(--font-inter)]"
            >
              Discover
            </a>
            <a
              href="#beyond"
              className="text-xs text-foreground/40 hover:text-gold transition-colors tracking-wide font-[var(--font-inter)]"
            >
              Beyond
            </a>
          </nav>

          <p className="text-xs text-foreground/30 font-[var(--font-inter)]">
            A HUMSS Culminating Project 
          </p>
        </div>
      </div>
    </footer>
  )
}
