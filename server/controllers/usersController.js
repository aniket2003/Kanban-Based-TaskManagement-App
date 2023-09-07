const User = require("../model/userModel");
const bcrypt = require("bcrypt");



module.exports.register = async(req,res,next) =>{

    try{

         // console.log(req.body);
    const {username, email, password} = req.body;
    const usernameCheck = await User.findOne({username });

    if(usernameCheck){
        return res.json({msg:"Username already used", status: false});
    }
    const emailCheck = await User.findOne({email });

    if(emailCheck){
        return res.json({msg:"Email already used", status: false});
    }

    const hashPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        email,
        username,
        password: hashPassword,
    });

    delete user.password;
    return res.json({status: true, user});

    }catch(err){

        next(err);

    }
   

}





module.exports.login = async(req,res,next) =>{

    try{

         // console.log(req.body);
    const {email, password} = req.body;
    const emailCheck = await User.findOne({email});

    if(!emailCheck){
        return res.json({msg:"Incorrect Email-Id or password", status: false});
    }
    const isPasswordValid = await bcrypt.compare(password,emailCheck.password);

    if(!isPasswordValid){
        return res.json({msg:"Incorrect Email-Id or password", status: false});
    }
    delete emailCheck.password;
   
    return res.json({status: true, emailCheck});

    }catch(err){

        next(err);

    }
   

}

