import mongoose from 'mongoose';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';
import errorMiddleware from './middleware/error.middleware';

const run = async () => {
  await mongoose.connect(
    'mongodb://localhost:27017/TypeScriptCourseExpressDemoDatabase',
  );

  const app = express();
  const port = process.env.PORT || 3000;

  app.use(morgan('dev'));
  app.use(cors({ credentials: true, origin: true }));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/api', routes);

  app.use(errorMiddleware);

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

run().catch((err) => console.log(err));
