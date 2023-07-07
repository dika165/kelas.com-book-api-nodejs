import mysql from "mysql2/promise";

const dbPool = mysql.createPool({
    host:'localhost',
    user:'root',
    password: 'mauFJcuf5dhRMQrjj',
    database: "book-api"
});

export default dbPool;