import { officeService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const office = await officeService.getOfficeById(req.params.id);
  if (!office) {
    return next(
      new ErrorHandler(`Can't find the office with id: ${req.params.id}`, 404)
    );
  }
  res.status(200).json(office);
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await officeService.listOffices();
  res.status(200).json(result);
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const office = await officeService.createOffice(req.body);
  res.status(201).json(office);
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let office = await officeService.getOfficeById(req.params.id);
  if (!office) {
    return next(
      new ErrorHandler(`Can't find the office with id: ${req.params.id}`, 404)
    );
  }
  office = await officeService.updateOffice(req.params.id, req.body);
  res.status(200).json(office);
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let office = await officeService.getOfficeById(req.params.id);
  if (!office) {
    return next(
      new ErrorHandler(`Can't find the office with id: ${req.params.id}`, 404)
    );
  }
  office = await officeService.removeOffice(req.params.id);
  res.status(204).json({});
});
