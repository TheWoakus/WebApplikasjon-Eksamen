import { userService } from '../services/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const list = catchAsyncErrors(async (req, res) => {
  const user = await userService.listUsers();
  res.status(200).json({ success: true, data: user });
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.createUser(req.body);
  res.status(201).json({ success: true, data: user });
});
