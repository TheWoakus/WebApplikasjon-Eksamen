import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import 'dotenv/config.js';
import { SERVER_PORT, CLIENT_PORT } from './constants/index.js';
import connectDatabase from './config/db.js';

import article from './routes/article.js';
import office from './routes/office.js';
import category from './routes/category.js';
import request from './routes/request.js';
import user from './routes/user.js';
import auth from './routes/auth.js';
import image from './routes/image.js';
import stats from './routes/stats.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use(
  cors({
    origin: `http://localhost:${CLIENT_PORT}`,
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(`${process.env.BASEURL}/nyartikkel`, article);
app.use(`${process.env.BASEURL}/fagartikler`, article);
app.use(`${process.env.BASEURL}/kontorer`, office);
app.use(`${process.env.BASEURL}/kontakt`, request);
app.use(`${process.env.BASEURL}/kategorier`, category);
app.use(`${process.env.BASEURL}/users`, user);
app.use(`${process.env.BASEURL}/`, auth);
app.use(`${process.env.BASEURL}/`, image);
app.use(`${process.env.BASEURL}/`, stats);

connectDatabase();
const server = app.listen(
  SERVER_PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${SERVER_PORT}`
  )
);

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down server due to Unhandled Promise Rejection');
  server.close(() => {
    process.exit(1);
  });
});
