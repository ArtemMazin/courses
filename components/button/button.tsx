import * as React from 'react';

export interface IButtonProps {
  type: 'primary' | 'default';
  children: React.ReactNode;
}

export function Button({ type, children }: IButtonProps) {
  const buttonType = type === 'primary' ? 'primary' : 'default';
  const className = `button button-${buttonType}`;

  return <button className={className}>{children}</button>;
}
