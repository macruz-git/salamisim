import {
  Scale,
  Pen,
  Megaphone,
  GraduationCap,
  Palette,
  HeartHandshake,
} from "lucide-react"

const careers = [
  {
    icon: Scale,
    title: "Law & Governance",
    paths: ["Lawyer", "Diplomat", "Political Analyst", "Public Policy Maker"],
  },
  {
    icon: Pen,
    title: "Writing & Media",
    paths: ["Journalist", "Author", "Content Creator", "Editor"],
  },
  {
    icon: Megaphone,
    title: "Communication",
    paths: ["PR Specialist", "Corporate Communications", "News Anchor", "Spokesperson"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    paths: ["Teacher", "Professor", "Guidance Counselor", "Education Researcher"],
  },
  {
    icon: Palette,
    title: "Arts & Culture",
    paths: ["Curator", "Cultural Researcher", "Historian", "Arts Manager"],
  },
  {
    icon: HeartHandshake,
    title: "Social Services",
    paths: ["Social Worker", "Psychologist", "Community Developer", "NGO Leader"],
  },
]

export function DiscoverSection() {
  return (
    <section id="discover" className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gold/70 mb-4 font-[var(--font-inter)]">
            Career Paths
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            Where HUMSS Can{" "}
            <span className="text-gold italic">Take You</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-gold/50" />
            <div className="h-px w-12 bg-gold/30" />
          </div>
          <p className="mt-6 text-foreground/50 max-w-2xl mx-auto font-[var(--font-inter)]">
            HUMSS opens doors to a wide range of fulfilling careers that shape
            society, inspire communities, and create meaningful change.
          </p>
        </div>

        {/* Career grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career) => (
            <div
              key={career.title}
              className="group rounded-xl border border-gold/10 bg-card/30 p-6 transition-all duration-500 hover:border-gold/30 hover:bg-card/60"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold/20">
                <career.icon size={24} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {career.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {career.paths.map((path) => (
                  <span
                    key={path}
                    className="rounded-full border border-gold/10 bg-gold/5 px-3 py-1 text-xs text-gold/80 font-[var(--font-inter)]"
                  >
                    {path}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
