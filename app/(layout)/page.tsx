import * as React from 'react';
import { Button, Rating, Tag } from '@/components';
import styles from './page.module.css';

export default async function Home() {
  return (
    <main className={styles.main}>
      <Button appearance='primary'>primary</Button>
      <Button appearance='default'>default</Button>
      <Rating
        rating={2}
        isEditable
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
