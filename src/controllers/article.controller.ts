
import { articleService } from '../services';
import { Request, Response } from 'express';
import httpStatus from 'http-status';


const createArticle = async (req: Request, res: Response) => {
  try {
    const article = await articleService.createArticle({ data: req.body });
    res.status(httpStatus.CREATED).send(article);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: 'Failed to create article' });
  }
};

const getArticles = async (_req: Request, res: Response) => {
  const result = await articleService.queryArticles();
  res.send(result);
};

const updateArticle = async (req: Request, res: Response) => {
  const articleId = Number(req.params.articleId);
  const article = await articleService.updateArticleById(articleId, req.body);
  res.send(article);
};

const deleteArticle = async (req: Request, res: Response) => {
  const articleId = Number(req.params.articleId);
  await articleService.deleteArticleById(articleId);
  res.status(httpStatus.NO_CONTENT).send();
};

export default {
  createArticle,
  getArticles,
  updateArticle,
  deleteArticle
};