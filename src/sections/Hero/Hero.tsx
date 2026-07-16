import Button from '../../components/Button/Button';
import heroCellImg from '../../assets/images/hero-cell.png';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
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
      className="relative w-full min-h-[90vh] flex items-center justify-center bg-[#fafaf8] px-6 md:px-12 pt-32 pb-20 border-b border-[#2b1029]/10"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Massive clean typography & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#2b1029] font-bold bg-[#85e8c5]/25 border border-[#2b1029]/10 px-3 py-1.5 rounded-full">
            Eliciton Innovations
          </span>
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display text-[#2b1029] tracking-tight leading-[1.08] mb-2">
              Healthy Animals.
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display text-[#2b1029] tracking-tight leading-[1.08]">
              Safer Food Systems.
            </h1>
          </div>
          <p className="text-lead text-muted max-w-xl leading-relaxed">
            Advanced biotechnology for veterinary diagnostics and disease prevention. Securing ecosystems, livestock populations, and communities globally.
          </p>
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <Button
              variant="primary"
              onClick={() => handleScrollTo('research')}
              className="px-8 py-4 text-sm font-semibold"
            >
              Our Research
            </Button>
            <Button
              variant="outline"
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-4 text-sm font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Right: Premium editorial scientific illustration */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-md aspect-square rounded-2xl bg-white border border-[#2b1029]/10 p-8 flex items-center justify-center shadow-[0_12px_40px_rgba(43,16,41,0.03)] relative overflow-hidden group">
            {/* Luminous Cell Visual - looks like a clean textbook illustration */}
            <img
              src={heroCellImg}
              alt="Luminous biological cell microscopic structure"
              className="w-[85%] h-[85%] object-contain relative z-10 select-none opacity-90 transition-transform duration-750 group-hover:scale-102"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
