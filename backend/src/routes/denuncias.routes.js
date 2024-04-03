import { Router } from 'express';
import { authRequired } from '../middlewares/validateTokens.js';
import { getDenuncias, createDenuncia, getDenuncia, deleteDenuncia, updateDenuncia } from '../controllers/denuncias.controller.js';

const router = Router();

router.get('/denuncias', authRequired, getDenuncias);
router.post('/denuncia', authRequired, createDenuncia);
router.get('/denuncia/:id', authRequired , getDenuncia);
router.delete('/denuncia/:id', authRequired , deleteDenuncia);
router.put('/denuncia/:id', authRequired , updateDenuncia);

export default router
