import { Schema, model } from 'mongoose';

export interface IProduct {
  title: string;
  price: number;
}

const productSchema = new Schema<IProduct>({
  title: {
    type: 'string',
    required: true,
  },
  price: {
    type: 'number',
    required: true,
  },
});

export const Product = model<IProduct>('Product', productSchema);
