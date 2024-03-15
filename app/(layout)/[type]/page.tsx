import { Htag } from '@/components';
import { firstLevelMenu } from '@/helpers/helpers';
import { redirect } from 'next/navigation';
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
  params.type === 'courses' && redirect('/courses/financial-analytics');
  params.type === 'services' && redirect('/services/bookmakers');
  return <Htag tag='h1'>{'Раздел ' + params.type + ' находится в разработке'}</Htag>;
}
