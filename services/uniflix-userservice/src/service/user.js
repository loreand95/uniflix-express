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

  //Create token
  user.token = jwt.sign({ _id }, process.env.TOKEN_SECRET);

  //Remove fields
  delete user.password
  delete user._id

  return user;
}

async function login(user) {

  const userStored = await userRepository.findByEmail(user.email);

  if (!userStored) {
    const err = new Error("User not found")
    err.status = 400;
    throw err;
  }

  const isMatch = await bcrypt.compare(user.password, userStored.password);

  if (!isMatch) {
    const err = new Error("Wrong Password")
    err.status = 400;
    throw err;
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
      const err = new Error("User not found")
      err.status = 400;
      throw err;
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
