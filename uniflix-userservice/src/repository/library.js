const client = require("../conf/db");
const ObjectId = require("mongodb").ObjectId;

const COLLECTION_NAME = "library";

// Find users's library
async function findByUserId(userId, limit = 10, skip = 0) {
  return await client
    .getDb()
    .collection(COLLECTION_NAME)
    .find(
      { userId },
      {
        limit,
        skip,
        projection: { _id: 0 },
      }
    ).toArray();
}

// Add movie to library
async function save(movie) {
  return await client
    .getDb()
    .collection(COLLECTION_NAME)
    .insertOne(movie);
}



module.exports = {
  findByUserId,
  save,
};
