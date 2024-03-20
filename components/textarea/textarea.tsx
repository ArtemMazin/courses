import * as React from 'react';
import styles from './textarea.module.css';
import cn from 'classnames';

export interface ITextAreaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

export function TextArea({ className, ...props }: ITextAreaProps) {
  return (
    <textarea
      className={cn(className, styles.textarea)}
      {...props}
    />
  );
}
