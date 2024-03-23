export interface ProductCharacteristic {
  value: string;
  name: string;
}

export type InputsForm = Omit<ReviewModel, '_id' | 'createdAt'>;

export type ReviewModel = Pick<ProductModel, '_id' | 'title' | 'description' | 'createdAt'> & {
  name: string;
  rating: number;
};

export interface ProductModel {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  description: string;
  characteristics: ProductCharacteristic[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  image: string;
  initialRating: number;
  reviews: ReviewModel[];
  reviewCount: number;
  reviewAvg?: number;
  advantages?: string;
  disadvantages?: string;
}
