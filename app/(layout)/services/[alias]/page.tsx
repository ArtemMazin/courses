import { fetchMenu } from '@/api/menu';
import { fetchPages } from '@/api/page';
import * as React from 'react';
import { firstLevelMenu } from '../../components/menu/utils/first-level-menu';
import { MenuItem } from '@/interfaces/menu.interface';

export interface IServicesPageProps {
  params: {
    alias: string;
  };
}

export async function generateStaticParams(): Promise<{ alias: string }[]> {
  const menu = await fetchMenu(1);
  if (!menu) {
    return [];
  }

  return menu.flatMap((item) =>
    item.pages.map((page) => ({
      alias: page.alias,
    }))
  );
}

export default async function ServicesPage({ params }: IServicesPageProps) {
  const page = await fetchPages(params.alias);

  if (!page) {
    return <div>Page not found</div>;
  }
  return <div>{page.title}</div>;
}
