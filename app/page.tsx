'use client';

import * as React from 'react';
import { Button, Rating } from '@/components';

export default function Home() {
  const [rating, setRating] = React.useState(3);
  return (
    <main>
      <Button appearance='primary'>primary</Button>
      <Button appearance='default'>default</Button>
      <Rating
        rating={rating}
        isEditable
        setRating={setRating}
      />
    </main>
  );
}
