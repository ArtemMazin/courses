import * as React from 'react';

export interface IHtagProps {
  tag: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
}

export function Htag({ tag, children }: IHtagProps) {
  switch (tag) {
    case 'h1':
      return <h1 className='h1'>{children}</h1>;

    case 'h2': {
      return <h2 className='h2'>{children}</h2>;
    }
    case 'h3': {
      return <h3 className='h3'>{children}</h3>;
    }

    default:
      return <>{children}</>;
  }
}
