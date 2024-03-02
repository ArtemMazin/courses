'use client';

import * as React from 'react';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import Link from 'next/link';
import { firstLevelMenu } from './utils/first-level-menu';

const buildFirstLevelMenu = (initialMenu: MenuItem[], firstCategory: TopLevelCategory) => {
  return (
    <>
      {firstLevelMenu.map((firstLevelMenuItem) => (
        <div key={firstLevelMenuItem.id}>
          <Link href={`/${firstLevelMenuItem.route}`}>
            {firstLevelMenuItem.icon}
            <span>{firstLevelMenuItem.name}</span>
          </Link>
          {firstLevelMenuItem.id === firstCategory && buildSecoundLevelMenu(initialMenu, firstLevelMenuItem)}
        </div>
      ))}
    </>
  );
};

const buildSecoundLevelMenu = (initialMenu: MenuItem[], firstLevelMenuItem: FirstLevelMenuItem) => {
  return (
    <ul>
      {initialMenu.map((secondLevelMenuItem) => (
        <li key={secondLevelMenuItem._id.secondCategory}>
          <div>{secondLevelMenuItem._id.secondCategory}</div>
          <div>{buildThirdLevelMenu(secondLevelMenuItem.pages, firstLevelMenuItem.route)}</div>
        </li>
      ))}
    </ul>
  );
};

const buildThirdLevelMenu = (pages: PageItem[], route: string) => {
  return pages.map((page) => (
    <Link
      href={`/${route}/${page.alias}`}
      key={page._id}>
      {page.category}
    </Link>
  ));
};

export function Menu({ initialMenu }: { initialMenu: MenuItem[] }) {
  const [firstCategory, setFirstCategory] = React.useState(TopLevelCategory.Courses);

  return <div>{buildFirstLevelMenu(initialMenu, firstCategory)}</div>;
}
