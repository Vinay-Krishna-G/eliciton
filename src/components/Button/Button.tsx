import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyle =
    'inline-flex items-center justify-center px-6 py-3 rounded-[6px] font-body text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer focus:outline-none';

  const variants = {
    primary:
      'bg-[#2b1029] text-white hover:bg-[#3d1b3c] hover:shadow-[0_4px_15px_rgba(43,16,41,0.15)] border border-transparent',
    secondary:
      'bg-white text-[#2b1029] border border-[#2b1029]/10 hover:border-[#2b1029] hover:bg-[#fafaf8]',
    outline:
      'bg-transparent text-[#2b1029] border border-[#2b1029] hover:bg-[#2b1029] hover:text-white',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
