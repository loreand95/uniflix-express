const client = require("../conf/db");

const COLLECTION_NAME = "reviews";

// Find Movie Reviews
module.exports.findById = async (movieId) => {
  movieId = Number(movieId);
  try {
    return await client
      .getDb()
      .collection(COLLECTION_NAME)
      .find({ movieId }, { limit: 10, projection: { _id: 0 } })
      .toArray();
  } catch (e) {
    throw new Error("DB ERROR - Find Movie Reviews");
  }
};
