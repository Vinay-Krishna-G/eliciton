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

  return (
    <div id="contact" className="bg-[#fafaf8]">
      {/* Contact Form Gird block */}
      <Section className="border-none py-20">
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

      {/* Corporate Credible Footer */}
      <footer className="border-t border-[#2b1029]/10 bg-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Logo and brief */}
          <div className="md:col-span-6 space-y-4">
            <span className="flex items-center gap-2.5 text-[#2b1029] font-display text-base font-bold tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-[#85e8c5] inline-block border border-[#2b1029]/15"></span>
              ELICITON INNOVATIONS
            </span>
            <p className="text-xs text-muted max-w-sm leading-relaxed">
              Advancing veterinary biotechnology through diagnostics, vaccines, and translational research. Enabling frontline eradication protocols globally.
            </p>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-6 grid grid-cols-3 gap-6 text-xs font-body text-muted">
            <div className="space-y-2">
              <span className="text-[#2b1029] font-bold tracking-wider block uppercase text-[0.625rem]">Research</span>
              <ul className="space-y-1">
                <li>Diagnostics</li>
                <li>Vaccine Formulations</li>
                <li>Peptide Therapeutics</li>
              </ul>
            </div>
            <div className="space-y-2">
              <span className="text-[#2b1029] font-bold tracking-wider block uppercase text-[0.625rem]">Company</span>
              <ul className="space-y-1">
                <li>About Mission</li>
                <li>Impact Stats</li>
                <li>Partner Matrix</li>
              </ul>
            </div>
            <div className="space-y-2">
              <span className="text-[#2b1029] font-bold tracking-wider block uppercase text-[0.625rem]">Legal</span>
              <ul className="space-y-1">
                <li>Terms & Protocol</li>
                <li>Surveillance Policy</li>
                <li>Contact liaison</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-[#2b1029]/5 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-[0.7rem] text-muted font-mono">
          <span>&copy; {new Date().getFullYear()} Eliciton Innovations. All rights reserved.</span>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <span>LinkedIn</span>
            <span>ResearchGate</span>
            <span>Liaison Registry</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
