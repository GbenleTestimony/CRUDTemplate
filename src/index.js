import dotenv from "dotenv" // gets data from the environment
import express from "express"; //handles requests
import cors from "cors";
import connectDB from "./config/db.js";

import regularRouter from "./Routes/regular_routes.js";
import securedRouter from "./Routes/regular_secured_routes.js";
import adminRouter from "./Routes/admin_routes.js";


// Creates the server
const app = express();
app.use(express.json());// keeps all responses in json
// Connect Database
connectDB();
dotenv.config({silent:true}, {path: '/custom/path/.env'})
app.use(cors({
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}));


// Home Route
app.get('/', (req, res) => {
    res.status('200').json({ message: {
        message: "server hit"
    } });
});

// Standard Routers
app.use('/regular', regularRouter );
app.use('/protected', securedRouter);
app.use('/admin', adminRouter);

const PORT= process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';


app.listen(PORT, HOST, ()=> {
    console.log(`server is running on port ${PORT}`)
})
