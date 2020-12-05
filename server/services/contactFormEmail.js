import ContactForm from '../models/contactFormEmail';

export const createContactFormEmail = async (data) => ContactForm.create(data);