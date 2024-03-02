import * as React from 'react';

export interface IHeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export function Header({ className }: IHeaderProps) {
  return <header className={className}>Header</header>;
}
