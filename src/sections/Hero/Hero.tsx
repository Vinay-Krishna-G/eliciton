 import Button from '../../components/Button/Button';
import researchHeroImg from '../../assets/images/research-hero.png';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 96;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-white px-6 md:px-12 pt-32 pb-20 border-b border-[#2b1029]/5"
    >
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Enormous, clean, editorial typography & CTA */}
        <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6 md:space-y-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2b1029] font-bold bg-[#effaf6] border border-[#2b1029]/10 px-3.5 py-2 rounded-full">
            Biotechnology Division
          </span>
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold font-display text-[#2b1029] tracking-tight leading-[1.05]">
              Healthy Animals.<br />
              Safer Food Systems.<br />
              <span className="text-[#8dc6bf]">Stronger Communities.</span>
            </h1>
          </div>
          <p className="text-lead text-muted max-w-xl leading-relaxed">
            Eliciton develops advanced diagnostics, vaccines, and targeted therapeutic platforms to protect livestock populations and secure veterinary systems globally.
          </p>
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <Button
              variant="primary"
              onClick={() => handleScrollTo('research')}
              className="px-8 py-4 text-sm font-semibold"
            >
              Our Research Focus
            </Button>
            <Button
              variant="outline"
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-4 text-sm font-semibold"
            >
              Contact Science Liaison
            </Button>
          </div>
        </div>

        {/* Right: Massive laboratory photo that fills the viewport column height */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end h-full">
          <div className="w-full aspect-[4/3] lg:aspect-[1.1] rounded-2xl border border-[#2b1029]/10 overflow-hidden shadow-[0_15px_50px_rgba(43,16,41,0.03)] relative bg-[#fafaf8]">
            <img
              src={researchHeroImg}
              alt="Structural molecular biotechnology research laboratory visualization"
              className="w-full h-full object-cover select-none opacity-90 transition-transform duration-750 hover:scale-102"
              loading="eager"
            />
            {/* Fine border outline overlays to look technical */}
            <div className="absolute inset-4 border border-white/10 pointer-events-none rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
