import mongoose from 'mongoose';
import validator from 'validator';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Whooops!! Vi må vite hva du heter'],
      unique: false,
      min: [1, 'En bokstav har du i allefall i navnet ditt'],
    },
    email: {
      type: String,
      required: [true, 'Vi må kunne sende deg en epost..'],
      unique: true,
      validate: [validator.isEmail, 'Vi kjenner ikke igjen denne type epost'],
    },
    username: {
      type: String,
      required: [true, 'Samantha??'],
      unique: true,
      min: [1, 'Hva vil du at vi skal kalle deg??'],
    },
    password: {
      type: String,
      required: [true, 'Skriv inn ditt suuuuuperhemmelige passord'],
      minlength: [8, 'Du klarer å skrive inn 8 tegn gjør du ikke?'],
      select: false,
    },
    role: {
      type: String,
      enum: {
        values: ['super', 'admin', 'user'],
        message: 'Trenger en brukertype. super, admin eller user',
      },
      default: 'user',
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});

UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

UserSchema.methods.comparePassword = async function (password) {
  const result = argon2.verify(this.password, password);
  return result;
};

const User = mongoose.model('User', UserSchema);

export default User;
