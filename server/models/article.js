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
    category: {
      type: String,
      required: [true, 'Put it in a box'],
      unique: false,
      min: [1, 'Skal den her eller der mon tro??'],
    },
    paygrade: {
      type: String,
      enum: {
        values: ['Standard', 'Registrert', 'Admin', 'SuperAdmin'],
        message: 'Rolle ikke fylt ut',
      },
      default: 'Standard',
    },
    author: {
      type: String,
      required: [true, 'Noen har vell lagd denne artikkelen?'],
      unique: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ArticleSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

export default mongoose.model('Article', ArticleSchema);
