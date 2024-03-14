import { fetchMenu } from '@/api/menu';
import { fetchPages } from '@/api/page';
import * as React from 'react';
import { fetchProduct } from '@/api/product';
import { Advantages } from '@/components';
import { firstLevelMenu } from '@/helpers/helpers';
import { Courses } from '../../components/courses/courses';
import { Vacancy } from '../../components/vacancy/vacancy';
import { Skills } from '../../components/skills/skills';
import { SeoText } from '../../components/seo-text/seo-text';

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
    <>
      {products && (
        <Courses
          products={products}
          page={page}
        />
      )}

      <Vacancy page={page} />

      {page.advantages && page.advantages.length > 0 && <Advantages advantages={page.advantages} />}

      {page.seoText && <SeoText page={page} />}

      {page.tags && <Skills page={page} />}
    </>
  );
}
