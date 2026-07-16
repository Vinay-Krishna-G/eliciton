import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import WhatWeDo from '../sections/WhatWeDo/WhatWeDo';
import DIVA from '../sections/DIVA/DIVA';
import Research from '../sections/Research/Research';
import Impact from '../sections/Impact/Impact';
import Contact from '../sections/Contact/Contact';

export default function Home() {
  return (
    <div className="bg-[#fafaf8] min-h-screen text-[#1d1e20] selection:bg-[#85e8c5]/30">
      {/* 1. Hero Block */}
      <Hero />

      {/* 2. About Block */}
      <About />

      {/* 3. What We Do Block */}
      <WhatWeDo />

      {/* 4. Flagship Innovation Centerpiece Block */}
      <DIVA />

      {/* 5. Research Focus alternating Block */}
      <Research />

      {/* 6. Impact Block & Partners */}
      <Impact />

      {/* 7. Contact Block & Footer */}
      <Contact />
    </div>
  );
}
