const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getRepository } = require('typeorm');
const User = require('../entity/User');


const JWT_SECRET = process.env.JWT_SECRET;

const signup = async (username,email,password) =>{
    const userRepository = getRepository(User);
    try{
        const userexist = await userRepository.findOne({ where: { email } });
        if(userexist){
            throw new Error('Email already in use');
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = userRepository.create({ username, email, password: hashedPassword });
        await userRepository.save(newUser);
        console.log("User has been saved.");
        const token = jwt.sign({ id: newUser.id, username: newUser.username },'JWT_SECRET', { expiresIn: '1h' });
        return token;
    } catch (error) {
        throw new Error(error.message || 'Error Occured');
    }
};

const login = async(email,password)=>{
    const userRepository = getRepository(User);
    try{
        const user = await userRepository.findOne({ where: { email } });
        if (!user) {
            throw new Error('Invalid email or password');
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            throw new Error('Invalid email or password');
        }
        const token = jwt.sign({ id: user.id, username: user.username }, 'JWT_SECRET', { expiresIn: '1h' });
        return token;
    }catch(error){
        throw new Error(error.message || 'Error Occured');
    }

}
  module.exports = { signup , login};