import 'module-alias/register';
import express from 'express';
import userRoutes from '@routes/userRoutes';
import { Request, Response, NextFunction } from 'express';
import { ApiError } from '@entities/ApiError';

// Initialize Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    message: err.message || 'Internal Server Error',
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
