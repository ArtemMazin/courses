import { Card, Ptag, Rating } from '@/components';
import * as React from 'react';
import styles from './review.module.css';
import { ProductModel } from '@/interfaces/product.interface';
import User from '@/public/User.svg';
import cn from 'classnames';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Form } from './form/form';

export interface IReviewProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel;
  isReviewOpen: boolean;
}

export const Review = React.forwardRef(
  ({ product, isReviewOpen }: IReviewProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const [success, setSuccess] = React.useState(false);
    const [fail, setFail] = React.useState(false);

    return (
      <Card
        color='blue'
        className={cn(styles.container, { [styles.open]: isReviewOpen })}
        ref={ref}>
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
        <Form
          productId={product._id}
          setSuccess={setSuccess}
          setFail={setFail}
        />
        {success && (
          <div className={styles.success_container}>
            <Ptag
              size='s'
              className={styles.review_success}>
              Ваш отзыв успешно отправлен
            </Ptag>
          </div>
        )}

        {fail && (
          <div className={styles.fail_container}>
            <Ptag
              size='s'
              className={styles.review_fail}>
              Что-то пошло не так. Пожалуйста, попробуйте еще раз.
            </Ptag>
          </div>
        )}
      </Card>
    );
  }
);

Review.displayName = 'Review';
