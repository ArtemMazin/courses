import { API } from '../app/api';
import { InputsForm } from '@/interfaces/product.interface';

export async function fetchReview(productId: string, formData: InputsForm): Promise<{ message: string }> {
  const response = await fetch(API.review.createDemo, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...formData,
      productId,
    }),
  });

  return response.json();
}
