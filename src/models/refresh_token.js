import mongoose from "mongoose";

const tokenSchema = mongoose.Schema({
    rToken:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
})


export default mongoose.model('Token', tokenSchema)