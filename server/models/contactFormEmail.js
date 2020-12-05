import mongoose from 'mongoose';
import validator from 'validator';
import argon2 from 'argon2';

const { Schema } = mongoose;

const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Ser ut som om du glemte å fylle inn ditt navn'],
      unique: true,
      min: [1, 'Du må da hete noe med én bokstav i alle fall'],
    },
    mail: {
      type: String,
      required: [true, 'Vi trenger en epost adresse å kontakte deg på'],
      unique: true,
      validate: [validator.isEmail, 'Hmmm.. Ser ikke ut som en gyldig epost adresse'],
    },
    subject: {
      type: String,
      required: [true, 'Du har ikke skrevet inn et emne'],
      unique: true,
      min: [1, 'Hjelp oss med å sortere henvendelser sånn at vi kan hjelpe deg fortere'],
    },
    message: {
      type: String,
      required: [true, 'Hyggelig at du tar kontakt med oss, hva kan vi hjelpe med?'],
      minlength: [4, 'Korte meldinger er koselig, men lengre gir mer mening'],
      select: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ContactSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});

const ContactFormEmail = mongoose.model('ContactFormEmail', ContactSchema);

export default ContactFormEmail;
