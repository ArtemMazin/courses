import { fetchMenu } from '@/api/menu';
import * as React from 'react';

export interface ICoursesPageProps {
  params: {
    type: string;
  };
}

export async function generateStaticParams(): Promise<{ type: string }[]> {
  const menu = await fetchMenu(0);

  if (!menu) {
    return [];
  }

  return menu.flatMap((item) =>
    item.pages.map((page) => ({
      type: page.alias,
    }))
  );
}

export default function CoursesPage({ params }: ICoursesPageProps) {
  return <div>{params.type + ' first-level'}</div>;
}
