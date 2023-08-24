import express from "express";
import * as bookController from '../controllers/bookController.js';

const router = express.Router();

router.get('/', bookController.getBooks);

router.get('/test', bookController.getBooks);

router.post('/test', bookController.getBooks);
export default router;