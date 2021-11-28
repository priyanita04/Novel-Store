import User from '../Models/userModel.js'
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
                    console.log("register data save")
                }
            })

        }
    })
}



const loginUser = async(req, res)=>{
    const { email, password } = req.body;
    const user = await User.findOne({ email });

        if (user && await user.matchPassword(password)) {
            //render to home page
            console.log("Login Page")
        }
        else {
            console.log("email does not exists or password does not match")
        }
}

export {registerUser, loginUser}