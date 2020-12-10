import Stats from '../models/stats.js';

export const listStats = async () => Stats.find();

export const getStatsByArticleId = async (id) => {
  const articleStats = Stats.findOne({ a_ref: id });
  return articleStats;
};

// export const getImageById = async (id) => Image.findById(id);

export const createNewStats = async (data) => {
  Stats.create(data);
};

export const updateStats = async (id, data) => {
  Stats.findOneAndUpdate(
    { _id: id },
    { $set: { viewCount: data.viewCount }, $addToSet: { u_refs: data.u_refs } },
    { useFindAndModify: false }
  ).then((docs) => {
    if (docs) {
      return { success: true, data: docs };
    }
    return { success: false, data: 'no such user exist' };
  });
};
