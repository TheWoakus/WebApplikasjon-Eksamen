import { categoryService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const category = await categoryService.getCategoryById(req.params.id);
  if (!category) {
    return next(
      new ErrorHandler(`Can't find the category with id: ${req.params.id}`, 404)
    );
  }
  res.status(200).json(category);
});

export const list = catchAsyncErrors(async (req, res) => {
  const result = await categoryService.listCategories();
  res.status(200).json(result);
});

export const create = catchAsyncErrors(async (req, res) => {
  const category = await categoryService.createCategory(req.body);
  res.status(201).json(category);
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let category = await categoryService.getCategoryById(req.params.id);
  if (!category) {
    return next(
      new ErrorHandler(`Can't find the category with id: ${req.params.id}`, 404)
    );
  }
  category = await categoryService.updateCategory(req.params.id, req.body);
  res.status(200).json(category);
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let category = await categoryService.getCategoryById(req.params.id);
  if (!category) {
    return next(
      new ErrorHandler(`Can't find the category with id: ${req.params.id}`, 404)
    );
  }
  category = await categoryService.removeCategory(req.params.id);
  res.status(204).json({});
});
