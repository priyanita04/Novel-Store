import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
    },
    {
        timeStamps: true,
    }
)

userSchema.pre("save", async function(next){
    if(!this.isModified("password"))
    {
        next();
    }
    else
    {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt)
    }
})

userSchema.methods.matchPassword = async function(enteredPassword){
    console.log(this.password);
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model("User", userSchema);

export default User;