import Artwork from '../models/artwork.js';

export const createArtwork = async (data) => Artwork.create(data);

export const getArtworkById = async (id) => Artwork.findById(id);

export const listArtworks = async () => Artwork.find();
