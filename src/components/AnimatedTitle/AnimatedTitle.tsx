import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export default function AnimatedTitle({
  text,
  tag = 'h2',
  className = '',
}: AnimatedTitleProps) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const Tag = tag;

  return (
    <Tag className={`overflow-hidden flex flex-wrap gap-x-[0.25em] ${className}`}>
      <motion.span
        className="flex flex-wrap gap-x-[0.25em]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-5%' }}
        variants={containerVariants}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
