import { statsService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const createOrUpdate = catchAsyncErrors(async (req, res, next) => {
  if (!req.body.a_ref) {
    return next(new ErrorHandler(`Krever a_ref`, 400));
  }

  if (!req.body.u_refs) {
    return next(new ErrorHandler(`Krever u_refs`, 400));
  }

  const fetchedStat = await statsService.getStatsByArticleId(req.body.a_ref);

  let newStat = null;

  if (!fetchedStat) {
    console.log('Eksiterer ikke');
    newStat = await statsService.createNewStats(req.body);
    res.status(200).json({ success: true, data: newStat });
  } else {
    req.body.viewCount = fetchedStat.viewCount + 1;

    newStat = await statsService.updateStats(fetchedStat._id, req.body);

    res.status(200).json({ success: true, data: newStat });
  }
});

export const get = catchAsyncErrors(async (req, res, next) => {
  const stats = await statsService.listStats();

  if (!stats) {
    return next(new ErrorHandler(`Finner ingen stats`, 404));
  }

  res.status(200).json({ success: true, data: stats });
});
