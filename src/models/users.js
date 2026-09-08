import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    role:{
        type: String,
        default: 'user'
    }
});

export default mongoose.model('User', userSchema);