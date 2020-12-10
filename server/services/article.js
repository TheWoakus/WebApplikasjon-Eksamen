import Article from '../models/article.js';

import { ApiFilters } from '../utils/apiFilters.js';

export const getArticleById = async (id) => Article.findById(id);

export const listArticles = async (queryStr) => {
  const filters = new ApiFilters(Article.find(), queryStr)
    .filter()
    .sort()
    .limitFields()
    .searchByQuery();
  const count = await Article.estimatedDocumentCount();
  const articles = await filters.query.populate('title', 'category');
  return {
    results: articles.length,
    data: articles,
    count,
  };
};

export const createArticle = async (data) => Article.create(data);

export const updateArticle = async (id, data) =>
  Article.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removeArticle = async (id) => {
  const article = await Article.findById(id);
  article.remove();
};
