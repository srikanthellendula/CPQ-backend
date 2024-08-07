import express, { Request, Response } from 'express';

/* -----> Import Routes <----- */
import userRoutes from './routes/user.route';

const router = express.Router();

// Test route for v1
router.get('/', (req: Request, res: Response) => {
  res.send('Welcome to API v1');
});

// User routes
router.use('/users', userRoutes);

export default router;
