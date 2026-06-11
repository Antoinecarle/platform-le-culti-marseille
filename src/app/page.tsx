export default function Home() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#fcf9f7]">
      <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_100%_0%,_rgba(202,164,255,0.18)_0%,_transparent_100%),radial-gradient(60%_60%_at_0%_100%,_rgba(197,125,98,0.12)_0%,_transparent_100%)]" />
      <div className="absolute right-0 top-0 hidden h-full w-1/3 border-l border-neutral-200/50 bg-gradient-to-b from-transparent via-white/40 to-transparent lg:block" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col px-6 py-12 lg:px-20 lg:py-16">
        <header className="z-10 flex items-center justify-between pb-12 lg:pb-24">
          <div className="group cursor-default">
            <p className="text-[10px] uppercase tracking-[0.45em] text-mauve-500/80 transition-colors group-hover:text-mauve-600">Marseille — Place de la Plaine</p>
            <h1 className="mt-2 font-serif text-3xl tracking-[0.25em] text-terracotta-950 outline-none">LE CULTI</h1>
          </div>
          <a href="#event" className="group relative overflow-hidden rounded-full bg-neutral-900 px-8 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]">
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

            <div className="absolute -right-8 -top-8 -z-10 h-32 w-32 rounded-full bg-terracotta-100/50 blur-2xl lg:-right-12 lg:-top-12" />
            <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full border border-terracotta-200/30" />
          </div>
        </div>

        <section id="event" className="mt-20 rounded-[32px] border border-neutral-200 bg-white/70 p-8 shadow-sm backdrop-blur-sm lg:mt-24 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.45em] text-mauve-600">Événement à venir</p>
              <h3 className="mt-3 font-serif text-4xl leading-tight text-neutral-900 lg:text-5xl">PAPA PAPA</h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 lg:text-base">
                Exposition du 25 juin au 1er juillet. Vernissage le vendredi 26 juillet au Lavoir Vasserot, Saint-Tropez.
                Une affiche pensée comme une pièce de galerie : poétique, tactile et singulière.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-neutral-200 bg-[#fcf9f7] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-700">Saint-Tropez</span>
              <span className="rounded-full border border-neutral-200 bg-[#fcf9f7] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-700">Exposition</span>
              <span className="rounded-full border border-neutral-200 bg-[#fcf9f7] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-700">Vernissage</span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { label: 'Dates', value: '25 juin → 1er juillet' },
              { label: 'Vernissage', value: 'Vendredi 26 juillet' },
              { label: 'Lieu', value: 'Lavoir Vasserot, Saint-Tropez' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-neutral-200 bg-white p-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-mauve-500">{item.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-800">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-neutral-200 bg-[#fbf6f3] p-6 lg:p-8">
            <p className="text-[10px] uppercase tracking-[0.45em] text-mauve-600">Carte imaginée</p>
            <h4 className="mt-3 font-serif text-3xl text-neutral-900">La sélection du soir</h4>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
              Une carte fictive pensée pour prolonger l’univers du lieu : élégante, concise et très marseillaise.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { name: 'Spritz de la Plaine', desc: 'Aperol, prosecco, amers d’orange, zeste de pamplemousse', price: '12€' },
                { name: 'Mistral Blanc', desc: 'Gin floral, verjus, basilic, concombre, tonic sec', price: '14€' },
                { name: 'Terracotta Negroni', desc: 'Gin infusé au romarin, vermouth rouge, amaro, touche de figue', price: '15€' },
              ].map((item) => (
                <div key={item.name} className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900">{item.name}</p>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.desc}</p>
                    </div>
                    <span className="rounded-full bg-neutral-900 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
