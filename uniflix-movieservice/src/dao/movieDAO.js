const client = require("../conf/db");
const ObjectId = require("mongodb").ObjectId;

const COLLECTION_NAME = "movies";

// Find Movie List
module.exports.findAll = async (limit = 10, skip = 0, category = "best") => {
  try {
    return await client
      .getDb()
      .collection(COLLECTION_NAME)
      .find(null, { limit, skip })
      .toArray();
  } catch (e) {
    throw new Error("DB ERROR - Find Movie List");
  }
};

// Find Movie By Id
module.exports.findById = async (movieId) => {
  movieId = Number(movieId);
  try {
    return await client
      .getDb()
      .collection(COLLECTION_NAME)
      .findOne({ movieId }, { projection: { _id: 0 } });
  } catch (e) {
    throw new Error("DB ERROR - Find Movie By Id");
  }
};
