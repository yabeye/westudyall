import express from 'express';

import routerHome from './home.js';
import routerAccount from './account.js';
import routerAuth from './auth.js';
const router = express.Router();

router.use('/', routerHome);
router.use('/api/account', routerAccount);
router.use('/api/auth', routerAuth);

export default router;
