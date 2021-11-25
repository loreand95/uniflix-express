const userRepository = require("../repository/user");
const libraryRepository = require("../repository/library");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function signup(user) {
  //Encript password
  user.password = await bcrypt.hash(user.password, 8);

  try {
    _id = await userRepository.save(user);
  } catch (e) {
    throw e;
  }

  user.token = jwt.sign({ _id }, process.env.TOKEN_SECRET);

  //Remove password
  delete user.password;

  return user;
}

async function login(user) {

  const userStored = await userRepository.findByEmail(user.email);

  if (!userStored) {
    throw new Error("Unable to find user");
  }

  const isMatch = await bcrypt.compare(user.password, userStored.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }

  //Generate token
  userStored.token = jwt.sign(
    { _id: userStored._id.toString() },
    process.env.TOKEN_SECRET
  );

  //Filter response
  delete userStored.password;
  delete userStored._id;

  return userStored;
}

async function getAccount(userId) {
  try{
    const account = await userRepository.findById(userId);
    
    if(!account){
      throw new Error('User not found')
    }

    return account
  }catch(e){
    throw e
  }
}

async function getLibrary(userId, limit, skip) {
  try{
    return await libraryRepository.findByUserId(userId, limit, skip);
  }catch(e){
    throw e
  }
}

async function emailAvailability(email) {
  try{
    return !(await userRepository.findByEmail(email))
  }catch(e){
    throw e
  }
}

module.exports = {
  login,
  signup,
  getAccount,
  getLibrary,
  emailAvailability
};
