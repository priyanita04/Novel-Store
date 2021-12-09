import express from 'express';
import { createBook, getBooks, homeBooks } from '../controllers/BooksControllers.js'
import {protect} from '../middlewares/authMiddleware.js'

const router = express.Router();

router.route('/').post(protect, homeBooks);
router.route('/create').post(protect, createBook);
router.route('/dashboard').get(getBooks);

export default router;