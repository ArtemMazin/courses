import * as React from 'react';
import styles from './page.module.css';
import { redirect } from 'next/navigation';

export default async function Home() {
  redirect('/courses/financial-analytics');
  return <main className={styles.main}></main>;
}
