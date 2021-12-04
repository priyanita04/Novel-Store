import express from 'express';
import { createBook, getBooks } from '../controllers/BooksControllers.js'
import {protect} from '../middlewares/authMiddleware.js'

const router = express.Router();

router.route('/create').post(protect, createBook);
router.route('/dashboard').get(getBooks);

export default router;