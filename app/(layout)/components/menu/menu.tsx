'use client';

import * as React from 'react';
import { FirstLevelMenuItem, MenuItem } from '@/interfaces/menu.interface';
import { firstLevelMenu } from './utils/first-level-menu';
import Link from 'next/link';
import styles from './menu.module.css';
import cn from 'classnames';
import { usePathname } from 'next/navigation';

export function Menu({ initialMenu }: { initialMenu: readonly MenuItem[][] }) {
  const [secondCategory, setSecondCategory] = React.useState(initialMenu[0][0].pages[0].alias);
  const [thirdLevelMenuOpen, setThirdLevelMenuOpen] = React.useState(false);

  const path = usePathname();

  const openThirdLevelMenu = (activeCategory: string) => {
    setThirdLevelMenuOpen(activeCategory === secondCategory ? !thirdLevelMenuOpen : true);
    setSecondCategory(activeCategory);
  };

  const buildFirstLevelMenu = (initialMenu: readonly MenuItem[][]) => {
    return (
      <ul className={styles.firstLevelMenu}>
        {firstLevelMenu.map((firstLevelMenuItem) => (
          <li key={firstLevelMenuItem.id}>
            <Link
              href={`/${firstLevelMenuItem.route}`}
              className={cn(styles.firstLevelMenuItem, {
                [styles.firstLevelMenuItemActive]: path.includes(firstLevelMenuItem.route),
              })}>
              {firstLevelMenuItem.icon}
              <span>{firstLevelMenuItem.name}</span>
            </Link>

            {buildSecondLevelMenu(initialMenu, firstLevelMenuItem)}
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevelMenu = (initialMenu: readonly MenuItem[][], firstLevelMenuItem: FirstLevelMenuItem) => {
    return (
      <ul
        className={cn(styles.secondLevelMenu, {
          [styles.secondLevelMenuOpen]: path.includes(firstLevelMenuItem.route),
        })}>
        {initialMenu.map(
          (secondLevelMenuItem, i) =>
            i === firstLevelMenuItem.id &&
            secondLevelMenuItem.map((secondLevelMenuItem) => (
              <li
                key={secondLevelMenuItem._id.secondCategory}
                className={cn(styles.secondLevelMenuItem, {
                  [styles.secondLevelMenuItemActive]: path.includes(secondLevelMenuItem._id.secondCategory),
                })}>
                <span onClick={() => openThirdLevelMenu(secondLevelMenuItem._id.secondCategory)}>
                  {secondLevelMenuItem._id.secondCategory}
                </span>

                {buildThirdLevelMenu(secondLevelMenuItem, firstLevelMenuItem.route)}
              </li>
            ))
        )}
      </ul>
    );
  };

  const buildThirdLevelMenu = (secondLevelMenuItem: MenuItem, route: string) => {
    return (
      <ul
        className={cn(styles.thirdLevelMenu, {
          [styles.thirdLevelMenuOpen]: thirdLevelMenuOpen && secondLevelMenuItem._id.secondCategory === secondCategory,
        })}>
        {secondLevelMenuItem.pages.map((page) => (
          <li
            key={page._id}
            className={cn(styles.thirdLevelMenuItem, {
              [styles.thirdLevelMenuItemActive]: path.includes(`${route}/${page.alias}`),
            })}>
            <Link href={`/${route}/${page.alias}`}>{page.category}</Link>
          </li>
        ))}
      </ul>
    );
  };

  return <div className={styles.menu}>{buildFirstLevelMenu(initialMenu)}</div>;
}