import { artworkService } from '../services/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const get = () => {};

export const list = catchAsyncErrors(async (req, res) => {
  const artwork = await artworkService.listArtwork();
  res.status(200).json({ success: true, data: artwork });
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const artwork = await artworkService.createArtwork(req.body);
  res.status(201).json({ success: true, data: artwork });
});

export const update = () => {};
export const remove = () => {};
