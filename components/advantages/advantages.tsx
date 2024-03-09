import * as React from 'react';
import styles from './advantages.module.css';
import { TopPageAdvantage } from '@/interfaces/page.interface';
import Check from '@/public/Check.svg';
import { Htag, Ptag } from '..';

export interface IAdvantagesProps {
  advantages: TopPageAdvantage[];
}

export function Advantages({ advantages }: IAdvantagesProps) {
  return (
    <div className={styles.advantages}>
      {advantages.map((advantage) => (
        <div
          className={styles.advantage}
          key={advantage._id}>
          <Check />
          <Htag
            tag='h3'
            className={styles.advantage_title}>
            {advantage.title}
          </Htag>
          <div className={styles.advantage_divider}></div>
          <Ptag
            size='l'
            className={styles.advantage_description}>
            {advantage.description}
          </Ptag>
        </div>
      ))}
    </div>
  );
}
