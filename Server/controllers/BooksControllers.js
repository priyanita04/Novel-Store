import Book from '../Models/bookModel.js'

const createBook = async(req, res)=>{
    try {
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


    } catch (error) {
        res.send(error)
    }

}

export {createBook}