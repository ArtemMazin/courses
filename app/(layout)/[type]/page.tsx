import { firstLevelMenu } from '@/helpers/helpers';
import * as React from 'react';

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
