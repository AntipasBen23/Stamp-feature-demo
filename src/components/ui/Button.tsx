import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#FF0066] hover:bg-[#E6005C] text-white shadow-md hover:shadow-lg active:scale-95',
    secondary: 'bg-[#0A1F3D] hover:bg-[#1a2f4d] text-white shadow-md hover:shadow-lg active:scale-95',
    outline: 'border-2 border-[#FF0066] text-[#FF0066] hover:bg-[#FF0066] hover:text-white active:scale-95',
    ghost: 'text-[#0A1F3D] hover:bg-gray-100 active:scale-95',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}