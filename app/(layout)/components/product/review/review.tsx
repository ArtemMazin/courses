import { Card, Ptag, Rating } from '@/components';
import * as React from 'react';
import styles from './review.module.css';
import { ProductModel } from '@/interfaces/product.interface';
import User from '@/public/User.svg';
import cn from 'classnames';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export interface IReviewProps {
  product: ProductModel;
  isReviewOpen: boolean;
}

export function Review({ product, isReviewOpen }: IReviewProps) {
  return (
    <Card
      color='blue'
      className={cn(styles.container, { [styles.open]: isReviewOpen })}>
      <ul className={styles.reviews}>
        {product.reviews.map((review) => (
          <li key={review._id}>
            <div className={styles.header}>
              <div className={styles.header_left}>
                <User />
                <Ptag
                  size='s'
                  className={styles.name}>
                  {review.name + ':'}
                </Ptag>
                <Ptag size='s'>{review.title}</Ptag>
              </div>
              <div className={styles.header_right}>
                <Ptag
                  size='s'
                  className={styles.date}>
                  {format(new Date(review.createdAt), 'dd MMMM yyyy', { locale: ru })}
                </Ptag>
                <div className={styles.rating}>
                  <Rating rating={review.rating} />
                </div>
              </div>
            </div>

            <Ptag
              size='s'
              className={styles.description}>
              {review.description}
            </Ptag>
          </li>
        ))}
      </ul>
    </Card>
  );
}
