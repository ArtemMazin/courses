import { MenuItem } from '@/interfaces/menu.interface';
import { API } from '../app/api';

export async function fetchMenu(firstCategory: number): Promise<MenuItem[]> {
  const response = await fetch(API.topPage.find, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstCategory,
    }),
  });

  return response.json();
}
