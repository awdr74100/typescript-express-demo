import { RequestHandler } from 'express';
import { Product, IProduct } from '../models/product.model';

export const find: RequestHandler = async (req, res, next) => {
  const products = await Product.find({}).lean();

  return res.send({ products });
};

export const insertOne: RequestHandler<{}, {}, IProduct> = async (
  req,
  res,
  next,
) => {
  const { title, price } = req.body;

  await Product.create({ title, price });

  return res.status(201).send({ message: 'Created the product.' });
};

export const findOne: RequestHandler<{ id: string }> = async (
  req,
  res,
  next,
) => {
  const { id } = req.params;

  const product = await Product.findOne({ _id: id }).lean();

  if (!product) return res.send({ message: 'Product not found' });

  return res.send({ product });
};

export const updateOne: RequestHandler<
  { id: string },
  {},
  Partial<IProduct>
> = async (req, res, next) => {
  const { id } = req.params;
  const { title, price } = req.body;

  await Product.updateOne({ _id: id }, { title, price }).lean();

  return res.status(200).send({ message: 'Updated the product' });
};

export const deleteOne: RequestHandler<{ id: string }> = async (
  req,
  res,
  next,
) => {
  const { id } = req.params;

  await Product.deleteOne({ _id: id }).lean();

  return res.send({ message: 'Deleted the product' });
};
