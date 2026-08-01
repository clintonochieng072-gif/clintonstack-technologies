import React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost';
};

export default function Button({ className, variant = 'default', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
        variant === 'default' ? 'bg-primary text-white hover:opacity-95' : 'bg-transparent border border-gray-200 text-gray-700',
        className
      )}
    />
  );
}
