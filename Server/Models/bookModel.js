import mongoose from 'mongoose'

const bookSchema = mongoose.Schema(
    {
        bookName:{
            type: String,
            require: true
        },
        price:{
            type: String,
            require: true
        },
        detail:{
            type: String,
            require: true
        },
        address:{
            type: String,
            require: true
        },
        city:{
            type: String,
            require: true
        },
        state:{
            type: String,
            require: true
        },
        zip:{
            type: String,
            require: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "User",
        },
    }
)

const Book = mongoose.model("Book", bookSchema)

export default Book;