var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bookModel = new Schema({
    title: { type: String   },
    author: { type: String }
})
// This binds the bookModel variable to the ORM type Book
module.exports = mongoose.model('Book', bookModel)