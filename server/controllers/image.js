import path from 'path';
import { imageService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  if (!req.file) {
    return next(new ErrorHandler(`Krever en bildefil`, 400));
  }

  const image = await imageService.uploadImage(req.file);
  res.status(201).json({ success: true, data: image });
});

export const get = catchAsyncErrors(async (req, res, next) => {
  const image = await imageService.getImageById(req.params.id);

  if (!image) {
    return next(new ErrorHandler(`Finner ikke bilde med ID`, 404));
  }

  // res.set({
  //  'Content-Type': image.file_mimeType,
  // });

  // res.sendFile(path.join(__dirname, '..', image.file_path));

  const imagePath = image.file_path.replace('public\\', '').replace('\\', '/');
  res.status(200).json({ success: true, data: { image, imagePath } });
});
