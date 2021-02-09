import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import 'dotenv/config.js';
import { SERVER_PORT, CLIENT_PORT } from './constants/index.js';
import connectDatabase from './config/db.js';

import user from './routes/user.js';
import artwork from './routes/artwork.js';
import category from './routes/category.js';
import image from './routes/image.js';

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


app.use(`${process.env.BASEURL}/registrer`, user);
app.use(`${process.env.BASEURL}/verk`, artwork);
app.use(`${process.env.BASEURL}/kategorier`, category);
app.use(`${process.env.BASEURL}/`, image);

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
