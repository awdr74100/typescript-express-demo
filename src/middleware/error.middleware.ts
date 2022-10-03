import { Request, Response, NextFunction } from 'express';

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.status(500).send({ message: err.message });
};
