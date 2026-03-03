import { BookOpen, Users, Globe, PenTool, Heart, Landmark } from "lucide-react"

const subjects = [
  {
    icon: Users,
    title: "Community Engagement, Solidarity and Citizenship",
    description: "This subject made us realize that being part of a community is more than just living in it, it means actively participating and caring about social issues. We learned that solidarity is about standing with others, especially those who are marginalized. It taught us that real citizenship is not just about knowing our rights, but also fulfilling our responsibilities to help create positive change."
  },
  {
    icon: Globe,
    title: "Social Science",
    description: "Through Social Science, we began to understand why people think, act, and interact the way they do. It opened our eyes to different social realities and inequalities that exist in society. This subject helped us become more aware, analytical, and sensitive to the experiences of others."
  },
  {
    icon: Landmark,
    title: "Philippine Politics and Governance",
    description: "This subject deepened our understanding of how our government works and how laws and policies affect our daily lives. We realized that politics is not just about leaders, it is about the people. It inspired us to become a more informed and responsible citizen who values democracy and participation."
  },
  {
    icon: BookOpen,
    title: "Introduction to World Religions and Belief Systems",
    description: "Learning about religions such as Christianity, Islam, Hinduism, and Buddhism made us appreciate the diversity of beliefs around the world. This subject taught us respect, open-mindedness, and understanding. We realized that despite differences in faith, many religions share similar values like compassion, peace, and love."
  },
  {
    icon: PenTool,
    title: "Creative Writing",
    description: "Creative Writing allowed us to express our thoughts and emotions freely. It helped us discover our voice and improve our confidence in storytelling. We learned that writing is not just about grammar, it is about connection, imagination, and authenticity."
  },
  {
    icon: Heart,
    title: "Creative Nonfiction",
    description: "Creative Nonfiction taught us that real-life stories are powerful. By combining facts with emotion and reflection, we learned how to tell meaningful and truthful narratives. This subject helped us appreciate the beauty of reality and the importance of sharing genuine experiences."
  },
]

export function HumssSubjectsSection() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gold/70 mb-4 font-[var(--font-inter)]">
            personal reflection about
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            HUMSS Specialized{" "}
            <span className="text-gold italic">Subjects</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-gold/50" />
            <div className="h-px w-12 bg-gold/30" />
          </div>
          <p className="mt-6 text-foreground/50 max-w-2xl mx-auto font-[var(--font-inter)]">
            Explore the core subjects that define the HUMSS experience and empower students to understand society, culture, and humanity.
          </p>
        </div>

        {/* Subjects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.title}
              className="group rounded-xl border border-gold/10 bg-card/30 p-8 transition-all duration-500 hover:border-gold/30 hover:bg-card/60 flex flex-col items-center text-center hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold/20 group-hover:scale-110">
                <subject.icon size={28} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {subject.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed font-[var(--font-inter)]">
                {subject.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}