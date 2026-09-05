import dotenv from "dotenv" // gets data from the environment
dotenv.config({silent:true}, {path: '/custom/path/.env'})
import path from 'path'; // what the hell is this for?
import express from "express"; // for routing, handling requests
import cors from "cors";
import { veriFy } from "./middleware/adminVerification.js";
import connectDB from "./config/db.js";
import loginUser from "./routes/login.routes.js";
import createUser from "./routes/signup.routes.js";
import updateUser from "./routes/update.routes.js";
import jwt from "jsonwebtoken";
// Creating the server
const app = express();

// Connect Database
connectDB();

app.use(cors({
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}));// CORS gives the frontend its required access.


app.use(express.json());// keeps all responses in json

// // const veriFy = (req, res, next) => {
//     const heaDer = req.header['authorization'];
    
//     const token = heaDer && heaDer.split(' ')[1];

//     console.log(token);
//     if(!token){
//         return res.status(401).json({error:'Token Error'});
//     }
//     try{
//         console.log(token)
//         const payload= jwt.verify(token, process.env.ACCESS_SECRET)
//         console.log('Worked here!')
//         console.log(req)
//         req.user= payload
//     }catch(err){
//         return res.status(403).json({err:'Token is invalid or expired'})
//     }
//     next()
// }
// veriFy()
// Routes
app.get('/', (req, res) => {
    res.json({ message: {
        statusCode: "200",
        message: "success"
    } });
})
app.use('/login', loginUser);
app.use('/admin', veriFy, (req, res)=>{
    res.json({mesaage: 'Admin Status Verified, Access Granted',
        name: `${req}` 
    })
    console.log(req.user.name)
})
app.use('/create', createUser);
app.use('/update', veriFy,  updateUser);

const PORT= process.env.PORT || 3000;
const HOST = process.env.HOST || 8000;


app.listen(PORT, HOST, ()=> {
    console.log(`server is running on port ${PORT}`)
})
