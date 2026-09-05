import dotenv from "dotenv"
dotenv.config({silent:true}, {path: '/custom/path/.env'})

import express from "express"; // handling requests
import cors from "cors";
import jwt from "jsonwebtoken";

import connectDB from "./Configfiles/db.js";


import adminRouter from "./routes/adminroutes.js";
import regularRouter from "./routes/regularroutes.js";
import securedRouter from "./routes/regularsecuredroutes.js";

// Creating the server
const app = express();
// Connect Database
connectDB();
// Cross-Origin security
app.use(cors({
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}));
// keeps all responses in json
app.use(express.json());


// Routes
// Ensure to remove the '.get' later and swap "/regular" for "/" 
app.get('/', (req, res) => {
    res.status('200').json({ message: {
        message: "Endpoint Hit"
    } });
})
app.use('/regular', regularRouter);
app.use('/admin', adminRouter);
app.use('/secure', securedRouter);

const PORT= process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';


app.listen(PORT, HOST, ()=> {
    console.log(`server is running on port ${PORT}`)
})
