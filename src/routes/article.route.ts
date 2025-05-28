import express from 'express';
import { articleController } from '../controllers';
import { articleValidation } from '../validations';
import validate from '../middlewares/validate';

const router = express.Router();

router
  .route('/')
  .get(articleController.getArticles)
  .post(validate(articleValidation.createArticle), articleController.createArticle);

router
  .route('/:articleId')
  .delete(validate(articleValidation.deleteArticle), articleController.deleteArticle)
  .patch(validate(articleValidation.updateArticle), articleController.updateArticle);


export default router;