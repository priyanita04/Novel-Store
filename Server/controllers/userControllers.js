import User from '../Models/userModel.js'
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';

const registerUser = async(req, res)=>{
    const { name, email, password} = req.body;

    User.findOne({ email: email }, (err, user) => {
        if (user) {
            console.log("user already exist!");
        }
        else {

            const user = new User({
                name,
                email,
                password,
            })
            user.save(err => {
                if (err) {
                    console.log(err)
                }
                else
                {
                    res.status(201).json({
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        password: user.password,
                        token: generateToken()
                    })
                    console.log("register data save")
                }
            })

        }
    })
}



const loginUser = asyncHandler(async(req, res)=>{
    const { email, password } = req.body;
    const user = await User.findOne({ email });

        if (user && await user.matchPassword(password)) {
            //render to home page
            res.status(201).json({
                _id: user._id,
                email: user.email,
                password: user.password,
                token: generateToken()
            })
            console.log("Login Page")

        }
        else {
            console.log("email does not exists or password does not match")
        }
})

export {registerUser, loginUser}