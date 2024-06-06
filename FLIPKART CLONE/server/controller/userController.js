// import user from '../models/userSchema.js';
import User from '../models/userSchema.js';

export const userSignup = async (request,response)=>{
    try {

        const exist = await User.findOne({username:request.body.username})
        if(exist){
            return response.status(401).json({message:"username already exists"})
        }
        const user=request.body;
        const newUser = new User(user)
        await newUser.save();
        response.status(200).json({message:user})
    } catch (error) {
        response.status(500).json({message:error.message})
    }
}


export const userLogin = async (request,response)=>{
    try {
        const username = request.body.username;
        const password = request.body.password;

        let userRes=await User.findOne({username:username,password:password});
        if(userRes){
            return response.status(200).json({data: userRes})
        }
        else
        {
            return response.status(401).json(`login invalid!`)
        }
    } catch (error) {
        response.status(500).json({message:error.message})
    }
}