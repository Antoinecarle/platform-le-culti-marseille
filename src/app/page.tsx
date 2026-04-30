export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcf9f7] text-neutral-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(202,164,255,0.35),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(197,125,98,0.22),_transparent_30%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 lg:px-10">
          <header className="mb-16 flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.45em] text-mauve-500">Marseille — Place de la Plaine</p>
              <h1 className="mt-3 font-serif text-2xl tracking-[0.25em] text-terracotta-900">LE CULTI</h1>
            </div>
            <a href="#private" className="rounded-full bg-terracotta-800 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-terracotta-700">
              Réserver
            </a>
          </header>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="max-w-2xl">
              <p className="mb-5 inline-flex rounded-full border border-mauve-200 bg-white/70 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-mauve-700 backdrop-blur">
                Bar • Cocktails • Assiettes à partager
              </p>
              <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-neutral-900 md:text-7xl">
                L’élégance <span className="italic text-terracotta-800">nocturne</span>
                <br />
                marseillaise.
              </h2>
              <p className="mt-8 max-w-xl border-l border-terracotta-200 pl-6 text-sm leading-7 text-neutral-600 md:text-base">
                Une adresse lumineuse et feutrée à la fois, pensée pour les fins de journée qui se prolongent. Cocktails d’auteur,
                vins vivants, petites assiettes méditerranéennes et ambiance chic, entre mauve doux et terracotta solaire.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#menu" className="rounded-full bg-neutral-900 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-mauve-900">
                  Découvrir la carte
                </a>
                <a href="#about" className="rounded-full border border-neutral-200 bg-white/70 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-800 transition hover:bg-white">
                  Le concept
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-mauve-300/30 blur-2xl" />
              <div className="absolute -right-10 bottom-12 h-32 w-32 rounded-full bg-terracotta-300/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-t-[220px] border-[12px] border-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80"
                  alt="Ambiance du bar Le Culti"
                  className="h-[560px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/25 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 left-6 max-w-xs rounded-3xl border border-white/60 bg-white/75 p-5 text-sm text-neutral-700 shadow-xl backdrop-blur-md">
                <p className="font-serif text-lg italic text-neutral-900">"Le nouveau rendez-vous des esthètes marseillais"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-100 bg-white/60 py-8">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 lg:px-10">
          <div className="flex gap-12 whitespace-nowrap text-[10px] uppercase tracking-[0.45em] text-neutral-400">
            <span>Vogue France — oasis chic de Marseille</span>
            <span>•</span>
            <span>Le Fooding — esprit Riviera moderne</span>
            <span>•</span>
            <span>Gault &amp; Millau Selection 2024</span>
            <span>•</span>
            <span>Vogue France — oasis chic de Marseille</span>
            <span>•</span>
            <span>Le Fooding — esprit Riviera moderne</span>
            <span>•</span>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.45em] text-mauve-500">Le concept</p>
            <h3 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Un bar marseillais <span className="italic text-terracotta-800">très vivant</span>, très soigné.
            </h3>
            <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-600 md:text-base">
              Le Culti mélange la chaleur d’un bar de quartier et le raffinement d’une adresse confidentielle. On vient pour boire un bon verre,
              partager une assiette, et rester plus longtemps que prévu.
            </p>
          </div>

          <div className="lg:col-span-7 grid gap-6 md:grid-cols-3">
            {[
              ["Cocktails", "Des signatures fraîches, florales et parfaitement équilibrées."],
              ["À partager", "Des petites assiettes méditerranéennes à grignoter toute la soirée."],
              ["Ambiance", "Lumière douce, matières claires, musique juste ce qu’il faut."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[28px] border border-neutral-100 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                <div className="mb-5 h-10 w-10 rounded-full bg-mauve-100 text-mauve-700" />
                <h4 className="font-serif text-2xl text-neutral-900">{title}</h4>
                <p className="mt-3 text-sm leading-7 text-neutral-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="rounded-[40px] bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.05)] md:p-14">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.45em] text-mauve-500">Sur le comptoir</p>
            <h3 className="mt-4 font-serif text-4xl italic text-neutral-900">La carte signature</h3>
            <div className="mx-auto mt-5 h-px w-12 bg-terracotta-300" />
          </div>

          <div className="mt-14 grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.45em] text-mauve-500">Signature</p>
              <div className="mt-8 space-y-10">
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif text-xl text-neutral-900">Marseille Sunset</h4>
                    <span className="text-xs font-medium text-neutral-400">14€</span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-neutral-500">Gin de Provence, Lillet Rose, bitters d’agrumes.</p>
                </div>
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif text-xl text-neutral-900">Le Velours Noir</h4>
                    <span className="text-xs font-medium text-neutral-400">16€</span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-neutral-500">Vodka infusée, café de spécialité, liqueur de cacao.</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.45em] text-mauve-500">Partage</p>
              <div className="mt-8 space-y-10">
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif text-xl text-neutral-900">Céviche de Daurade</h4>
                    <span className="text-xs font-medium text-neutral-400">14€</span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-neutral-500">Citron vert, piment d’Espelette, herbes fraîches.</p>
                </div>
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif text-xl text-neutral-900">Poutargue d’Or</h4>
                    <span className="text-xs font-medium text-neutral-400">12€</span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-neutral-500">Pain au levain toasté, beurre demi-sel, zestes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <a href="#private" className="group inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-900">
              Réserver une table
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 transition group-hover:bg-neutral-900 group-hover:text-white">
                <ChevronRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="events" className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[40px] bg-mauve-50/40 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-10 md:p-16">
            <div className="mb-6 flex items-center gap-3 text-mauve-600">
              <Calendar size={16} />
              <span className="text-[10px] uppercase tracking-[0.45em] font-bold">Prochain événement</span>
            </div>
            <h3 className="font-serif text-4xl leading-tight text-neutral-900">Jeudi Jazz &amp; Vin Naturel — 18.04</h3>
            <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-600">
              Une soirée suspendue avec le quartet de Léo Merli. Dégustation de cuvées confidentielles et ambiance feutrée jusqu’à tard.
            </p>
            <a href="#private" className="mt-10 inline-flex self-start rounded-full border border-mauve-100 bg-white px-7 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-mauve-900 transition hover:bg-mauve-600 hover:text-white">
              Réserver ma table
            </a>
          </div>
          <div className="relative min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
              alt="Soirée au Culti"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="private" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-6 rounded-[40px] border border-neutral-100 bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)] md:grid-cols-3 md:p-14">
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-mauve-500">Privatisation</p>
            <h3 className="mt-4 font-serif text-3xl text-neutral-900">Un lieu pour vos soirées privées.</h3>
          </div>
          <p className="text-sm leading-7 text-neutral-600 md:pt-2">
            Anniversaire, afterwork, lancement, dîner intimiste : on imagine avec vous une soirée sur-mesure, élégante et fluide.
          </p>
          <div className="flex items-start md:justify-end">
            <a href="mailto:bonjour@leculti-marseille.fr" className="inline-flex rounded-full bg-terracotta-800 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-terracotta-700">
              Demander un devis
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
