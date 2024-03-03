import * as React from 'react';
import { Menu } from '../components/menu/menu';
import { fetchMenu } from '@/api/menu';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { MenuItem } from '@/interfaces/menu.interface';
import { firstLevelMenu } from '../components/menu/utils/first-level-menu';

export interface ISidebarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export async function Sidebar({ className }: ISidebarProps) {
  const initialMenu: Map<TopLevelCategory, MenuItem[]> = new Map();

  firstLevelMenu.forEach(async (item) => {
    const items = await fetchMenu(item.id);
    initialMenu.set(item.id, items);
  });

  return (
    <div className={className}>
      <Menu initialMenu={initialMenu} />
    </div>
  );
}
