import dbPool from "../helper/db.js";

class Book {
    static getAll(){
        return dbPool.query('SELECT * FROM books');
    }

    static getByID(id){
        return dbPool.query('SELEC * FROM books WHERE id = ?',[id]);
    }

    static create({kategori_id, judul, penulis}){
        return dbPool.query('INSERT INTO books (kategori_id, judul, penulis) VALUE (?, ?, ?)',[kategori_id, judul, penulis]);
    }

    static update(id, {kategori_id, judul, penulis}){
        return dbPool.query('UPDATE books SET kategori_id = ? , judul = ?, penulis = ?',[kategori_id, judul,penulis]);
    }

    static delete(id){
        return dbPool.query('DELETE FROM books WHERE id = ?', [id]);
    }

}

export default Book;