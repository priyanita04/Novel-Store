import Book from '../Models/bookModel.js'
import asyncHandler from 'express-async-handler'

const createBook = asyncHandler(async(req, res)=>{

        const {bookName, price, detail, address, city, state, zip} = req.body;
        const book = new Book({
            user: req.user._id,
            bookName,
            price,
            detail,
            address,
            city,
            state,
            zip
        })
        const createbook = await book.save();
        res.status(201).json(createbook);

});

const getBooks = asyncHandler(async(req, res)=>{
    // res.status(201).json();
});

export {createBook, getBooks}