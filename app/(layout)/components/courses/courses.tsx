'use client';

import { Htag, SortButton, Tag } from '@/components';
import { sortReducer } from '@/app/(layout)/components/courses/sort.reducer';
import { SortType, TopPageModel } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';
import styles from './courses.module.css';
import * as React from 'react';
import { Product } from '../product/product';

export interface ICourseComponentProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products: ProductModel[];
  page: TopPageModel;
}

export function Courses({ products, page }: ICourseComponentProps) {
  const [{ products: sortedProducts, sort }, dispatch] = React.useReducer(sortReducer, {
    sort: SortType.Rating,
    products: products,
  });

  const setSort = (sort: SortType) => {
    dispatch({ type: sort });
  };

  React.useEffect(() => {
    setSort(SortType.Rating);
  }, []);

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
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
