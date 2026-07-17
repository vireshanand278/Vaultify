const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser=async (req,res)=>{
    const { username, email, password } = req.body;
    if(!username || !email || !password){
        return res.status(400).json({ message: "Please provide username, email, and password" });
    }
    const existingUser = await User.findOne({ email });
    if(existingUser){
        return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully",user });
}
const loginUser=async(req,res)=>{
    try{
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({message:"Please provide email and password"});
        }

        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({message:"Invalid email or password"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(401).json({message:"Invalid email or password"});
        }
        const token=jwt.sign({ id: user._id },process.env.JWT_SECRET,{expiresIn:"1d" });
        res.status(200).json({message: "Login successful", token});

    }catch(error){
        res.status(500).json({message: error.message});
    }
};


module.exports={registerUser,loginUser};