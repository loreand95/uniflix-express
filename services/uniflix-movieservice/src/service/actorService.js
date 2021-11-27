const actorDAO = require('../dao/actorDAO')

module.exports.getActor = async (actorId) => {
  return  await actorDAO.findById(actorId)
}