import * as React from 'react';
import styles from './h-tag.module.css';
import cn from 'classnames';

export interface IHtagProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
}

export function Htag({ tag, className, children }: IHtagProps) {
  switch (tag) {
    case 'h1':
      return <h1 className={cn(styles.h1, className)}>{children}</h1>;

    case 'h2': {
      return <h2 className={cn(styles.h2, className)}>{children}</h2>;
    }
    case 'h3': {
      return <h3 className={cn(styles.h3, className)}>{children}</h3>;
    }

    default:
      return <></>;
  }
}
