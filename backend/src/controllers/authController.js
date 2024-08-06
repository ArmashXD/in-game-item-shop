const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getRepository } = require('typeorm');
const User = require('../entity/User');



const signup = async (req,res) =>{
    let {username,email,password} =req.body;

    console.log(username,email,password);
    if (!username || !email || !password) {
        return res.status(400).json({message:'Empty fields'});
    }
    const userRepository = getRepository(User);
    try{
        console.log("this is working");
        
        const userexist = await userRepository.findOne({ where: { email } });
        if(userexist){
            return res.status(400).json({ message: 'Email already in use' }); 
        }
        console.log("this is working2");
        const hashedPassword = await bcrypt.hash(password,10);
        console.log("hhhh"+hashedPassword);
        const newUser = userRepository.create({ username, email, password: hashedPassword });
        await userRepository.save(newUser);
        console.log("User has been saved.");
        const token = jwt.sign({ id: newUser.id, username: newUser.username },'your_jwt_secret', { expiresIn: '1h' });

        res.status(201).json({ token });
  } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
  }
};



const login = async (req, res) => {
  const { email, password } = req.body;
console.log(email);
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const userRepository = getRepository(User);

  try {
    const user = await userRepository.findOne({ where: { email } });
    console.log(user);

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { signup , login };