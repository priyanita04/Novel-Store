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
            zip,
            isActive: true
        })
        const createbook = await book.save();
        res.status(201).json(createbook);

});

const getBooks = asyncHandler(async(req, res)=>{

    Book.find({isActive: true}, (err, book)=>{
        res.status(201).json({
            book
        });
    })


});

const homeBooks = asyncHandler(async(req, res)=>{
    const {token} = req.body
    console.log("token is" ,token)
    res.status(201).json({"godc": "cbnv"})
})

export {createBook, getBooks, homeBooks}