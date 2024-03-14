import * as React from 'react';
import { Menu } from '../components/menu/menu';
import { fetchMenu } from '@/api/menu';
import { MenuItem } from '@/interfaces/menu.interface';
import styles from './sidebar.module.css';
import Logo from '@/public/Logo.svg';
import Link from 'next/link';
import { Search } from '@/components';
import { firstLevelMenu } from '@/helpers/helpers';

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
      <Link
        href='/'
        className={styles.logo}>
        <Logo />
      </Link>

      <Search />

      <Menu initialMenu={initialMenu} />
    </div>
  );
}
