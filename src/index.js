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
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}));// CORS gives the frontend it's required access.


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
    res.json({ message: 'Otun gbe mi de beee' });// default route and response in the browser
})
app.use('/login', loginUser); // ./login here shows why the route in the router is only '/
app.use('/admin', veriFy, (req, res)=>{
    res.json({mesaage: 'admin ti de o!',
        name: `${req}` 
    })
    console.log(req.user.name)
})
app.use('/create', createUser);
app.use('/update', updateUser);

const PORT= process.env.PORT || 8000;
console.log('home')
//Starting server
app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`)
})// This keeps the backend alive on the specified port
