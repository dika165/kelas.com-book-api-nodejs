import express from "express";
import bookRoute from "./routes/bookRoute.js";

const app = express();
const port = 8080;

app.use(express.json());

app.use('/books', bookRoute);
console.log("menambahkan endpoint lagu");

console.log("menambahkan feature transfer");

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
})
