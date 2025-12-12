import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  count?: number;
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

export function StarRating({ 
  rating, 
  maxRating = 5, 
  size = 'md', 
  showCount = false,
  count,
  interactive = false,
  onChange
}: StarRatingProps) {
  const sizeClasses = {
    sm: 'size-4',
    md: 'size-5',
    lg: 'size-6'
  };

  const handleClick = (index: number) => {
    if (interactive && onChange) {
      onChange(index + 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: maxRating }, (_, i) => {
          const isFilled = i < Math.floor(rating);
          const isHalf = i < rating && i >= Math.floor(rating);
          
          return (
            <button
              key={i}
              onClick={() => handleClick(i)}
              disabled={!interactive}
              className={interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}
              type="button"
            >
              <Star
                className={`${sizeClasses[size]} ${
                  isFilled 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : isHalf 
                    ? 'fill-yellow-400/50 text-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            </button>
          );
        })}
      </div>
      {showCount && count !== undefined && (
        <span className="text-sm text-gray-600">({count})</span>
      )}
    </div>
  );
}
