import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface DataCardProps {
  title: string;
  value: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export function DataCard({ title, value, trend, trendValue, subtitle, icon }: DataCardProps) {
  const getTrendIcon = () => {
    if (trend === 'up') return <TrendingUp className="size-4" />;
    if (trend === 'down') return <TrendingDown className="size-4" />;
    return <Minus className="size-4" />;
  };

  const getTrendColor = () => {
    if (trend === 'up') return 'text-green-600 bg-green-50';
    if (trend === 'down') return 'text-red-600 bg-red-50';
    return 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-gray-600">{title}</h4>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
      <div className="text-gray-900 mb-2">{value}</div>
      {(trend || subtitle) && (
        <div className="flex items-center gap-2">
          {trend && trendValue && (
            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-sm ${getTrendColor()}`}>
              {getTrendIcon()}
              {trendValue}
            </span>
          )}
          {subtitle && <span className="text-sm text-gray-500">{subtitle}</span>}
        </div>
      )}
    </div>
  );
}
