import multer from 'multer';
import ErrorHandler from '../utils/errorHandler';

function fileFilter(req, file, cb) {
  const filetypes = /\.(jpeg|jpg|png)$/;
  if (!file.originalname.match(filetypes)) {
    return cb(new ErrorHandler('Dette er ikke et gyldig format', 400));
  }
  cb(null, true);
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/img');
  },
  filename(req, file, cb) {
    const time = new Date();
    const someRandomValue = time.getMilliseconds.toString();
    // This does not work for some reason....

    cb(null, `someRandomValue_${file.originalname}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 5000000 },
  fileFilter,
}).single('image');
