'use client'

import Image from 'next/image'

interface Member {
  name: string
  image: string
  title?: string
}

const members: Member[] = [
  {
    name: 'BETITO, Ma. Devine Angel A.',
    title: 'Team Leader',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BETITO%2C%20Ma.%20Devine%20Angel%20A.-cbjMyAhGIN2BGgZWpju0vfjJajwRhU.jpg',
  },
  {
    name: 'DUHAYLUNGSOD, Jewel Mische O.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DUHAYLUNGSOD%2C%20Jewel%20Mische%20O.-k8JhvqJj33onJSirMuNbXkKnN0wVuE.jpg',
  },
  {
    name: 'CUSTODIO, Shiena May L.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ANASTACIO%2C%20Julian%20D.-YFRZQ3VKKR0TgeAnzqiP9rwmgHOtKh.jpg',
  },
  {
    name: 'PACER, Aiko V.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CUSTODIO%2C%20Shiena%20May%20L.-cTb8b7E4gQ0NXrBMunt9kM8zOrprYv.jpg',
  },
  {
    name: 'RIVERA, Lara Sharika T.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADVINCULA%2C%20Gian%20Ley%20R.-Zg175Fq3TjjEqt3CGWGrjR0mqE5BUw.jpg',
  },
  {
    name: 'OBUSAN, Renier I.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PACER%2C%20Aiko%20V.-Z5h3cKLTSYcZrAN512tFeFCD8BibDl.jpg',

  },
  {
    name: 'FREYRA, Mijo E.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OBUSAN%2C%20Renier%20I.-ZXJ1wVbpE1tkB1OYCN8ZPEumH9rLgd.jpg',

  },
  {
    name: 'ANASTACIO, Julian D.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIVERA%2C%20Lara%20Sharika%20T.-9CttkSEW1Twaf3Znec4lCL4kRS1ThD.jpg',
  },
  {
    name: 'MONTELLIN, Lyron Earl C.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MONTELLIN%2C%20Lyron%20Earl%20C.-0Xe8NzE1YKQtq3i9hu7XMZtMVoMFRv.jpg',
  },
  {
    name: 'ADVINCULA, Gian Ley R.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FREYRA%2C%20Mijo%20E.-FtCGgrfTnARktiBjuzqcDSZJYyXQ6X.jpg',
  },
]

export function MembersPanel() {
  return (
    <section className="py-16 md:py-24 px-6 bg-background/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gold/80 font-[var(--font-inter)] mb-4">
            Our Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Meet the <span className="text-gold">SALAMISIM</span> Team
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/60 text-base md:text-lg">
            The dedicated students who made this Culminating Project possible.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg bg-foreground/5 border border-gold/20 group-hover:border-gold/40 transition-colors">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <p className="text-center text-sm md:text-base font-medium text-foreground/80 group-hover:text-gold transition-colors">
                {member.name}
              </p>
              {member.title && (
                <p className="text-center text-xs md:text-sm text-gold/70 mt-1 font-semibold tracking-wide">
                  {member.title}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
