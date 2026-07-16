import Section from '../../components/Section/Section';
import diagnosticCartridgeImg from '../../assets/images/diagnostic-cartridge.png';
import vaccineShieldImg from '../../assets/images/vaccine-shield.png';
import peptideChainsImg from '../../assets/images/peptide-chains.png';

export default function WhatWeDo() {
  const pillars = [
    {
      title: 'Diagnostics',
      image: diagnosticCartridgeImg,
      alt: 'Molecular diagnostic cartridge',
      text: 'Field-ready diagnostic cartridges engineered to detect viral antigens at low picogram thresholds, allowing veterinary officers to identify threats in under fifteen minutes.',
      tag: 'EARLY DETECTION',
    },
    {
      title: 'Vaccines',
      image: vaccineShieldImg,
      alt: 'Vaccine protective field representation',
      text: 'Targeted immunotherapies designed to establish early protection cycles in livestock populations, reducing transmission rates and securing food supply lines.',
      tag: 'IMMUNIZATION',
    },
    {
      title: 'Therapeutics',
      image: peptideChainsImg,
      alt: 'Peptide chain biological structure',
      text: 'Advanced peptide therapy formulations developed to accelerate physiological recovery times in animal herds, mitigating operational and commercial impact.',
      tag: 'TREATMENT',
    },
  ];

  return (
    <Section id="products-menu" className="bg-[#effaf6] border-none">
      <div className="max-w-3xl mb-20">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#2b1029] font-bold block mb-3">
          Our Capabilities
        </span>
        <h2 className="text-display font-bold leading-tight text-[#2b1029] mb-4">
          What We Do
        </h2>
        <p className="text-lead text-muted max-w-xl">
          Eliciton develops biological and molecular solutions mapping across three distinct columns of veterinary care.
        </p>
      </div>

      {/* Editorial Grid - Borderless column spacing instead of cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="space-y-6 flex flex-col">
            {/* Visual Container */}
            <div className="w-full aspect-[4/3] rounded-xl bg-white border border-[#2b1029]/5 flex items-center justify-center overflow-hidden shadow-[0_10px_30px_rgba(43,16,41,0.02)]">
              <img
                src={pillar.image}
                alt={pillar.alt}
                className="w-[60%] h-[60%] object-contain opacity-90 transition-transform duration-500 hover:scale-103"
                loading="lazy"
              />
            </div>

            {/* Tag metadata */}
            <span className="font-mono text-[0.65rem] text-[#8dc6bf] tracking-widest uppercase font-bold block">
              {pillar.tag}
            </span>

            {/* Title */}
            <h3 className="font-display font-bold text-2xl text-[#2b1029]">
              {pillar.title}
            </h3>

            {/* Text description */}
            <p className="text-[0.9rem] text-muted leading-relaxed max-w-[40ch]">
              {pillar.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
