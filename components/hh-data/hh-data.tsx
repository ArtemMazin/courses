import * as React from 'react';

import styles from './hh-data.module.css';
import { HhData as HhDataProps } from '@/interfaces/page.interface';
import Star from '@/public/Star.svg';
import { Card } from '..';
import { priceRu } from '@/helpers/helpers';

export interface IHhDataProps extends HhDataProps {
  count: number;
}

export function HhData({ count, juniorSalary, middleSalary, seniorSalary }: IHhDataProps) {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <span className={styles.title}>Всего вакансий</span>
        <div className={styles.count_value}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <span className={styles.title}>Начальный</span>
          <div className={styles.salary_value}>{priceRu(juniorSalary)}</div>
          <div className={styles.stars}>
            <Star className={styles.filled} />
            <Star />
            <Star />
          </div>
        </div>
        <div>
          <span className={styles.title}>Средний</span>
          <div className={styles.salary_value}>{priceRu(middleSalary)}</div>
          <div className={styles.stars}>
            <Star className={styles.filled} />
            <Star className={styles.filled} />
            <Star />
          </div>
        </div>
        <div>
          <span className={styles.title}>Профессионал</span>
          <div className={styles.salary_value}>{priceRu(seniorSalary)}</div>
          <div className={styles.stars}>
            <Star className={styles.filled} />
            <Star className={styles.filled} />
            <Star className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
}
