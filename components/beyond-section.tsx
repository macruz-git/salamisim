import { Sparkles } from "lucide-react"

const values = [
  {
    number: "01",
    title: "Find Your Voice",
    description:
      "HUMSS helps you learn how to express your ideas clearly and confidently, whether through writing, speaking, or creative work.",
  },
  {
    number: "02",
    title: "Understand the World",
    description:
      "Explore topics about society, culture, politics, identity, beliefs, and human behavior -- subjects that shape how we live and connect.",
  },
  {
    number: "03",
    title: "Develop Real Skills",
    description:
      "Critical thinking, empathy, research, and leadership are skills that HUMSS nurtures -- skills needed in every career and community.",
  },
  {
    number: "04",
    title: "Grow as a Person",
    description:
      "HUMSS encourages you to reflect, question, empathize, and imagine. It nurtures creativity while strengthening analytical thinking.",
  },
]

export function BeyondSection() {
  return (
    <section id="beyond" className="relative py-24 md:py-32 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gold/70 mb-4 font-[var(--font-inter)]">
            Go Beyond
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            Beyond{" "}
            <span className="text-gold italic">Hiraya</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/30" />
            <Sparkles className="text-gold/50" size={16} />
            <div className="h-px w-12 bg-gold/30" />
          </div>
          <p className="mt-6 text-foreground/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-[var(--font-inter)]">
            <span className="text-gold italic">Hiraya</span> is a Filipino word
            meaning the fruit of one{"'"}s hopes, dreams, and aspirations. HUMSS is
            where dreams become direction.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div key={value.number} className="flex gap-5">
              <div className="flex-shrink-0">
                <span className="text-4xl md:text-5xl font-bold text-gold/20">
                  {value.number}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed font-[var(--font-inter)]">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        
      </div>


    </section>
  )
}
