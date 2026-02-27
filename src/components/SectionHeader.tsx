import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      'mb-12',
      centered && 'text-center',
      className
    )}>
      <h2 className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
        light ? 'text-white' : 'text-gray-900'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg md:text-xl max-w-2xl',
          centered && 'mx-auto',
          light ? 'text-white/80' : 'text-gray-600'
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        'mt-4 flex',
        centered && 'justify-center'
      )}>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full" />
      </div>
    </div>
  );
}
