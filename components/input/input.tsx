import * as React from 'react';
import styles from './input.module.css';
import cn from 'classnames';
import { FieldError } from 'react-hook-form';
import { Ptag } from '..';

export interface IInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: FieldError;
}

export const Input = React.forwardRef(
  ({ className, error, ...props }: IInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <div className={styles.input_wrapper}>
        <input
          className={cn(className, styles.input, { [styles.error]: error })}
          ref={ref}
          {...props}
        />
        {error && (
          <Ptag
            size='s'
            className={styles.error_message}>
            {error.message}
          </Ptag>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
