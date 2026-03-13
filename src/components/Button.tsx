import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'muted' | 'icon' | 'tab' | "accordion" | "accent" | "outline"
}

export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const variantClasses = {
    primary: 'btn-primary',
    muted: 'btn-muted',
    icon: 'btn-icon',
    tab: 'btn-tab',
    accordion: 'btn-accordion',
    accent: 'btn-accent',
    outline: 'btn-outline',
  };

  return (
    <button
      className={`${variantClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};
