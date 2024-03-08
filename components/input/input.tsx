import * as React from 'react';
import styles from './input.module.css';
import cn from 'classnames';

export interface IInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: IInputProps) {
  return (
    <input
      type='text'
      className={cn(className, styles.input)}
      {...props}
    />
  );
}
