import { Router } from 'express';
import { authRegisterController } from '../controllers/auth.controller';
import { getUserController } from '../controllers/auth.controller'; 

const router = Router();


router.post('/register', authRegisterController);
router.get('/users', getUserController);


export default router;