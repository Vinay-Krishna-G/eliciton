import Section from '../../components/Section/Section';

export default function Impact() {
  const stats = [
    { value: '24+', label: 'Countries Active' },
    { value: '18', label: 'Research Programs' },
    { value: '45+', label: 'Partner Institutes' },
    { value: '12+', label: 'Years of Experience' },
    { value: '99.8%', label: 'Diagnostic Accuracy' },
  ];

  const partners = [
    { category: 'UNIVERSITIES', names: ['Boston Veterinary Research', 'Utrecht Animal Immunology Group', 'Munich Bio-Sciences Institute'] },
    { category: 'GOVERNMENT', names: ['Agricultural Defense Bureau', 'Department of Environmental Safeguards', 'Veterinary Medicine Registry'] },
    { category: 'NGOs', names: ['One Health Alliance Foundation', 'Global Food Security Council', 'Aquatic Habitats Network'] },
  ];

  return (
    <Section id="impact" className="bg-white">
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8dc6bf] font-bold block mb-3">
          Global Reach
        </span>
        <h2 className="text-display font-bold leading-tight text-[#2b1029] mb-4">
          Measured Impact
        </h2>
        <p className="text-lead text-muted max-w-xl">
          Our technologies are validated by international institutions and actively deployed across global veterinary networks.
        </p>
      </div>

      {/* Stats Grid - Borderless editorial layout with huge numbers */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-16 mb-28">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-start text-left border-l border-[#2b1029]/10 pl-6"
          >
            <span className="text-5xl sm:text-6xl font-bold font-display text-[#2b1029] tracking-tight mb-2">
              {stat.value}
            </span>
            <span className="font-mono text-[0.7rem] text-muted tracking-widest uppercase font-bold">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Partners List */}
      <div className="space-y-6">
        <h3 className="font-display font-semibold text-lg text-[#2b1029] border-b border-[#2b1029]/10 pb-2">
          Cooperating & Partner Institutions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {partners.map((group) => (
            <div key={group.category} className="space-y-4">
              <span className="font-mono text-xs text-[#8dc6bf] font-bold tracking-wider block">
                {group.category}
              </span>
              <ul className="space-y-2.5 font-body text-sm text-muted">
                {group.names.map((name) => (
                  <li key={name} className="flex items-center gap-2 border-b border-[#2b1029]/5 pb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8dc6bf] inline-block"></span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
