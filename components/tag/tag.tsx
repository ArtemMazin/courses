import * as React from 'react';
import styles from './tag.module.css';
import cn from 'classnames';

export interface ITagProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'small' | 'medium';
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  children: React.ReactNode;
  href?: string;
}

export function Tag({ size = 'medium', color = 'ghost', href, children, className, ...props }: ITagProps) {
  return (
    <div
      className={cn(
        styles.tag,
        {
          [styles.small]: size === 'small',
          [styles.medium]: size === 'medium',
          [styles.ghost]: color === 'ghost',
          [styles.red]: color === 'red',
          [styles.grey]: color === 'grey',
          [styles.green]: color === 'green',
          [styles.primary]: color === 'primary',
        },
        className
      )}
      {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
}
