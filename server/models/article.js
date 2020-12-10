import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const ArticleSchema = new Schema(
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
    ingress: {
      type: String,
      required: [true, 'Gi oss noen hint da..'],
      unique: false,
      min: [1, 'Én bokstav bør vi klare her også'],
      max: [150, 'Dette er bare en forhåndsvisning. Maks 150 karakterer'],
    },
    content: {
      type: String,
      required: [true, 'Story time!!'],
      unique: false,
      min: [1, 'Det var en gang..'],
    },
    picture: {
      type: String,
      required: false,
      unique: false,
    },
    category: {
      type: String,
      required: [true, 'Put it in a box'],
      unique: false,
      min: [1, 'Skal den her eller der mon tro??'],
    },
    role: {
      type: String,
      enum: {
        values: ['super', 'admin', 'user'],
        message: 'Trenger en brukertype. super, admin eller user',
      },
      default: 'user',
    },
    author: {
      type: String,
      required: [true, 'Noen har vell lagd denne artikkelen?'],
      unique: false,
    },
    imgSrc: {
      type: String,
      required: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ArticleSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

export default mongoose.model('Article', ArticleSchema);
