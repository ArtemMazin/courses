'use client';

import { Htag, Sort, Tag } from '@/components';
import { sortReducer } from '@/components/sort/sort.reducer';
import { SortType } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';
import styles from './course.module.css';
import * as React from 'react';

export interface ICourseComponentProps {
  products: ProductModel[];
  page: any;
}

export function Course({ products, page }: ICourseComponentProps) {
  const [{ products: sortedProducts, sort }, dispatch] = React.useReducer(sortReducer, {
    sort: SortType.Price,
    products: products,
  });

  const setSort = (sort: SortType) => {
    dispatch({ type: sort });
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <Htag tag='h1'>{page.title}</Htag>
          {products && (
            <Tag
              color='grey'
              size='medium'>
              {products.length}
            </Tag>
          )}
        </div>
        <Sort
          sort={sort}
          setSort={setSort}
        />
      </div>
      <div>
        {sortedProducts?.map((product) => (
          <div key={product._id}>{product.title}</div>
        ))}
      </div>
    </>
  );
}
