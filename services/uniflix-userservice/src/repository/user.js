const client = require("../conf/db");
const ObjectId = require("mongodb").ObjectId;

const COLLECTION_NAME = "users";


// Find User by Email
async function findByEmail(email) {
  try{
    return await client.getDb().collection(COLLECTION_NAME).findOne({ email });
  }catch(e){
    throw new Error('DB ERROR - Find User by Email')
  }
}

// Find User by Id
async function findById(userId) {
  return await client
    .getDb()
    .collection(COLLECTION_NAME)
    .findOne(
      { _id: new ObjectId(userId) },
      {
        projection: { email: 1, _id: 0 },
      }
    );
}

//Save User
async function save(user) {
  const exist = await findByEmail(user.email);

  if (exist) {
    const err = new Error("User already exists")
    err.status = 400;
    throw err;
  }

  const res = await client
    .getDb()
    .collection(COLLECTION_NAME)
    .insertOne(user);

  return res.insertedId.toString();
}



module.exports = {
  findByEmail,
  save,
  findById,
};
