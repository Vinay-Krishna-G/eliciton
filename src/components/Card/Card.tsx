import type { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = '',
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-white border border-[#2b1029]/10 rounded-[12px] p-6 md:p-8 transition-all duration-300 hover:border-[#2b1029]/20 hover:shadow-[0_8px_30px_rgba(43,16,41,0.04)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
