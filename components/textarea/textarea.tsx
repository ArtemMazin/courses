import * as React from 'react';
import styles from './textarea.module.css';
import cn from 'classnames';
import { FieldError } from 'react-hook-form';
import { Ptag } from '..';

export interface ITextAreaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  error?: FieldError;
}

export const TextArea = React.forwardRef(
  ({ className, error, ...props }: ITextAreaProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <div className={styles.textarea_wrapper}>
        <textarea
          className={cn(className, styles.textarea, { [styles.error]: error })}
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

TextArea.displayName = 'TextArea';
