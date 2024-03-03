import * as React from 'react';
import Logo from '/public/Logo.svg';

export interface IHeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export function Header({ className }: IHeaderProps) {
  return (
    <header className={className}>
      <Logo />
    </header>
  );
}
