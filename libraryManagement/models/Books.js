const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
    bookName: {
        type: String,
        required : true,
        minLength : 3
    },
    bookAuthor: {
        type: String,
        required : true,
        minLength : 3
    },
});

const Books = new mongoose.model("books",booksSchema);
module.exports = Books;