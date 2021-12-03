import Book from '../Models/bookModel.js'

const createBook = async(req, res)=>{
    const {bookName, price, detail, address, city, state, zip} = req.body;
    const book = new Book({
        bookName,
        price,
        detail,
        address,
        city,
        state,
        zip
    })
    book.save(error=>{
        if(error)
        {
            console.log(error)
        }
        else{
            console.log("book detail saved!")
        }
    })
}

export {createBook}