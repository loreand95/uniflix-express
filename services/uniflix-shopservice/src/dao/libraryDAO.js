const client = require("../conf/db");
const ObjectId = require("mongodb").ObjectId;

const COLLECTION_NAME = "library";

// Add Movie
module.exports.addMovie = async (userId, movieId, price) => {
  const order = {
    movieId:Number(movieId),
    userId,
    price,
    purchaseDate: new Date(),
  };

  try {
    return await client.getDb().collection(COLLECTION_NAME).insertOne(order);
  } catch (e) {
    throw new Error("DB ERROR - Add Movie");
  }
};

// Find Movie by userId
module.exports.isPurchased = async (userId, movieId) => {

  try {
    return !!(await client.getDb().collection(COLLECTION_NAME).findOne({movieId:Number(movieId), userId}));
  } catch (e) {
    throw new Error("DB ERROR - Find Movie Library");
  }
};
