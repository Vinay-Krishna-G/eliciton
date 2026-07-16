import type { ReactNode, HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function Section({
  children,
  id = '',
  className = '',
  ...props
}: SectionProps) {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      id={id}
      className={`py-20 md:py-[120px] border-b border-[#2b1029]/5 relative overflow-hidden ${className}`}
      {...props}
    >
      <motion.div
        className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        variants={fadeInUpVariants}
      >
        {children}
      </motion.div>
    </section>
  );
}
