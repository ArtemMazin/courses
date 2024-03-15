import * as React from 'react';
import styles from './product.module.css';
import { Card, Htag, Ptag, Rating, Tag } from '@/components';
import { ProductModel } from '@/interfaces/product.interface';
import Image from 'next/image';
import { priceRu } from '@/helpers/helpers';

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
        <div className={styles.header_right}>
          <div>
            <span className={styles.price}>{priceRu(product.price)}</span>
            <Tag
              color='green'
              size='small'
              className={styles.discount}>
              {'- ' + priceRu(product.oldPrice - product.price)}
            </Tag>
          </div>

          <div className={styles.credit}>
            {priceRu(product.credit)}
            <span>/мес</span>
          </div>
          <div className={styles.rating}>
            <Rating rating={product.initialRating} />
          </div>
          <Ptag size='s'>цена</Ptag>
          <Ptag size='s'>в кредит</Ptag>
          <Ptag size='s'>{product.reviewCount + ' отзывов'}</Ptag>
          <div></div>
        </div>
      </div>
      <Ptag className={styles.description}>{product.description}</Ptag>
      <div className={styles.characteristics_container}>
        <ul className={styles.characteristics_left}>
          {product.characteristics.map((item) => {
            return (
              <li
                key={item.name}
                className={styles.characteristic}>
                <Ptag>{item.name}</Ptag>
                <div></div>
                <Ptag>{item.value}</Ptag>
              </li>
            );
          })}
        </ul>
        <div className={styles.characteristics_right}>
          <div className={styles.advantages}>
            <span>Преимущества</span>
            <Ptag>{product.advantages}</Ptag>
          </div>
          <div className={styles.disadvantages}>
            <span>Недостатки</span>
            <Ptag>{product.disadvantages}</Ptag>
          </div>
        </div>
      </div>

      <div></div>
    </Card>
  );
}
