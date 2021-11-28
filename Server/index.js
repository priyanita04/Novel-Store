import express from 'express'
import cors from "cors"
import asyncHandler from 'express-async-handler'
import dotenv from "dotenv"
import connectDB from './config/db.js'
import Book from './Models/bookModel.js'
import userRoutes from './routes/userRoutes.js'

const app = express();
dotenv.config();
connectDB();

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


//routes
app.get("/", (req, res) => {
    res.send("my api")
})

app.use('/api/users', userRoutes)


app.post("/home", (req, res)=>{
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
})


const PORT = process.env.PORT || 9002
app.listen(PORT, () => {
    console.log("started port at 9002")
})