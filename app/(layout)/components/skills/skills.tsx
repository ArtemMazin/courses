import { Htag, Tag } from '@/components';
import { TopPageModel } from '@/interfaces/page.interface';
import styles from './skills.module.css';
import * as React from 'react';

export interface ISkillsProps {
  page: TopPageModel;
}

export function Skills({ page }: ISkillsProps) {
  return (
    <>
      <Htag
        tag='h2'
        className={styles.title}>
        Получаемые навыки
      </Htag>
      {page.tags.map((tag) => (
        <Tag
          key={tag}
          color='primary'
          size='medium'>
          {tag}
        </Tag>
      ))}
    </>
  );
}
