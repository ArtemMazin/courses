import * as React from 'react';
import styles from './button.module.css';
import cn from 'classnames';

export interface IButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: 'primary' | 'default';
  children: React.ReactNode;
}

export function Button({ appearance, children, className, ...props }: IButtonProps) {
  return (
    <button
      className={cn(
        styles.button,
        { [styles.primary]: appearance === 'primary', [styles.default]: appearance === 'default' },
        className
      )}
      {...props}>
      {children}
    </button>
  );
}
