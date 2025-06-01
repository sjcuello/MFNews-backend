import Joi from 'joi';

const createArticle = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    subtitle: Joi.string().required(),
    description: Joi.string().required(),
    imageUrl: Joi.string().required(),
    author: Joi.string().required(),
    category: Joi.string().required(),
    content: Joi.string().required(),
    contentDesc: Joi.string().required(),
  })
};

const updateArticle = {
  params: Joi.object().keys({
    articleId: Joi.string().required()
  }),
  body: Joi.object()
    .keys({
      title: Joi.string().required(),
      subtitle: Joi.string().required(),
      description: Joi.string().required(),
      imageUrl: Joi.string().required(),
      author: Joi.string().required(),
      category: Joi.string().required(),
      content: Joi.string().required(),
      contentDesc: Joi.string().required(),
      markAsDeleted: Joi.boolean(),
      id: Joi.number(),
      createdAt: Joi.date(),
      updatedAt: Joi.date()
    })
};

const deleteArticle = {
  params: Joi.object().keys({
    articleId: Joi.string().required()
  })
};

export default {
  createArticle,
  updateArticle,
  deleteArticle
};