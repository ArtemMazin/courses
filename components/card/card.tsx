import * as React from 'react';
import styles from './card.module.css';
import cn from 'classnames';

export interface ICardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: 'white' | 'blue';
  className?: string;
  children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, ICardProps>(
  ({ color = 'white', className, children, ...props }: ICardProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className={cn(styles.card, className, {
          [styles.blue]: color === 'blue',
        })}
        {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
