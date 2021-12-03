import express from 'express';
import { createBook } from '../controllers/BooksControllers.js'
import {protect} from '../middlewares/authMiddleware.js'

const router = express.Router();

router.route('/').post(protect, createBook);

export default router;