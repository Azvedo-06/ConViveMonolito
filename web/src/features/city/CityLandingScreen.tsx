import { useState } from 'react';
import { type CityTheme, cityOptions } from '../../theme/cityTheme';

type CityLandingScreenProps = {
  city: CityTheme;
  onBack: () => void;
  onLogin: () => void;
};

export function CityLandingScreen({ city, onBack, onLogin }: CityLandingScreenProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const selectedCity = cityOptions.find((option) => option.id === city);

  if (!selectedCity) {
    return null;
  }

  return (
    <section className="min-h-screen bg-surface text-text">
      <header className="relative bg-brand-primary text-white">
        <div className="flex items-center justify-between px-4 py-4 md:px-8 md:py-5">
          <button
            type="button"
            onClick={onBack}
            className="font-display text-lg font-bold tracking-wide transition-opacity hover:opacity-80"
          >
            CONVIVE
          </button>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-white/30 transition hover:bg-white/10 md:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </span>
          </button>

          <nav className="hidden items-center gap-3 text-xs font-medium md:flex md:gap-6 md:text-sm">
            <button
              type="button"
              className="rounded px-3 py-1.5 transition hover:bg-white/10"
            >
              EVENTOS
            </button>
            <button
              type="button"
              className="rounded px-3 py-1.5 transition hover:bg-white/10"
            >
              CURSOS
            </button>
            <button
              type="button"
              className="rounded px-3 py-1.5 transition hover:bg-white/10"
            >
              ATIVIDADES
            </button>
            <button
              type="button"
              className="rounded px-3 py-1.5 transition hover:bg-white/10"
            >
              INFORMATIVOS
            </button>
            <button
              type="button"
              onClick={onLogin}
              className="rounded px-3 py-1.5 transition hover:bg-white/10"
            >
              LOGIN
            </button>
            <button
              type="button"
              onClick={onBack}
              className="rounded px-3 py-1.5 transition hover:bg-white/10"
            >
              TROCAR CIDADE
            </button>
          </nav>
        </div>

        {isMobileMenuOpen && (
          <nav className="grid gap-1 border-t border-white/20 px-4 pb-4 pt-2 text-sm font-medium md:hidden">
            <button
              type="button"
              className="rounded px-3 py-2 text-left transition hover:bg-white/10"
            >
              EVENTOS
            </button>
            <button
              type="button"
              className="rounded px-3 py-2 text-left transition hover:bg-white/10"
            >
              CURSOS
            </button>
            <button
              type="button"
              className="rounded px-3 py-2 text-left transition hover:bg-white/10"
            >
              ATIVIDADES
            </button>
            <button
              type="button"
              className="rounded px-3 py-2 text-left transition hover:bg-white/10"
            >
              INFORMATIVOS
            </button>
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onLogin();
              }}
              className="rounded px-3 py-2 text-left transition hover:bg-white/10"
            >
              LOGIN
            </button>
            <button
              type="button"
              onClick={onBack}
              className="rounded px-3 py-2 text-left transition hover:bg-white/10"
            >
              TROCAR CIDADE
            </button>
          </nav>
        )}
      </header>

      <main className="min-h-[calc(100vh-76px)] px-4 py-6 md:min-h-[calc(100vh-84px)] md:px-8 md:py-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative h-[38vh] min-h-[260px] w-full overflow-hidden rounded-2xl shadow-cityCard md:h-[52vh] md:min-h-[420px]">
            <img
              src={selectedCity.imageUrl}
              alt={`Vista da cidade de ${selectedCity.label}`}
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.src = selectedCity.imageFallbackUrl;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 text-white md:p-8">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-white/85 md:text-sm">
                Cidade selecionada
              </p>
              <h1 className="mt-1 font-display text-3xl font-bold md:text-5xl">
                {selectedCity.label}
              </h1>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
