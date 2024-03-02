import * as React from 'react';
import { Menu } from '../components/menu/menu';
import { fetchMenu } from '@/api/menu';

export interface ISidebarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export async function Sidebar({ className }: ISidebarProps) {
  const initialMenu = await fetchMenu(0);

  return (
    <div className={className}>
      <Menu initialMenu={initialMenu} />
    </div>
  );
}
