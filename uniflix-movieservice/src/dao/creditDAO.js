const client = require("../conf/db");
const ObjectId = require("mongodb").ObjectId;

const COLLECTION_NAME = "credits";

// Find Movie Cast
module.exports.findByMovieId = async (movieId) => {
  movieId = Number(movieId);
  try {
    return await client
      .getDb()
      .collection(COLLECTION_NAME)
      .find({ movieId }, { projection: { _id: 0 } })
      .toArray()
  } catch (e) {
    throw new Error("DB ERROR - Find Movie Cast");
  }
};
