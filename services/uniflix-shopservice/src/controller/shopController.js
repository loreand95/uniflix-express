const shopService = require("../service/shopService");

module.exports.getMovieList = async (req, res) => {
  const userId = req.userId;
  const { limit, page, category } = req.query;

  shopService
    .getMovieList(userId, limit, page, category)
    .then((listMovie) => {
      res.send(listMovie);
    })
    .catch((e) => {
      e.status ? res.status(e.status).send(e.message) : res.status(500).send();
    });
};

module.exports.getMovie = async (req, res) => {
  const userId = req.userId;
  const movieId = req.params.movieId;

  shopService
    .getMovie(userId, movieId)
    .then((movie) => {
      res.send(movie);
    })
    .catch((e) => {
      console.error(e)
      e.status ? res.status(e.status).send(e.message) : res.status(500).send();
    });
};

module.exports.buyMovie = async (req, res) => {
  const userId = req.userId;
  const movieId = req.params.movieId;

  shopService
    .buyMovie(userId, movieId)
    .then(() => {
      res.send({ message: "OK!", paid: true });
    })
    .catch((e) => {
      e.status ? res.status(e.status).send(e.message) : res.status(500).send();
    });
};
