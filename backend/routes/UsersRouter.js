// backend/routes/UsersRouter.js

import express from 'express';
import { getUsers } from '../controllers/UsersController.js';

const router = express.Router();

// GET method route to fetch users
router.get('/users', getUsers);

export default router;
