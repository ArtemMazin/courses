import * as React from 'react';
import styles from './button.module.css';
import Arrow from '@/public/Arrow.svg';
import cn from 'classnames';

export interface IButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: 'primary' | 'default';
  arrow?: 'right' | 'down' | 'none';
  children: React.ReactNode;
}

export function Button({ appearance, arrow = 'none', children, className, ...props }: IButtonProps) {
  return (
    <button
      className={cn(
        styles.button,
        { [styles.primary]: appearance === 'primary', [styles.default]: appearance === 'default' },
        className
      )}
      {...props}>
      {children}
      {arrow !== 'none' && (
        <span className={cn(styles.arrow, styles[arrow])}>
          <Arrow />
        </span>
      )}
    </button>
  );
}
