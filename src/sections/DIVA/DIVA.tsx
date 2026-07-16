import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import divaProductImg from '../../assets/images/diva-product.png';

export default function DIVA() {
  const specs = [
    { label: 'Assay Sensitivity', value: 'detects viral targets below pg/mL limits' },
    { label: 'Diagnostic Specificity', value: '100% differentiation between vaccinated & infected hosts' },
    { label: 'Assay Readout Time', value: 'under 15 minutes to clear colorimetric matrix' },
    { label: 'Operational Range', value: '0°C to 45°C field stable, no active cold chain required' },
  ];

  return (
    <Section id="innovation" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-8">
        {/* Product render showcase - left side */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full aspect-square bg-[#fafaf8] border border-[#2b1029]/10 rounded-2xl p-10 flex items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(43,16,41,0.02)]">
            <img
              src={divaProductImg}
              alt="Eliciton DIVA diagnostic kit precision veterinary field testing device"
              className="w-[85%] h-[85%] object-contain relative z-10"
            />
          </div>
        </div>

        {/* Spec details - right side */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8dc6bf] font-bold block mb-3">
              Flagship Innovation
            </span>
            <h2 className="text-display sm:text-[2.75rem] font-bold leading-tight text-[#2b1029] mb-4">
              The DIVA Diagnostic System
            </h2>
            <p className="text-lead text-muted leading-relaxed max-w-xl">
              Differentiating Infected from Vaccinated Animals (DIVA) forms the foundation of modern veterinary surveillance. Eliciton diagnostic kits allow concurrent vaccine deployment and infection monitoring.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-display font-semibold text-lg text-[#2b1029] border-b border-[#2b1029]/10 pb-2">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec) => (
                <Card
                  key={spec.label}
                  className="bg-[#fafaf8] border border-[#2b1029]/5 p-4 rounded-lg hover:shadow-[0_4px_15px_rgba(43,16,41,0.02)]"
                >
                  <span className="font-mono text-[0.625rem] text-[#2b1029]/50 tracking-wider block mb-1 uppercase font-bold">
                    {spec.label}
                  </span>
                  <p className="font-body text-sm text-[#2b1029] font-medium">
                    {spec.value}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-muted">
            <div className="space-y-1.5">
              <strong className="text-[#2b1029] font-semibold block text-base">How it works</strong>
              <p className="text-xs leading-relaxed max-w-[35ch]">
                By targeting marker antigens unique to wild-type viral genomes and excluded from vaccine vector formulas, Eliciton diagnostic wells resolve host immune differentiation.
              </p>
            </div>
            <div className="space-y-1.5">
              <strong className="text-[#2b1029] font-semibold block text-base">Why it matters</strong>
              <p className="text-xs leading-relaxed max-w-[35ch]">
                Allows regulatory bodies to authorize ring vaccination protocols during outbreaks without closing export markets due to generic antibody-positive status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
