import { Router } from 'express';

import articleRouter from './article.route';

const router = Router();

router.use('/article', articleRouter);

export default router;
