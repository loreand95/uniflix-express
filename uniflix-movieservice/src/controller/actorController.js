const actorService = require("../service/actorService");

module.exports.getActor = async (req, res) => {
  const actorId = req.params.actorId;

  actorService
    .getActor(actorId)
    .then((movie) => {
      res.send(movie);
    })
    .catch((e) => {
      console.error({ error: e.message });
      res.status(500).send();
    });
};