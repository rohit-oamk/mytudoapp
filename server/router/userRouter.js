import { pool } from '../helper/db.js';
import e, { Router } from 'express';
import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
const { sign } = jwt;
import { postRegistration, postLogin } from '../controllers/UserController.js';

const router = Router();

router.post('/register', postRegistration);
router.post('/login', postLogin);


export default router;