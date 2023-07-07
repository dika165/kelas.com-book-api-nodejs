import Joi from "joi";

export const bookSchema = Joi.object({
    kategori_id: Joi.number().integer().required(),
    judul: Joi.string().min(3).required(),
    penulis: Joi.string().min(3).required(),
});