import * as React from 'react';
import styles from './product.module.css';
import { Card, Htag, Ptag, Tag } from '@/components';
import { ProductModel } from '@/interfaces/product.interface';
import Image from 'next/image';

export interface IProductProps {
  product: ProductModel;
}

export function Product({ product }: IProductProps) {
  return (
    <Card className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header_left}>
          <Image
            src={product.image}
            alt={product.title}
            width={70}
            height={70}
          />
          <div className={styles.header_left_content}>
            <Htag
              tag='h2'
              className={styles.header_title}>
              {product.title}
            </Htag>

            <ul className={styles.header_tags}>
              {product.categories.map((tag) => (
                <li key={tag}>
                  <Tag size='small'>{tag}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div>{product.price}</div>
        </div>
      </div>
      <Ptag className={styles.description}>{product.description}</Ptag>
      <div></div>
      <div></div>
    </Card>
  );
}
