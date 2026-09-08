import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    manufacturer:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})
export default mongoose.model('Product', productSchema)