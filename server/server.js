import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import 'dotenv/config.js';
import { SERVER_PORT, CLIENT_PORT } from './constants/index.js';
import connectDatabase from './config/db.js';


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