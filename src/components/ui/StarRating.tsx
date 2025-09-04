import React from 'react';
import { Star } from 'lucide-react';
import { clsx } from 'clsx';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  size = 'md',
  className,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <div className={clsx('flex items-center gap-1', className)}>
      {Array.from({ length: maxStars }, (_, index) => (
        <Star
          key={index}
          className={clsx(
            sizeClasses[size],
            index < rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-gray-300'
          )}
        />
      ))}
    </div>
  );
};