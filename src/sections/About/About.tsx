import Section from '../../components/Section/Section';
import oneHealthStaticImg from '../../assets/images/one-health-static.png';

export default function About() {
  return (
    <Section id="about" className="bg-[#fafaf8]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Image */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm aspect-square bg-[#fafaf8] border border-[#2b1029]/10 rounded-2xl p-6 flex items-center justify-center overflow-hidden">
            <img
              src={oneHealthStaticImg}
              alt="Eliciton One Health ecosystems connection diagram"
              className="w-[85%] h-[85%] object-contain opacity-80"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column: Paragraph */}
        <div className="lg:col-span-7 space-y-6 lg:pl-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#2b1029] font-bold block">
            About Eliciton
          </span>
          <h2 className="text-display font-bold leading-tight text-[#2b1029] mb-4">
            Securing global veterinary ecosystems.
          </h2>
          <p className="text-lead text-muted leading-relaxed">
            Eliciton Innovations researches, develops, and delivers advanced biotechnology solutions to address infectious disease transmission at the frontline. Grounded in the One Health framework, our work maps the critical links between animal health, human safety, and environmental security. From molecular target identification to ruggedized field-ready diagnostic kits, we translate structural biology into immediate, validated impact.
          </p>
        </div>
      </div>
    </Section>
  );
}
