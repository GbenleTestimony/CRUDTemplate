import jwt from 'jsonwebtoken';


export const tokenVerifier = async (req, res, next) => {
    const heaDer = req.headers['authorization'];

    const token = heaDer && heaDer.split(' ')[1];

    console.log(token);
    
    if(!token){
        return res.status(401).json({error:'No Token Supplied'});
    }
    try{
        const payload= await jwt.verify(token, process.env.ACCESS_SECRET)
        req.user= payload
        console.log(payload)
    }catch(err){
        return res.status(403).json({err:'Token is invalid or expired'})
    }
    next()
}