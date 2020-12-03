import ErrorHandler from '../utils/errorHandler.js';

export default (err, _req, res) => {
	err.statusCode = err.statusCode || 500;

	if (process.env.NODE_ENV === 'development') {
		res.status(err.statusCode).json({
			success: false,
			error: err,
			message: err.message,
			stack: err.stack,
		});
	}

	if (process.env.NODE_ENV === 'production') {
		let error = { ...err };
		error.message = err.message;

		if (err.name === 'CastError') {
			const message = `Could not find what you were looking for. Invalid ${err.path}`;
			error = new ErrorHandler(message, 404);
		}

		if (err.name === 'ValidationError') {
			const message = Object.values(err.errors).map((value) => value.message);
			error = new ErrorHandler(message, 400);
		}

		if (err.code === 11000) {
			const message = `Duplicate of ${Object.keys(err.keyValue)}`;
			error = new ErrorHandler(message, 400);
		}

		res.status(error.statusCode).json({
			success: false,
			message: error.message || 'Internal Server Error',
		});
	}
};
