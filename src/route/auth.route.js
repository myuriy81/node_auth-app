// import { express } from 'express';
import { Router } from 'express';
import { authController } from '../controllers/auth.controllers.js';

// export const authRouter = new express.Router();
export const authRouter = Router();

authRouter.post('/registration', authController.register);
