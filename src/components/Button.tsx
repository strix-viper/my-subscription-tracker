import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'warning' | 'success';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-bold py-2 px-4 rounded text-white hover:opacity-90 transition-opacity';
  let variantStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-blue-600';
      break;
    case 'secondary':
      variantStyles = 'bg-gray-500';
      break;
    case 'danger':
      variantStyles = 'bg-red-600';
      break;
    case 'warning':
      variantStyles = 'bg-yellow-500';
      break;
    case 'success':
      variantStyles = 'bg-green-600';
      break;
    default:
      variantStyles = 'bg-blue-600';
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;