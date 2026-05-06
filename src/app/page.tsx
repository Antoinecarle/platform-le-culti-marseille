<section className="relative min-h-[90vh] overflow-hidden bg-[#fcf9f7]">
        <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_100%_0%,_rgba(202,164,255,0.18)_0%,_transparent_100%),radial-gradient(60%_60%_at_0%_100%,_rgba(197,125,98,0.12)_0%,_transparent_100%)]" />
        <div className="absolute right-0 top-0 h-full w-1/3 border-l border-neutral-200/50 bg-gradient-to-b from-transparent via-white/40 to-transparent hidden lg:block" />
        
        <div className="relative mx-auto flex max-w-[1440px] flex-col px-6 py-12 lg:px-20 lg:py-16">
          <header className="z-10 flex items-center justify-between pb-12 lg:pb-24">
            <div className="group cursor-default">
              <p className="text-[10px] uppercase tracking-[0.45em] text-mauve-500/80 transition-colors group-hover:text-mauve-600">Marseille — Place de la Plaine</p>
              <h1 className="mt-2 font-serif text-3xl tracking-[0.25em] text-terracotta-950 outline-none">LE CULTI</h1>
            </div>
            <a href="#private" className="group relative overflow-hidden rounded-full bg-neutral-900 px-8 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]">
              <span className="relative z-10">Réserver</span>
              <div className="absolute inset-0 -translate-x-full bg-terracotta-800 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
          </header>

          <div className="relative grid items-start gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="z-10 pt-4 lg:pt-12">
              <div className="inline-flex items-center gap-3 space-x-2 rounded-full bg-white/40 px-3 py-1.5 pr-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-mauve-900 shadow-sm backdrop-blur-md ring-1 ring-neutral-950/5">
                <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-terracotta-500" />
                <span>Bar d'esthètes • Cocktails • Assiettes</span>
              </div>
              
              <h2 className="mt-10 font-serif text-6xl leading-[1.05] tracking-tight text-neutral-900 md:text-8xl lg:text-9xl">
                L’élégance <br />
                <span className="bg-gradient-to-r from-terracotta-800 to-mauve-700 bg-clip-text italic text-transparent">nocturne</span>
              </h2>
              
              <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end">
                <p className="max-w-md text-base leading-relaxed text-neutral-600/90 lg:text-lg">
                  Une adresse lumineuse et feutrée à la fois, pensée pour les fins de journée qui se prolongent. Cocktails d’auteur,
                  vins vivants, petites assiettes méditerranéennes.
                </p>
                <div className="flex h-px w-24 bg-neutral-200 lg:mb-3" />
                <div className="flex flex-wrap gap-5">
                  <a href="#menu" className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-900">
                    <span className="transition-transform group-hover:translate-x-1">Découvrir la carte</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 transition-colors group-hover:bg-neutral-900 group-hover:text-white">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative lg:mt-0">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[40px] bg-neutral-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] lg:rounded-[60px]">
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80"
                  alt="Ambiance du bar Le Culti"
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12">
                  <p className="max-w-[240px] font-serif text-2xl italic leading-tight text-white/95 lg:text-3xl">
                    "Le nouveau rendez-vous des esthètes marseillais"
                  </p>
                  <div className="mt-6 flex gap-2">
                    <div className="h-1 w-12 rounded-full bg-white/40" />
                    <div className="h-1 w-4 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>

              {/* Decorative graphic elements */}
              <div className="absolute -right-8 -top-8 -z-10 h-32 w-32 rounded-full bg-terracotta-100/50 blur-2xl lg:-right-12 lg:-top-12" />
              <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full border border-terracotta-200/30" />
            </div>
          </div>
        </div>
      </section>