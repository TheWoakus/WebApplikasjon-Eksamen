// Imports
import express from 'express';
import 'dotenv/config.js';
import morgan from 'morgan';
import cors from 'cors';
import { PORT } from './constants/index.js';
import pollsRoutes from './routes/poll.js';
import usersRoutes from './routes/user.js';

// Constants
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(`${process.env.BASEURL}/polls`, pollsRoutes);
app.use(`${process.env.BASEURL}/users`, usersRoutes);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.json({ success: true, data: {} });
});

// Server start
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  )
);
