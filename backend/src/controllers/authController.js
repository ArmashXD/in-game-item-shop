const {signup ,login} = require('../services/userService');

const authSignup =async(req,res) =>{
  const {username,email,password} = req.body;
  try{
    if (!username || !email || !password) {
       resStatus(res,400,{message:"Empty fields"});
    }
    const token = await signup(username,email,password);
    resStatus(res,201,{ token });
  }catch(error){
    if(error.message === "Email already in use"){
      resStatus(res,400,{message:"Email already in use"});
    }
    else if(errornode.message === "Error Occured"){
      resStatus(res,400,{ message: 'Error Occured' });
    }
  }
}

const authLogin =async(req,res) =>{
  const {email,password} = req.body;
  try{
    if (!email || !password) {
       resStatus(res,400,{message:"Empty fields"});
    }
    const token = await login(email,password);
    resStatus(res,201,{ token });
  }catch(error){
    if(error.message === "Invalid email or password"){
      resStatus(res,401,{message:"Invalid email or password"});
    }
    else if(errornode.message === "Error Occured"){
      resStatus(res,400,{ message: 'Error Occured' });
    }
  }
}

const resStatus = (res,code,customMessage) =>{
  res.status(code).json(customMessage);
}

module.exports = { authSignup , authLogin };