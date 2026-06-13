import jwt from "jsonwebtoken";

export const accessToken=(user)=>{
    return jwt.sign(user, process.env.ACCESS_SECRET, {
        algorithm: 'HS256', 
        expiresIn:"10m"});
};
export const refreshToken=(user)=>{
    return jwt.sign(user, process.env.REFRESH_SECRET, {
        algorithm: 'HS256',
        expiresIn:'10d'});
};