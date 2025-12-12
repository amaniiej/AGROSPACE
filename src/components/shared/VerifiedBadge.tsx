import { Shield, CheckCircle2 } from 'lucide-react';

interface VerifiedBadgeProps {
  status: 'verified' | 'pending' | 'unverified';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export function VerifiedBadge({ status, size = 'md', showLabel = true }: VerifiedBadgeProps) {
  const sizeClasses = {
    sm: 'size-4',
    md: 'size-5',
    lg: 'size-6'
  };

  const badgeStyles = {
    verified: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      border: 'border-green-300',
      icon: CheckCircle2,
      label: 'Verified'
    },
    pending: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-700',
      border: 'border-yellow-300',
      icon: Shield,
      label: 'Pending Verification'
    },
    unverified: {
      bg: 'bg-gray-100',
      text: 'text-gray-700',
      border: 'border-gray-300',
      icon: Shield,
      label: 'Not Verified'
    }
  };

  const style = badgeStyles[status];
  const Icon = style.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${style.bg} ${style.text} ${style.border}`}>
      <Icon className={sizeClasses[size]} />
      {showLabel && <span className="text-sm">{style.label}</span>}
    </span>
  );
}
