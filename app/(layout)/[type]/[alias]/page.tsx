import { fetchMenu } from '@/api/menu';
import { fetchPages } from '@/api/page';
import * as React from 'react';
import { firstLevelMenu } from '../../components/menu/utils/first-level-menu';
import { MenuItem } from '@/interfaces/menu.interface';
import { fetchProduct } from '@/api/product';

export interface ICoursesPageProps {
  params: {
    alias: string;
  };
}

export async function generateStaticParams(): Promise<{ alias: string }[]> {
  const menu = await fetchMenu(0);

  if (!menu) {
    return [];
  }

  return menu.flatMap((item) =>
    item.pages.map((page) => ({
      alias: page.alias,
    }))
  );
}

export default async function CoursesPage({ params }: ICoursesPageProps) {
  const page = await fetchPages(params.alias);
  if (!page) {
    return <div>Page not found</div>;
  }

  const products = await fetchProduct(page.category);

  return <div>{page.title}</div>;
}
