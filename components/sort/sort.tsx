'use client';

import * as React from 'react';
import cn from 'classnames';
import styles from './sort.module.css';
import SortIcon from '@/public/Sort.svg';
import { SortType } from '@/interfaces/page.interface';

export interface ISortProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sort: SortType;
  setSort: (sort: SortType) => void;
}

export function Sort({ sort, setSort, className, ...props }: ISortProps) {
  return (
    <div
      className={cn(styles.sort, className)}
      {...props}>
      <span
        onClick={() => setSort(SortType.Rating)}
        className={cn(styles.sortItem, { [styles.active]: sort === SortType.Rating })}>
        <SortIcon className={styles.icon} />
        По рейтингу
      </span>
      <span
        onClick={() => setSort(SortType.Price)}
        className={cn(styles.sortItem, { [styles.active]: sort === SortType.Price })}>
        <SortIcon className={styles.icon} />
        По цене
      </span>
    </div>
  );
}
