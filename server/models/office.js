import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const OfficeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
      min: ['1', 'Et kontor må ha et navn'],
    },
    slug: {
      type: String,
    },
    address: {
      type: String,
      required: true,
      unique: false,
      min: ['1', 'Et kontor må ha en adresse'],
    },
    phone: {
      type: Number,
      required: true,
      unique: false,
      min: ['1', 'Et kontor må ha et telefonnr'],
    },
    location: {
      type: String,
      required: true,
      unique: false,
      min: ['1', 'Et kontor må høre til et sted'],
    },
    ingress: {
      type: String,
      required: true,
      unique: false,
      min: ['1', 'En liten fortelling om avdelingen'],
    },
    employees: {
      type: Array,
      required: true,
      unique: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

OfficeSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

export default mongoose.model('Office', OfficeSchema);
