import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import diagnosticCartridgeImg from '../../assets/images/diagnostic-cartridge.png';
import vaccineShieldImg from '../../assets/images/vaccine-shield.png';
import peptideChainsImg from '../../assets/images/peptide-chains.png';

export default function WhatWeDo() {
  const cards = [
    {
      title: 'Diagnostics',
      image: diagnosticCartridgeImg,
      alt: 'Molecular diagnostic cartridge',
      text: 'Field-ready diagnostic cartridges engineered to detect viral antigens at picogram thresholds, allowing veterinary officers to identify threats in under fifteen minutes.',
      accent: 'border-t-4 border-[#fcd057]',
    },
    {
      title: 'Vaccines',
      image: vaccineShieldImg,
      alt: 'Biotech vaccine protective field representation',
      text: 'Targeted immunotherapies designed to establish early protection cycles in livestock populations, reducing transmission rates and securing food supply lines.',
      accent: 'border-t-4 border-[#85e8c5]',
    },
    {
      title: 'Therapeutics',
      image: peptideChainsImg,
      alt: 'Elegant peptide chain biological visual',
      text: 'Advanced peptide therapy formulations developed to accelerate physiological recovery times in animal herds, mitigating operational and commercial impact.',
      accent: 'border-t-4 border-[#ff8575]',
    },
  ];

  return (
    <Section className="bg-[#fafaf8]">
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#2b1029] font-bold block mb-3">
          Our Capabilities
        </span>
        <h2 className="text-display font-bold leading-tight text-[#2b1029] mb-4">
          What We Do
        </h2>
        <p className="text-lead text-muted">
          Our research focus spans three critical columns of animal biotechnology to deliver validated frontline protection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Card
            key={card.title}
            className={`flex flex-col bg-white border border-[#2b1029]/10 rounded-[12px] p-6 hover:shadow-lg transition-shadow duration-300 ${card.accent}`}
          >
            {/* Visual Header */}
            <div className="w-full aspect-video rounded-lg bg-[#fafaf8] border border-[#2b1029]/5 mb-6 flex items-center justify-center overflow-hidden">
              <img
                src={card.image}
                alt={card.alt}
                className="w-[65%] h-[65%] object-contain opacity-90"
                loading="lazy"
              />
            </div>

            <h3 className="font-display font-bold text-2xl text-[#2b1029] mb-4">
              {card.title}
            </h3>

            <p className="text-sm text-muted leading-relaxed">
              {card.text}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
