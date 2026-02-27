import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        
        // Size variants
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-base',
        size === 'lg' && 'px-8 py-4 text-lg',
        
        // Color variants
        variant === 'primary' && [
          'bg-gradient-to-r from-rose-500 to-purple-600',
          'text-white hover:from-rose-600 hover:to-purple-700',
          'shadow-lg hover:shadow-xl hover:-translate-y-0.5',
          'focus:ring-rose-500'
        ],
        variant === 'secondary' && [
          'bg-white text-gray-800',
          'border-2 border-gray-200 hover:border-rose-400',
          'shadow-sm hover:shadow-md hover:-translate-y-0.5',
          'focus:ring-gray-400'
        ],
        variant === 'outline' && [
          'bg-transparent border-2 border-white text-white',
          'hover:bg-white hover:text-gray-900',
          'focus:ring-white'
        ],
        
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
