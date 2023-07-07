import Book from '../models/book.js';
import { success, error } from '../helper/responses.js';
import { bookSchema } from '../validator/bookValidator.js';

export const getBooks = async(req, res, next) => {
    try {
        const [result] = await Book.getAll();
        success(res, "Ok", result)

    } catch(err) {
        console.log("terjadi error: " +err.message);
        next(err);
    }
}

export const getBookById = async (req, res, next) => {
    try {
        const [result] = await Book.getByID();
        success(res, "Ok", result);
    } catch(err){
        console.log(err);
        next(err);
    }
}

export const createBook = async (req, res, next) => {
    try {
        const value = await bookSchema.validateAsync(req.body);
        const [result] = await Book.create(value);
        success(res, "Berhasil Tambah", result, 201);
    } catch(err){
        console.log(err.message);
        next(err)
    }
}