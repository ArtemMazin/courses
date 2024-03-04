import * as React from 'react';
import { Menu } from '../components/menu/menu';
import { fetchMenu } from '@/api/menu';
import { MenuItem } from '@/interfaces/menu.interface';
import { firstLevelMenu } from '../components/menu/utils/first-level-menu';

export interface ISidebarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export async function Sidebar({ className }: ISidebarProps) {
  const initialMenu: MenuItem[][] = [];
  for (const firstLevelMenuItem of firstLevelMenu) {
    const secondLevelMenu = await fetchMenu(firstLevelMenuItem.id);
    if (secondLevelMenu) {
      initialMenu.push(secondLevelMenu);
    }
  }

  return (
    <div className={className}>
      <Menu initialMenu={initialMenu} />
    </div>
  );
}
