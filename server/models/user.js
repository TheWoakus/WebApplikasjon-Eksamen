import mongoose from 'mongoose';
import validator from 'validator';
import argon2 from 'argon2';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Vi må kunne sende deg en epost..'],
      unique: true,
      validate: [validator.isEmail, 'Vi kjenner ikke igjen denne type epost'],
    },
    password: {
      type: String,
      required: [true, 'Skriv inn ditt suuuuuperhemmelige passord'],
      minlength: [8, 'Passordet dekker ikke kravene. Minimum 8 tegn.'],
      select: false,
    },
    role: {
      type: String,
      enum: {
        values: ['user', 'artist', 'admin'],
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

const User = mongoose.model('User', UserSchema);

export default User;
