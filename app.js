import express from "express";
import bookRoute from "./routes/bookRoute.js";

const app = express();
const port = 8080;

app.use(express.json());

app.use('/books', bookRoute);

console.log("menambahkan endpoint update book");
console.log("menambahkan endpoint delete book");

console.log("endpoint getbyID js");
console.log("menambahkan fitur create book");


app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
})
