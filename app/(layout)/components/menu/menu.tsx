'use client';

import * as React from 'react';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { firstLevelMenu } from './utils/first-level-menu';
import Link from 'next/link';
import styles from './menu.module.css';
import cn from 'classnames';

export function Menu({ initialMenu }: { initialMenu: readonly MenuItem[][] }) {
  const [firstCategory, setFirstCategory] = React.useState(TopLevelCategory.Courses);
  const [secondCategory, setSecondCategory] = React.useState(initialMenu[0][0].pages[0].alias);
  const [thirdLevelMenuOpen, setThirdLevelMenuOpen] = React.useState(false);
  const [secondLevelMenuOpen, setSecondLevelMenuOpen] = React.useState(true);
  const [thirdCategory, setThirdCategory] = React.useState(initialMenu[0][0].pages[0].alias);

  const openThirdLevelMenu = (activeCategory: string, pages: PageItem[]) => {
    setThirdLevelMenuOpen(activeCategory === secondCategory ? !thirdLevelMenuOpen : true);
    setSecondCategory(activeCategory);
    setThirdCategory(pages[0].alias);
  };

  const openSecondLevelMenu = (activeCategory: TopLevelCategory) => {
    setSecondLevelMenuOpen(activeCategory === firstCategory ? !secondLevelMenuOpen : true);
    setFirstCategory(activeCategory);
  };

  const buildFirstLevelMenu = (
    initialMenu: readonly MenuItem[][],
    firstCategory: TopLevelCategory,
    secondCategory: string,
    thirdCategory: string
  ) => {
    return (
      <ul className={styles.firstLevelMenu}>
        {firstLevelMenu.map((firstLevelMenuItem) => (
          <li key={firstLevelMenuItem.id}>
            {/* <Link
              href={`/${firstLevelMenuItem.route}`}
              className={cn(styles.firstLevelMenuItem, {
                [styles.firstLevelMenuItemActive]: firstLevelMenuItem.id === firstCategory,
              })}>
              {firstLevelMenuItem.icon}
              <span onClick={() => openSecondLevelMenu(firstLevelMenuItem.id)}>{firstLevelMenuItem.name}</span>
            </Link> */}

            <div
              className={cn(styles.firstLevelMenuItem, {
                [styles.firstLevelMenuItemActive]: firstLevelMenuItem.id === firstCategory,
              })}>
              {firstLevelMenuItem.icon}
              <span onClick={() => openSecondLevelMenu(firstLevelMenuItem.id)}>{firstLevelMenuItem.name}</span>
            </div>

            {buildSecondLevelMenu(initialMenu, firstLevelMenuItem, secondCategory, thirdCategory)}
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevelMenu = (
    initialMenu: readonly MenuItem[][],
    firstLevelMenuItem: FirstLevelMenuItem,
    secondCategory: string,
    thirdCategory: string
  ) => {
    return (
      <ul
        className={cn(styles.secondLevelMenu, {
          [styles.secondLevelMenuOpen]: firstLevelMenuItem.id === firstCategory && secondLevelMenuOpen,
        })}>
        {initialMenu.map(
          (secondLevelMenuItem, i) =>
            i === firstLevelMenuItem.id &&
            secondLevelMenuItem.map((secondLevelMenuItem) => (
              <li
                key={secondLevelMenuItem._id.secondCategory}
                className={cn(styles.secondLevelMenuItem, {
                  [styles.secondLevelMenuItemActive]: secondLevelMenuItem._id.secondCategory === secondCategory,
                })}>
                <span
                  onClick={() => openThirdLevelMenu(secondLevelMenuItem._id.secondCategory, secondLevelMenuItem.pages)}>
                  {secondLevelMenuItem._id.secondCategory}
                </span>

                {buildThirdLevelMenu(secondLevelMenuItem, firstLevelMenuItem.route, thirdCategory)}
              </li>
            ))
        )}
      </ul>
    );
  };

  const buildThirdLevelMenu = (secondLevelMenuItem: MenuItem, route: string, thirdCategory: string) => {
    return (
      <ul
        className={cn(styles.thirdLevelMenu, {
          [styles.thirdLevelMenuOpen]: thirdLevelMenuOpen && secondLevelMenuItem._id.secondCategory === secondCategory,
        })}>
        {secondLevelMenuItem.pages.map((page) => (
          <li
            key={page._id}
            className={cn(styles.thirdLevelMenuItem, {
              [styles.thirdLevelMenuItemActive]: page.alias === thirdCategory,
            })}
            onClick={() => {
              setThirdCategory(page.alias);
            }}>
            <Link href={`/${route}/${page.alias}`}>{page.category}</Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.menu}>{buildFirstLevelMenu(initialMenu, firstCategory, secondCategory, thirdCategory)}</div>
  );
}
