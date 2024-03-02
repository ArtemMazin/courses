import * as React from 'react';

export interface ISidebarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export function Sidebar({ className }: ISidebarProps) {
  return <div className={className}>Sidebar</div>;
}
