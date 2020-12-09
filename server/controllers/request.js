import { requestService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import { sendMail } from '../utils/sendEmail.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const request = await requestService.getRequestById(req.params.id);
  if (!request) {
    return next(
      new ErrorHandler(`Can't find the request with id: ${req.params.id}`, 404)
    );
  }
  res.status(200).json(request);
});

export const list = catchAsyncErrors(async (req, res) => {
  const result = await requestService.listRequests();
  res.status(200).json(result);
});

export const create = catchAsyncErrors(async (req, res) => {
  const request = await requestService.createRequest(req.body);
  try {
    await sendMail({
      email: request.email,
      subject: 'Takk for din henvendelse',
      message: `<h3>Hello, ${request.name}</h3><p>Du har nylig sendt oss en melding, her er hva du har skrevet til oss:</p><p>Emne: ${request.title}</br>Din melding: ${request.content}</p><p>Takk for din henvendelse, ha en super dag!</p><p>Mvh, Gruppe 1347</p>`,
    });
  } catch (error) {
    console.log(error);
  }
  res.status(201).json(request);
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let request = await requestService.getRequestById(req.params.id);
  if (!request) {
    return next(
      new ErrorHandler(`Can't find the request with id: ${req.params.id}`, 404)
    );
  }
  request = await requestService.updateRequest(req.params.id, req.body);
  res.status(200).json(request);
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let request = await requestService.getRequestById(req.params.id);
  if (!request) {
    return next(
      new ErrorHandler(`Can't find the request with id: ${req.params.id}`, 404)
    );
  }
  request = await requestService.removeRequest(req.params.id);
  res.status(204).json({});
});
