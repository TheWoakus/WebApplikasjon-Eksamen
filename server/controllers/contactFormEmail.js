import { contactFormEmailService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const contactFormEmail = await pollService.getPollById(req.params.id);
  if (!contactFormEmail) {
    return next(
      new ErrorHandler(`Can't find the contactFormEmail with id: ${req.params.id}`, 404)
    );
  }
  res.status(200).json(contactFormEmail);
});

export const list = catchAsyncErrors(async (req, res) => {
  const result = await pollService.listPolls();
  res.status(200).json(result);
});

export const create = catchAsyncErrors(async (req, res) => {
  const contactFormEmail = await pollService.createPoll(req.body);
  res.status(201).json(contactFormEmail);
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let contactFormEmail = await pollService.getPollById(req.params.id);
  if (!contactFormEmail) {
    return next(
      new ErrorHandler(`Can't find the contactFormEmail with id: ${req.params.id}`, 404)
    );
  }
  contactFormEmail = await pollService.updatePoll(req.params.id, req.body);
  res.status(200).json(contactFormEmail);
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let contactFormEmail = await pollService.getPollById(req.params.id);
  if (!contactFormEmail) {
    return next(
      new ErrorHandler(`Can't find the contactFormEmail with id: ${req.params.id}`, 404)
    );
  }
  contactFormEmail = await pollService.removePoll(req.params.id);
  res.status(204).json({});
});
