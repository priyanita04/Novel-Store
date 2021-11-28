import express from 'express'
import cors from "cors"
import asyncHandler from 'express-async-handler'
import dotenv from "dotenv"
import connectDB from './config/db.js'
import User from './Models/userModel.js'
import Book from './Models/bookModel.js'


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

app.post("/login", asyncHandler(async(req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });

        if (user && await user.matchPassword(password)) {
            //render to home page
            console.log("Login Page")
        }
        else {
            console.log("email does not exists or password does not match")
        }


}))

app.post("/register", async (req, res) => {
    const { name, email, password} = req.body;

    User.findOne({ email: email }, (err, user) => {
        if (user) {
            console.log("user already exist!");
        }
        else {

            const user = new User({
                name,
                email,
                password
            })
            console.log(user);
            user.save(err => {
                if (err) {
                    console.log(err)
                }
                else
                {
                    console.log("register data save")
                }
            })

        }
    })




})

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