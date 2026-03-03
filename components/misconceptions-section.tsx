"use client"

import { useState } from "react"
import { X, Check } from "lucide-react"

const myths = [
  {
    myth: "HUMSS is just for writing and reading.",
    truth:
      "HUMSS teaches critical thinking, public speaking, creative expression, leadership, and social analysis -- skills that go far beyond the classroom.",
  },
  {
    myth: "HUMSS is the easiest strand.",
    truth:
      "HUMSS requires deep analytical thinking, research skills, and the ability to understand complex social, cultural, and political issues. It is intellectually rigorous.",
  },
  {
    myth: "HUMSS has no career opportunities.",
    truth:
      "HUMSS graduates pursue careers in law, journalism, diplomacy, psychology, education, public policy, social work, media, and much more.",
  },
  {
    myth: "HUMSS is not practical compared to STEM or ABM.",
    truth:
      "In a world that values communication, empathy, and social awareness, HUMSS skills are essential in every industry and every human interaction.",
  },
  {
    myth: "Only students who cannot handle math choose HUMSS.",
    truth:
      "Students choose HUMSS because of their passion for understanding people, society, and the human experience -- not because they are avoiding other subjects.",
  },
]

export function MisconceptionsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="misconceptions" className="relative py-24 md:py-32 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gold/70 mb-4 font-[var(--font-inter)]">
            Breaking Stereotypes
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            Myths <span className="text-gold italic">vs</span> Reality
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-gold/50" />
            <div className="h-px w-12 bg-gold/30" />
          </div>
          <p className="mt-6 text-foreground/50 max-w-xl mx-auto font-[var(--font-inter)]">
            Click on each misconception to reveal the truth behind it.
          </p>
        </div>

        {/* Myths list */}
        <div className="flex flex-col gap-4">
          {myths.map((item, index) => (
            <button
              key={index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="w-full text-left rounded-xl border border-gold/10 bg-card/30 p-6 transition-all duration-500 hover:border-gold/30 hover:bg-card/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    activeIndex === index
                      ? "bg-gold/20 text-gold"
                      : "bg-destructive/10 text-destructive"
                  }`}
                >
                  {activeIndex === index ? (
                    <Check size={16} />
                  ) : (
                    <X size={16} />
                  )}
                </div>
                <div className="flex-1">
                  <p
                    className={`text-base md:text-lg font-medium transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-gold line-through opacity-60"
                        : "text-foreground"
                    }`}
                  >
                    {item.myth}
                  </p>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      activeIndex === index
                        ? "max-h-40 opacity-100 mt-3"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-gold/80 leading-relaxed font-[var(--font-inter)]">
                      {item.truth}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
