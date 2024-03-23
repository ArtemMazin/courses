'use client';

import * as React from 'react';
import styles from './rating.module.css';
import Star from './star.svg';
import cn from 'classnames';
import { FieldError } from 'react-hook-form';
import { Ptag } from '..';

export interface IRatingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  error?: FieldError;
  setRating?: (rating: number) => void;
}

export const Rating = React.forwardRef(
  (
    { isEditable = false, rating, error, setRating, ...props }: IRatingProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>));

    React.useEffect(() => {
      constructRatingArray(rating);
    }, [rating]);

    const constructRatingArray = (currentRating: number) => {
      const updatedRatingArray = ratingArray.map((element, index) => {
        return (
          <span
            key={index}
            className={cn(styles.star, { [styles.filled]: index < currentRating, [styles.editable]: isEditable })}
            onMouseEnter={() => changeDisplayedRating(index + 1)}
            onMouseLeave={() => changeDisplayedRating(rating)}
            onClick={() => {
              onClick(index + 1);
            }}>
            <Star
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(e: React.KeyboardEvent<SVGElement>) => handleSpacebarKeydown(e, index + 1)}
            />
          </span>
        );
      });
      setRatingArray(updatedRatingArray);
    };

    const changeDisplayedRating = (newRating: number) => {
      if (!isEditable) return;
      constructRatingArray(newRating);
    };

    const onClick = (newRating: number) => {
      if (!isEditable || !setRating) return;
      setRating(newRating);
    };

    const handleSpacebarKeydown = (e: React.KeyboardEvent<SVGElement>, newRating: number) => {
      if (e.code !== 'Space' || !setRating) return;
      setRating(newRating);
    };

    return (
      <div
        ref={ref}
        {...props}
        className={cn(styles.rating_wrapper, { [styles.error]: error })}>
        {ratingArray.map((element, index) => {
          return <span key={index}>{element}</span>;
        })}
        {error && (
          <Ptag
            size='s'
            className={styles.error_message}>
            {error.message}
          </Ptag>
        )}
      </div>
    );
  }
);

Rating.displayName = 'Rating';
