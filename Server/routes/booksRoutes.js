import express from 'express';
import { createBook } from '../controllers/BooksControllers.js'

const router = express.Router();

router.route('/').post(createBook);

export default router;