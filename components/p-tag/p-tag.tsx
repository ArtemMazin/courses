import * as React from 'react';
import styles from './p-tag.module.css';
import cn from 'classnames';

export interface IPtagProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: React.ReactNode;
  size?: 's' | 'm' | 'l';
}

export function Ptag({ size, children, className, ...props }: IPtagProps) {
  return (
    <p
      className={cn(
        styles.p,
        {
          [styles.s]: size === 's',
          [styles.m]: size === 'm',
          [styles.l]: size === 'l',
        },
        className
      )}
      {...props}>
      {children}
    </p>
  );
}
