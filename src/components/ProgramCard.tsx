import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './Button';
import { Users, Sparkles, Trophy } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  ageRange?: string;
  level?: string;
  icon?: 'recreational' | 'preteam' | 'competitive' | 'xcel' | 'ballet' | 'multisport';
  className?: string;
}

const iconMap = {
  recreational: Users,
  preteam: Sparkles,
  competitive: Trophy,
  xcel: Trophy,
  ballet: Sparkles,
  multisport: Users,
};

export function ProgramCard({
  title,
  description,
  ageRange,
  level,
  icon = 'recreational',
  className,
}: ProgramCardProps) {
  const IconComponent = iconMap[icon];

  return (
    <div className={cn(
      'group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl',
      'transition-all duration-300 hover:-translate-y-2',
      'border border-gray-100',
      className
    )}>
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-100 to-purple-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="w-7 h-7 text-rose-500" />
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      
      {(ageRange || level) && (
        <div className="flex flex-wrap gap-2 mb-3">
          {ageRange && (
            <span className="inline-block px-3 py-1 text-sm font-medium bg-rose-50 text-rose-600 rounded-full">
              {ageRange}
            </span>
          )}
          {level && (
            <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-50 text-purple-600 rounded-full">
              {level}
            </span>
          )}
        </div>
      )}
      
      <p className="text-gray-600 mb-5 leading-relaxed">
        {description}
      </p>
      
      <Button variant="secondary" size="sm" className="w-full">
        Learn More
      </Button>
    </div>
  );
}
