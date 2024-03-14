import * as React from 'react';
import styles from './seo-text.module.css';
import { TopPageModel } from '@/interfaces/page.interface';

export interface ISeoTextProps {
  page: TopPageModel;
}

export function SeoText({ page }: ISeoTextProps) {
  return (
    <div
      className={styles.text}
      dangerouslySetInnerHTML={{
        __html: page.seoText ?? '',
      }}
    />
  );
}
