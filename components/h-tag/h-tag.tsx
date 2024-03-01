import * as React from 'react';
import styles from './h-tag.module.css';

export interface IHtagProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
}

export function Htag({ tag, children }: IHtagProps) {
  switch (tag) {
    case 'h1':
      return <h1 className={styles.h1}>{children}</h1>;

    case 'h2': {
      return <h2 className={styles.h2}>{children}</h2>;
    }
    case 'h3': {
      return <h3 className={styles.h3}>{children}</h3>;
    }

    default:
      return <></>;
  }
}
