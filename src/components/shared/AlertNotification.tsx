import { AlertCircle, CheckCircle2, Info, XCircle, X } from 'lucide-react';
import { useState } from 'react';

interface AlertNotificationProps {
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export function AlertNotification({ 
  type, 
  title, 
  message, 
  dismissible = false,
  onDismiss 
}: AlertNotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  const styles = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: CheckCircle2,
      iconColor: 'text-green-600'
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: AlertCircle,
      iconColor: 'text-yellow-600'
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: XCircle,
      iconColor: 'text-red-600'
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: Info,
      iconColor: 'text-blue-600'
    }
  };

  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className={`${style.bg} border ${style.border} rounded-lg p-4`}>
      <div className="flex items-start gap-3">
        <Icon className={`size-5 ${style.iconColor} flex-shrink-0 mt-0.5`} />
        <div className="flex-1 min-w-0">
          <h4 className={`${style.text}`}>{title}</h4>
          {message && <p className={`mt-1 text-sm ${style.text} opacity-90`}>{message}</p>}
        </div>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className={`${style.text} hover:opacity-70 transition-opacity flex-shrink-0`}
          >
            <X className="size-5" />
          </button>
        )}
      </div>
    </div>
  );
}
