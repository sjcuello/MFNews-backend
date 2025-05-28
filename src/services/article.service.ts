import { Prisma, Article } from '@prisma/client';
import httpStatus from 'http-status';
import prisma from '../database';
import ApiError from '../utils/ApiError';

const allArticleKeys: (keyof Article)[] = [
  'id',
  'title',
  'subtitle',
  'description',
  'imageUrl',
  'author',
  'createdAt',
  'updatedAt'
];

const createArticle = async (
  title: string,
  subtitle: string,
  description: string,
  imageUrl: string,
  author: string,
): Promise<Article> => {
  try {
    if (await getArticleByTitle(title)) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Title already taken');
    }
    return await prisma.article.create({
      data: { title, description, subtitle, imageUrl, author }
    });
  } catch (error) {
    console.error('Error creating article:', error);
    throw error instanceof ApiError ? error : new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error creating article');
  }
};

const queryArticles = async <Key extends keyof Article>(
  keys: Key[] = allArticleKeys as Key[]
): Promise<Pick<Article, Key>[]> => {
  try {
    const articles = await prisma.article.findMany({
      select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {}),
      orderBy: { id: 'desc' }
    });
    return articles as Pick<Article, Key>[];
  } catch (error) {
    console.error('Error querying articles:', error);
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error querying articles');
  }
};

const getArticleById = async <Key extends keyof Article>(
  id: number,
  keys: Key[] = allArticleKeys as Key[]
): Promise<Pick<Article, Key> | null> => {
  try {
    return await prisma.article.findUnique({
      where: { id },
      select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    }) as Promise<Pick<Article, Key> | null>;
  } catch (error) {
    console.error('Error fetching article by ID:', error);
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error fetching article by ID');
  }
};

const getArticleByTitle = async <Key extends keyof Article>(
  title: string,
  keys: Key[] = ['id', 'title', 'subtitle', 'description', 'imageUrl', 'author'] as Key[]
): Promise<Pick<Article, Key> | null> => {
  try {
    return await prisma.article.findFirst({
      where: { title },
      select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    }) as Promise<Pick<Article, Key> | null>;
  } catch (error) {
    console.error('Error fetching article by name:', error);
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error fetching article by name');
  }
};

const updateArticleById = async <Key extends keyof Article>(
  articleId: number,
  updateBody: Prisma.ArticleUpdateInput,
  keys: Key[] = allArticleKeys as Key[]
): Promise<Pick<Article, Key> | null> => {
  try {
    const article = await getArticleById(articleId);
    if (!article) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Article not found');
    }

    if (updateBody.markAsDeleted !== article.markAsDeleted) {
      return await changeIsDeleted(articleId, article.markAsDeleted) as Pick<Article, Key> | null;
    }

    return await prisma.article.update({
      where: { id: article.id },
      data: updateBody,
      select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    }) as Pick<Article, Key> | null;
  } catch (error) {
    console.error('Error updating article by ID:', error);
    throw error instanceof ApiError ? error : new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error updating article by ID');
  }
};

const deleteArticleById = async (articleId: number): Promise<Article> => {
  try {
    const article = await getArticleById(articleId);
    if (!article) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Article not found');
    }
    await prisma.article.delete({ where: { id: article.id } });
    return article;
  } catch (error) {
    console.error('Error deleting article by ID:', error);
    throw error instanceof ApiError ? error : new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error deleting article by ID');
  }
};

const changeIsDeleted = async (articleId: number, currentMarkAsDeleted: boolean): Promise<Article> => {
  return await prisma.article.update({
    where: { id: articleId },
    data: { markAsDeleted: !currentMarkAsDeleted },
  });
}


export default {
  createArticle,
  queryArticles,
  getArticleById,
  getArticleByTitle,
  updateArticleById,
  deleteArticleById,
  changeIsDeleted
};
