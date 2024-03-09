import * as React from 'react';
import { Card } from '../card/card';
import styles from './hh-data.module.css';
import { HhData as HhDataProps } from '@/interfaces/page.interface';
import Star from '@/public/Star.svg';

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
          <div className={styles.salary_value}>{juniorSalary}</div>
          <div className={styles.stars}>
            <Star className={styles.filled} />
            <Star />
            <Star />
          </div>
        </div>
        <div>
          <span className={styles.title}>Средний</span>
          <div className={styles.salary_value}>{middleSalary}</div>
          <div className={styles.stars}>
            <Star className={styles.filled} />
            <Star className={styles.filled} />
            <Star />
          </div>
        </div>
        <div>
          <span className={styles.title}>Профессионал</span>
          <div className={styles.salary_value}>{seniorSalary}</div>
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
