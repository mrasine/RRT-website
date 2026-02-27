import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <div className={cn(
      'bg-white rounded-2xl p-6 md:p-8 shadow-lg',
      'border border-gray-100 relative',
      className
    )}>
      {/* Quote mark */}
      <div className="absolute -top-3 -left-2 text-6xl text-rose-200 font-serif leading-none">
        "
      </div>
      
      {/* Stars */}
      {rating > 0 && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-5 h-5',
                i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'
              )}
            />
          ))}
        </div>
      )}
      
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
        {quote}
      </blockquote>
      
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          {role && (
            <div className="text-sm text-gray-500">{role}</div>
          )}
        </div>
      </div>
    </div>
  );
}
