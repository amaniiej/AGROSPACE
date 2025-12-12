import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
}

export function ActionButton({ 
  variant = 'primary', 
  icon: Icon, 
  children, 
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false
}: ActionButtonProps) {
  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700 border-transparent',
    secondary: 'bg-white text-green-600 hover:bg-green-50 border-green-600',
    outline: 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border
        transition-all disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${fullWidth ? 'w-full' : ''}
      `}
    >
      {Icon && <Icon className="size-5" />}
      {children}
    </button>
  );
}
