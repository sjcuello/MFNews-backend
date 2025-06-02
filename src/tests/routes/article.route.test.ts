import { describe, jest, it, expect } from '@jest/globals';

import { Request, Response } from 'express';

jest.mock('../../controllers', () => ({
  articleController: {
    getArticles: jest.fn((req: Request, res: Response) => res.status(200).json([])),
    createArticle: jest.fn((req: Request, res: Response) => res.status(201).json({ id: '123', ...req.body })),
    deleteArticles: jest.fn((req: Request, res: Response) => res.status(200).json({ deleted: true })),
    deleteArticle: jest.fn((req: Request, res: Response) => res.status(200).json({ deleted: true })),
    updateArticle: jest.fn((req: Request, res: Response) => res.status(200).json({ updated: true })),
  },
}));

jest.mock('../../middlewares/validate', () => ({
  __esModule: true,
  default: () => (_req: any, _res: any, next: () => any) => next(),
}));

import request from 'supertest';
import express from 'express';
import articleRouter from '../../routes/article.route';

const app = express();
app.use(express.json());
app.use('/article', articleRouter);

describe('Article routes', () => {
  it('GET /article should return 200 and an empty array', async () => {
    const res = await request(app).get('/article');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /article should return 201 and the created article', async () => {
    const res = await request(app)
      .post('/article')
      .send({ title: 'Test', content: 'Lorem ipsum' });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Test');
  });

  it('DELETE /article should return 200 and deleted confirmation', async () => {
    const res = await request(app)
      .delete('/article')
      .send({ ids: ['123', '456'] });

    expect(res.status).toBe(200);
    expect(res.body.deleted).toBe(true);
  });

  it('PATCH /article/:articleId should return 200 and updated confirmation', async () => {
    const res = await request(app)
      .patch('/article/123')
      .send({ title: 'Updated title' });

    expect(res.status).toBe(200);
    expect(res.body.updated).toBe(true);
  });

  it('DELETE /article/:articleId should return 200 and deleted confirmation', async () => {
    const res = await request(app).delete('/article/123');
    expect(res.status).toBe(200);
    expect(res.body.deleted).toBe(true);
  });
});
