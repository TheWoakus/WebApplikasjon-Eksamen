import argon2 from 'argon2';
import User from '../models/user.js';

export const createUser = async (data) => User.create(data);

export const listUsers = async () => User.find();

export const attemptLogin = async (data) => {
  const { mail } = data;
  const hashedPW = await argon2.hash(data.password);

  // TODO: Add logic
};
