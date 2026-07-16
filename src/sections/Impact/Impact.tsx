import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';

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
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#2b1029] font-bold block mb-3">
          Global Reach
        </span>
        <h2 className="text-display font-bold leading-tight text-[#2b1029] mb-4">
          Measured Impact
        </h2>
        <p className="text-lead text-muted">
          Our technologies are validated by international institutions and actively deployed across global farming communities.
        </p>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 mb-20">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="bg-[#fafaf8] border border-[#2b1029]/5 p-6 flex flex-col items-center justify-center text-center hover:shadow-sm"
          >
            <span className="text-4xl sm:text-5xl font-bold font-display text-[#2b1029] mb-2">
              {stat.value}
            </span>
            <span className="font-mono text-[0.625rem] text-muted tracking-wider uppercase font-semibold">
              {stat.label}
            </span>
          </Card>
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
              <span className="font-mono text-xs text-green font-bold tracking-wider block">
                {group.category}
              </span>
              <ul className="space-y-2.5 font-body text-sm text-muted">
                {group.names.map((name) => (
                  <li key={name} className="flex items-center gap-2 border-b border-[#2b1029]/5 pb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#85e8c5] inline-block"></span>
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
