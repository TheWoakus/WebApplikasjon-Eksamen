import mongoose from 'mongoose';
import validator from 'validator';
import argon2 from 'argon2';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Whooops!! Vi må vite hva du heter'],
      unique: true,
      min: [1, 'En bokstav har du i allefall i navnet ditt'],
    },
    mail: {
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
    userType: {
      type: Number,
      required: [
        true,
        'Trenger en brukertype, 0 er super, 1 er admin, 2 er vanlig',
      ],
      unique: false,
      min: [1, 'Du trenger nesten en brukertype altså'],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});

const User = mongoose.model('User', UserSchema);

export default User;
