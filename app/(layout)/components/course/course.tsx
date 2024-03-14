'use client';

import { Htag, Tag } from '@/components';
import { sortReducer } from '@/app/(layout)/components/course/sort.reducer';
import { SortType, TopPageModel } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';
import styles from './course.module.css';
import * as React from 'react';
import { SortButton } from '@/components/sort-button/sort-button';

export interface ICourseComponentProps {
  products: ProductModel[];
  page: TopPageModel;
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
        <SortButton
          sort={sort}
          setSort={setSort}
        />
      </div>
      <div>
        {sortedProducts?.map((product) => (
          <div key={product._id}>
            <span>{product.title}</span> <span>{product.price}</span> <span>{product.initialRating}</span>
          </div>
        ))}
      </div>
    </>
  );
}
