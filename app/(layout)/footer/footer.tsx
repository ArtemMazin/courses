import Link from 'next/link';
import * as React from 'react';
import styles from './footer.module.css';
import cn from 'classnames';

export interface IFooterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export function Footer({ className }: IFooterProps) {
  return (
    <footer className={cn(styles.footer, className)}>
      <span>OwlTop © 2020 - 2024 Все права защищены</span>
      <ul className={styles.footer_links}>
        <li>
          <Link href={'/'}>Пользовательское соглашение</Link>
        </li>
        <li>
          <Link href={'/'}>Политика конфиденциальности</Link>
        </li>
      </ul>
    </footer>
  );
}
