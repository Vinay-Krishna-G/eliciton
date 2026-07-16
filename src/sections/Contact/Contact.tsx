import { useState } from 'react';
import type { FormEvent } from 'react';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import aquacultureImg from '../../assets/images/aquaculture.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all required fields.');
      return;
    }
    setStatus('Thank you. Our science liaison team will contact you shortly.');
    setFormData({ name: '', email: '', org: '', message: '' });
  };

  const handleNavClick = (id: string) => {
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
    <div id="contact" className="bg-[#fafaf8]">
      {/* Contact Form Grid block */}
      <Section className="border-none py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#2b1029] font-bold block">
                Research Inquiry
              </span>
              <h2 className="text-display font-bold leading-tight text-[#2b1029]">
                Liaison & Partnership
              </h2>
              <p className="text-base text-muted leading-relaxed">
                Connect directly with our biological operations and regulatory affairs liaison division for integration inquiries.
              </p>
            </div>

            {/* Aquatic field Visual indicator */}
            <div className="border border-[#2b1029]/10 rounded-lg overflow-hidden aspect-video relative group shadow-sm bg-white p-2">
              <img
                src={aquacultureImg}
                alt="Eliciton biological aquaculture test environment visual"
                className="w-full h-full object-cover rounded-[6px] opacity-90 transition-transform duration-700 group-hover:scale-102"
              />
            </div>

            {/* Direct addresses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-muted font-body">
              <div>
                <strong className="text-[#2b1029] font-semibold block mb-1">Headquarters Facility</strong>
                One Innovation Boulevard<br />
                Suite 400<br />
                Boston, MA 02110
              </div>
              <div>
                <strong className="text-[#2b1029] font-semibold block mb-1">Direct Contacts</strong>
                Email: liaison@eliciton.com<br />
                Operations: (617) 555-0190<br />
                Fax: (617) 555-0191
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Card className="bg-white border border-[#2b1029]/10 p-6 md:p-8 hover:shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="block font-mono text-[0.7rem] uppercase tracking-wider text-muted font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#fafaf8] border border-[#2b1029]/10 rounded-[6px] px-4 py-3.5 text-text focus:outline-none focus:border-[#2b1029] text-sm transition-colors"
                    placeholder="Dr. Sarah Jenkins"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="email" className="block font-mono text-[0.7rem] uppercase tracking-wider text-muted font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#fafaf8] border border-[#2b1029]/10 rounded-[6px] px-4 py-3.5 text-text focus:outline-none focus:border-[#2b1029] text-sm transition-colors"
                      placeholder="s.jenkins@university.edu"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="org" className="block font-mono text-[0.7rem] uppercase tracking-wider text-muted font-semibold">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="org"
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      className="w-full bg-[#fafaf8] border border-[#2b1029]/10 rounded-[6px] px-4 py-3.5 text-text focus:outline-none focus:border-[#2b1029] text-sm transition-colors"
                      placeholder="Institute of Veterinary Medicine"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="block font-mono text-[0.7rem] uppercase tracking-wider text-muted font-semibold">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#fafaf8] border border-[#2b1029]/10 rounded-[6px] px-4 py-3.5 text-text focus:outline-none focus:border-[#2b1029] text-sm transition-colors resize-none"
                    placeholder="Inquire about clinical validation data, DIVA kit distribution parameters, or research agreements..."
                    required
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <Button type="submit" variant="primary" className="w-full sm:w-auto px-8 py-3.5">
                    Submit Liaison Inquiry
                  </Button>
                  {status && (
                    <span className={`text-xs font-mono font-medium ${status.includes('fill') ? 'text-coral' : 'text-plum'}`}>
                      {status}
                    </span>
                  )}
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      {/* Corporate High-Contrast Footer (Deep Plum background, white text) */}
      <footer className="border-t border-[#2b1029]/15 bg-[#2b1029] text-white py-16 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Logo and brief */}
          <div className="md:col-span-6 space-y-4">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-white font-display text-lg font-extrabold tracking-wider focus:outline-none cursor-pointer"
            >
              <span className="w-3.5 h-3.5 rounded-full bg-[#8dc6bf] inline-block border border-white/10"></span>
              ELICITON
            </button>
            <p className="text-xs text-white/60 max-w-sm leading-relaxed">
              Eliciton Innovations is a global developer of veterinary biotechnology, delivering diagnostics, immunotherapies, and research pipelines to defend ecosystem food security.
            </p>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-6 grid grid-cols-3 gap-6 text-xs font-body text-white/50">
            <div className="space-y-3">
              <span className="text-white font-bold tracking-wider block uppercase text-[0.625rem]">Research</span>
              <ul className="space-y-2">
                <li><button onClick={() => handleNavClick('research')} className="hover:text-white cursor-pointer focus:outline-none">Diagnostics Focus</button></li>
                <li><button onClick={() => handleNavClick('research')} className="hover:text-white cursor-pointer focus:outline-none">Vaccine Engineering</button></li>
                <li><button onClick={() => handleNavClick('research')} className="hover:text-white cursor-pointer focus:outline-none">Translational Science</button></li>
              </ul>
            </div>
            <div className="space-y-3">
              <span className="text-white font-bold tracking-wider block uppercase text-[0.625rem]">Innovation</span>
              <ul className="space-y-2">
                <li><button onClick={() => handleNavClick('innovation')} className="hover:text-white cursor-pointer focus:outline-none">DIVA Platform</button></li>
                <li><button onClick={() => handleNavClick('innovation')} className="hover:text-white cursor-pointer focus:outline-none">Technical Specs</button></li>
                <li><button onClick={() => handleNavClick('innovation')} className="hover:text-white cursor-pointer focus:outline-none">Assay Parameters</button></li>
              </ul>
            </div>
            <div className="space-y-3">
              <span className="text-white font-bold tracking-wider block uppercase text-[0.625rem]">Corporate</span>
              <ul className="space-y-2">
                <li><button onClick={() => handleNavClick('about')} className="hover:text-white cursor-pointer focus:outline-none">About Us</button></li>
                <li><button onClick={() => handleNavClick('impact')} className="hover:text-white cursor-pointer focus:outline-none">Measured Impact</button></li>
                <li><button onClick={() => handleNavClick('impact')} className="hover:text-white cursor-pointer focus:outline-none">Cooperating Partners</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-[0.7rem] text-white/40 font-mono">
          <span>&copy; {new Date().getFullYear()} Eliciton Innovations. All rights reserved.</span>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <span className="hover:text-white cursor-pointer">LinkedIn</span>
            <span className="hover:text-white cursor-pointer">ResearchGate</span>
            <span className="hover:text-white cursor-pointer">Regulatory Registry</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
