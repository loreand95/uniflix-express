const client = require("../conf/db");
const ObjectId = require("mongodb").ObjectId;

const COLLECTION_NAME = "library";
const JOIN_COLLECTION_NAME = "movies";

// Find users's library
async function findByUserId(userId, limit = 10, skip = 0) {
    return await client
    .getDb()
    .collection("library")
    .aggregate([
      {
        $lookup: {
          from: "movies",
          localField: "movieId",
          foreignField: "movieId",
          as: "movie",
        },
      },
      { $match: {userId} },
      { $unwind: "$movie" },
      {
        $project: {
          _id:0,
          userId:1,
          price:1,
          purchaseDate:1,
          movie: {
            movieId:1,
            title: 1,
          },
        },
      },
    ])
    .toArray();
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
