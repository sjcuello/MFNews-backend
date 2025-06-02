import express from 'express';
import { articleController } from '../controllers';
import { articleValidation } from '../validations';
import validate from '../middlewares/validate';

const router = express.Router();

router
  .route('/')
  .get(articleController.getArticles)
  .post(validate(articleValidation.createArticle), articleController.createArticle)
  .delete(validate(articleValidation.deleteArticles), articleController.deleteArticles);

router
  .route('/:articleId')
  .delete(validate(articleValidation.deleteArticle), articleController.deleteArticle)
  .patch(validate(articleValidation.updateArticle), articleController.updateArticle);


export default router;