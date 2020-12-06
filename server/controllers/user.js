import { userService } from '../services/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const list = catchAsyncErrors(async (req, res) => {
  const result = await userService.listUsers();
  res.status(200).json(result);
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.attemptLogin(req.body);
  res.status(200).json(user);

  // res.status(200).json({ mail: req.body.mail, pw: req.body.password });
});
