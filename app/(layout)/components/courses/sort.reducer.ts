import { SortType } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';

export type SortAction = {
  type: SortType.Price | SortType.Rating;
};

export interface SortReducerState {
  sort: SortType;
  products: ProductModel[];
}

export const sortReducer = (state: SortReducerState, action: SortAction): SortReducerState => {
  switch (action.type) {
    case SortType.Price:
      return {
        products: state.products.sort((a, b) => a.price - b.price),
        sort: SortType.Price,
      };
    case SortType.Rating:
      return {
        products: state.products.sort((a, b) => b.initialRating - a.initialRating),
        sort: SortType.Rating,
      };
    default:
      return state;
  }
};
