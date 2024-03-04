import * as React from 'react';
import { Menu } from '../components/menu/menu';
import { fetchMenu } from '@/api/menu';
import { MenuItem } from '@/interfaces/menu.interface';

export interface ISidebarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export async function Sidebar({ className }: ISidebarProps) {
  const coursesMenu = await fetchMenu(0);
  const servicesMenu = await fetchMenu(1);
  const booksMenu = await fetchMenu(2);
  const productsMenu = await fetchMenu(3);
  const initialMenu: readonly MenuItem[][] = [coursesMenu, servicesMenu, booksMenu, productsMenu];

  if (!coursesMenu || !servicesMenu || !booksMenu || !productsMenu) {
    return null;
  }

  return (
    <div className={className}>
      <Menu initialMenu={initialMenu} />
    </div>
  );
}
