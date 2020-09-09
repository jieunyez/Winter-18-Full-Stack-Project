var express = require('express');
var bookRouter = express.Router();
var Book = require('../../models/book')

bookRouter.use('/', (req, res, next)=>{
  console.log("I run first before I retrieve all the books")
  next()
})
bookRouter.route('/')
  .get((req, res) => {
    Book.find({}, (err, books) => {
      res.json(books)
    })
  })
  .post((req, res) => {
    let book = new Book(req.body); 
    book.save();
    res.status(201).send(book) 
  });

module.exports = bookRouter;
