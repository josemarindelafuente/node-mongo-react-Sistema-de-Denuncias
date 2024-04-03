import { Router } from 'express';
import { register, login, logout, profile } from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateTokens.js';

//VALIDACIONES CON ZOD
import { validateZodSchema } from '../middlewares/validator.zod.middleware.js';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js'
//fin VALIDACIONES CON ZOD

const router = Router();

router.post('/register', validateZodSchema(registerSchema), register);
router.post('/login', validateZodSchema(loginSchema), login);
router.post('/logout', logout);

router.get('/profile', authRequired, profile)

export default router;