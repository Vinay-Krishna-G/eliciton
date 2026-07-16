import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    const el = document.getElementById(id);
    if (el) {
      const offset = 96; // Height of the sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const menuItems = [
    {
      name: 'Products',
      id: 'products-menu',
      items: [
        { label: 'DIVA Diagnostic Kit', id: 'innovation' },
        { label: 'Pathogen Assays', id: 'research' },
        { label: 'Immunoassay Plates', id: 'research' },
      ],
    },
    {
      name: 'Focus Areas',
      id: 'focus-menu',
      items: [
        { label: 'Diagnostics', id: 'research' },
        { label: 'Vaccines', id: 'research' },
        { label: 'Therapeutics', id: 'research' },
      ],
    },
    {
      name: 'Company',
      id: 'company-menu',
      items: [
        { label: 'About Eliciton', id: 'about' },
        { label: 'Impact & Reach', id: 'impact' },
        { label: 'Cooperating Partners', id: 'impact' },
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b h-24 flex items-center bg-white ${
        isScrolled
          ? 'border-[#2b1029]/10 shadow-sm'
          : 'border-[#2b1029]/5'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-[#2b1029] font-display text-xl font-extrabold tracking-wider focus:outline-none cursor-pointer"
        >
          <span className="w-3.5 h-3.5 rounded-full bg-[#8dc6bf] inline-block border border-[#2b1029]/15"></span>
          ELICITON
        </button>

        {/* Desktop Rich Navigation Dropdowns */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((menu) => (
            <div
              key={menu.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(menu.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 font-body text-[0.85rem] font-bold text-muted hover:text-[#2b1029] uppercase tracking-wider py-2 cursor-pointer focus:outline-none">
                {menu.name}
                <ChevronDown size={14} className={`transition-transform duration-250 ${activeDropdown === menu.name ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Dropdown Menu */}
              {activeDropdown === menu.name && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white border border-[#2b1029]/15 rounded-lg shadow-xl py-3 px-2 z-50 animate-fade-in mt-1">
                  {menu.items.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(item.id)}
                      className="w-full text-left font-body text-xs font-semibold text-[#2b1029]/80 hover:text-[#2b1029] hover:bg-[#effaf6] px-4 py-2.5 rounded-[4px] transition-colors focus:outline-none cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button
            onClick={() => handleNavClick('contact')}
            className="font-body text-[0.85rem] font-bold text-muted hover:text-[#2b1029] uppercase tracking-wider focus:outline-none cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* CTA Contact button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-[#2b1029] text-white hover:bg-[#3d1b3c] font-body text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-[6px] transition-all duration-200 cursor-pointer shadow-sm"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#2b1029] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-24 bg-white z-40 flex flex-col items-center justify-center gap-8 border-t border-[#2b1029]/10 px-6 animate-fade-in">
          <button
            onClick={() => handleNavClick('home')}
            className="font-display text-xl font-bold text-[#2b1029]"
          >
            Home
          </button>
          {menuItems.map((menu) => (
            <div key={menu.name} className="flex flex-col items-center gap-2">
              <span className="font-body text-[0.85rem] font-bold text-muted uppercase tracking-widest">{menu.name}</span>
              <div className="flex flex-wrap justify-center gap-4">
                {menu.items.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavClick(item.id)}
                    className="font-body text-xs text-[#2b1029] font-semibold bg-[#effaf6] px-3 py-1.5 rounded-full"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="font-display text-xl font-bold text-[#2b1029] border-t border-border pt-4 w-full text-center"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
