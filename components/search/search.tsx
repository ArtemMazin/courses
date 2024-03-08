'use client';

import * as React from 'react';
import styles from './search.module.css';
import cn from 'classnames';
import { Input } from '../input/input';
import { Button } from '..';
import SearchIcon from '@/public/Search.svg';
import { useRouter } from 'next/navigation';

export interface ISearchProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export function Search({ className, ...props }: ISearchProps) {
  const [search, setSearch] = React.useState<string>('');

  const router = useRouter();

  const goToSearch = () => {
    router.push('/search?query=' + search);
  };

  return (
    <div
      className={cn(className, styles.search)}
      {...props}>
      <Input
        placeholder='Поиск...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.input}
      />
      <Button
        appearance='primary'
        className={styles.button}
        onClick={goToSearch}>
        <SearchIcon />
      </Button>
    </div>
  );
}
