import { fetchMenu } from '@/api/menu';
import { fetchPages } from '@/api/page';
import * as React from 'react';
import { firstLevelMenu } from '../../components/menu/utils/first-level-menu';
import Sort from '@/public/Sort.svg';
import { fetchProduct } from '@/api/product';
import { Htag, Tag } from '@/components';
import styles from './page.module.css';

export interface ICoursesPageProps {
  params: {
    alias: string;
    type: string;
  };
}

export async function generateStaticParams() {
  interface Path {
    type: string;
    alias: string;
  }

  let path: Path[] = [];

  for (const m of firstLevelMenu) {
    const menu = await fetchMenu(m.id);
    path = [
      ...path,
      ...menu.flatMap((item) =>
        item.pages.map((page) => ({
          type: m.route,
          alias: page.alias,
        }))
      ),
    ];
  }

  return path.map((p) => ({
    type: p.type,
    alias: p.alias,
  }));
}

export default async function CoursesPage({ params }: ICoursesPageProps) {
  const page = await fetchPages(params.alias);
  if (!page) {
    return <div>Page not found</div>;
  }

  const products = await fetchProduct(page.category);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Htag tag='h1'>{page.title}</Htag>
          {products && <Tag color='grey'>{products.length}</Tag>}
        </div>
        <div className={styles.sort_container}>
          <Sort />
          <div className={styles.sort}>
            <span>По рейтингу</span>
            <span>По цене</span>
          </div>
        </div>
      </div>
    </div>
  );
}
