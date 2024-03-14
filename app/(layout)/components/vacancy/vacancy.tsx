import * as React from 'react';
import styles from './vacancy.module.css';
import { TopPageModel } from '@/interfaces/page.interface';
import { HhData, Htag, Tag } from '@/components';

export interface IHHProps {
  page: TopPageModel;
}

export function Vacancy({ page }: IHHProps) {
  return (
    <>
      <div className={styles.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Tag
          color='red'
          size='medium'>
          hh.ru
        </Tag>
      </div>
      {page.hh && <HhData {...page.hh} />}
    </>
  );
}
