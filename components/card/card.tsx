import * as React from 'react';
import styles from './card.module.css';
import cn from 'classnames';

export interface ICardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: 'white' | 'blue';
  className?: string;
  children?: React.ReactNode;
}

export function Card({ color = 'white', className, children, ...props }: ICardProps) {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color === 'blue',
      })}
      {...props}>
      {children}
    </div>
  );
}
