import Section from '../../components/Section/Section';
import researchSparseImg from '../../assets/images/research-sparse.png';
import researchHeroImg from '../../assets/images/research-hero.png';
import aquacultureImg from '../../assets/images/aquaculture.png';

export default function Research() {
  const focuses = [
    {
      title: 'Diagnostics Research',
      paragraph: 'Mapping biological genetic sequences to establish diagnostic assays that trace pathogen mutations. Our laboratories design assays targeting specific antigenic identifiers, ensuring tests retain diagnostic accuracy as viral vectors drift in field populations.',
      image: researchSparseImg,
      alt: 'Molecular structural molecular modeling visualization',
      tag: 'MOLECULAR TARGETS',
    },
    {
      title: 'Vaccine Engineering',
      paragraph: 'Developing recombinant peptide vaccine formulas that invoke broad protective immunity in domestic livestock. Our focus is on target antigen formulations that eliminate vector replication risks while ensuring robust humoral and cellular immune responses.',
      image: researchHeroImg,
      alt: 'Nanoscale protein structures and cells microscopic image',
      tag: 'IMMUNOLOGY',
    },
    {
      title: 'Translational Science',
      paragraph: 'Engineering peptide-based host therapies designed to limit pathogen load post-infection. By accelerating physiological recovery, our treatments help operators control transmission vectors within aquaculture systems and farm enclosures.',
      image: aquacultureImg,
      alt: 'Aquaculture vector water ripples research render',
      tag: 'AQUATIC ANIMAL HEALTH',
    },
  ];

  return (
    <Section id="research" className="bg-[#fafaf8]">
      <div className="max-w-3xl mb-24">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#2b1029] font-bold block mb-3">
          Scientific Division
        </span>
        <h2 className="text-display font-bold leading-tight text-[#2b1029] mb-4">
          Research Focus
        </h2>
        <p className="text-lead text-muted max-w-xl">
          Our translational biology programs isolate transmission vectors to manufacture robust veterinary diagnostics and immunotherapies.
        </p>
      </div>

      {/* Alternating Editorial Columns (Borderless) */}
      <div className="space-y-24 md:space-y-36">
        {focuses.map((f, idx) => {
          const isReverted = idx % 2 !== 0;
          return (
            <div
              key={f.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-5 flex justify-center ${
                  isReverted ? 'lg:order-2' : ''
                }`}
              >
                <div className="w-full aspect-[4/3] bg-white border border-[#2b1029]/10 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(43,16,41,0.02)] flex items-center justify-center p-3">
                  <img
                    src={f.image}
                    alt={f.alt}
                    className="w-full h-full object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div
                className={`lg:col-span-7 space-y-4 ${
                  isReverted ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'
                }`}
              >
                <span className="font-mono text-[0.65rem] text-[#8dc6bf] tracking-widest uppercase font-bold block">
                  {f.tag}
                </span>
                <h3 className="font-display font-bold text-3xl text-[#2b1029]">
                  {f.title}
                </h3>
                <p className="text-[0.95rem] text-muted leading-relaxed max-w-xl">
                  {f.paragraph}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
