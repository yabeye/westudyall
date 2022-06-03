import express from 'express';

import routerHome from './home.js';
import routerAccount from './account.js';

const router = express.Router();

router.use('/', routerHome);
router.use('/api/account', routerAccount);

export default router;
