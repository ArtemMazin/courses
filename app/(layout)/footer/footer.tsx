import * as React from 'react';

export interface IFooterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export function Footer({ className }: IFooterProps) {
  return <footer className={className}>Footer</footer>;
}
