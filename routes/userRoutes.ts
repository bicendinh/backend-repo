import { Router } from 'express';
import { getUsers } from '@controller/api';
import { authMiddleware } from '@middleware/authMiddleware';

const router = Router();

// Routes with authentication middleware
router.get('/', authMiddleware, getUsers);

export default router;
