import mongoose from 'mongoose';
import slugify from 'slugify';
import validator from 'validator';

const { Schema } = mongoose;

const RequestSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Whooops!! Må da ha en tittel'],
      unique: false,
      min: [1, 'Én bokstav bør vi klare her'],
    },
    slug: {
      type: String,
    },
    name: {
      type: String,
      required: [true, 'Det er påkrevd med et navn'],
      unique: false,
      min: [1, 'Én bokstav bør vi klare her også'],
    },
    email: {
      type: String,
      required: [true, 'Vi trenger en måte å kontakte deg på'],
      unique: false,
      min: [1, 'Adressen er lengre enn det'],
      validate: [validator.isEmail, 'Vi kjenner ikke igjen denne type epost'],
    },
    content: {
      type: String,
      required: [true, 'Put it in a box'],
      unique: false,
      min: [1, 'Hva lurer du på?'],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

RequestSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

export default mongoose.model('Request', RequestSchema);
