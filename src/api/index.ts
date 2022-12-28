import { Router } from 'express';

import health from './health/health.route';
import user from './user/user.route';

const router: Router = Router();

router.use('/health', health);
router.use('/user', user);

export default router;
