import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import 'dotenv/config.js';
import { SERVER_PORT, CLIENT_PORT } from './constants/index.js';
import connectDatabase from './config/db.js';
import user from './routes/user.js';
import article from './routes/article.js';
import office from './routes/office.js';
import category from './routes/category.js';
import request from './routes/request.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(
  cors({
    origin: `http://localhost:${CLIENT_PORT}`,
    allowedHeaders: ['Content-Type'],
  })
);
app.use(express.json());
app.use(`${process.env.BASEURL}/register`, user);
app.use(`${process.env.BASEURL}/nyartikel`, article);
app.use(`${process.env.BASEURL}/fagartikler`, article);
app.use(`${process.env.BASEURL}/kontorer`, office);
app.use(`${process.env.BASEURL}/hendvendelser`, request);
app.use(`${process.env.BASEURL}/kategorier`, category);

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
