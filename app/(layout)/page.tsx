'use client';

import * as React from 'react';
import { Button, Rating, Tag } from '@/components';
import styles from './page.module.css';

export default function Home() {
  const [rating, setRating] = React.useState(3);
  return (
    <main className={styles.main}>
      <Button appearance='primary'>primary</Button>
      <Button appearance='default'>default</Button>
      <Rating
        rating={rating}
        isEditable
        setRating={setRating}
      />
      <Tag>test</Tag>
      <Tag
        size='small'
        color='green'>
        test
      </Tag>
      <Tag
        size='medium'
        color='grey'>
        test
      </Tag>
      <Tag color='primary'>test</Tag>
      <Tag color='red'>test</Tag>
    </main>
  );
}
