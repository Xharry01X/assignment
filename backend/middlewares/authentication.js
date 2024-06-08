import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

module.exports=function(req,res,next){
const token=req.header('x-auth-token')
if(!token){
    res.status(401).json({message:"authorization denied"})
}

try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decoded.user;
    next();
} catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
}

}