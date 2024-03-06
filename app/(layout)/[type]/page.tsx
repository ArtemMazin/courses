import { fetchMenu } from '@/api/menu';
import * as React from 'react';
import { firstLevelMenu } from '../components/menu/utils/first-level-menu';

export interface ICoursesPageProps {
  params: {
    type: string;
  };
}

export function generateStaticParams() {
  return firstLevelMenu.map((m) => ({ type: m.route }));
}

export default function CoursesPage({ params }: ICoursesPageProps) {
  return <div>{params.type + ' first-level'}</div>;
}
