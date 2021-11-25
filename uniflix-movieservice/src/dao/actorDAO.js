const client = require("../conf/db");
const ObjectId = require("mongodb").ObjectId;

const COLLECTION_NAME = "actors";

// Find Actor By Id
module.exports.findById = async (actorId) => {
    actorId = Number(actorId);
    try {
      return await client
        .getDb()
        .collection(COLLECTION_NAME)
        .findOne({ actorId }, { projection: { _id: 0 } });
    } catch (e) {
      throw new Error("DB ERROR - Find Actor By Id");
    }
  };
  