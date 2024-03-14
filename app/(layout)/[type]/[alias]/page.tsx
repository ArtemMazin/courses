import { fetchMenu } from '@/api/menu';
import { fetchPages } from '@/api/page';
import * as React from 'react';
import { fetchProduct } from '@/api/product';
import { Advantages, HhData, Htag, Tag } from '@/components';
import styles from './page.module.css';
import { firstLevelMenu } from '@/helpers/helpers';
import { Course } from '../../components/course/course';

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
      {products && (
        <Course
          products={products}
          page={page}
        />
      )}

      <div className={styles.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Tag
          color='red'
          size='medium'>
          hh.ru
        </Tag>
      </div>
      {page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag='h2'>Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo_text}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <Htag
        tag='h2'
        className={styles.skills_title}>
        Получаемые навыки
      </Htag>
      {page.tags &&
        page.tags.map((tag) => (
          <Tag
            key={tag}
            color='primary'
            size='medium'>
            {tag}
          </Tag>
        ))}
    </div>
  );
}
