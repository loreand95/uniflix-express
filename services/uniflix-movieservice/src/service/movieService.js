const movieDAO = require("../dao/movieDAO");
const creditDAO = require("../dao/creditDAO");
const reviewDAO = require("../dao/reviewDAO");

module.exports.getMovieList = async (
  userId,
  limit = 10,
  page = 0,
  category = "best"
) => {
  return await movieDAO.findAll();
};

module.exports.getMovie = async (movieId) => {
  const movie = await movieDAO.findById(movieId);

  if (!movie) {
    const err = new Error("Movie Not Found");
    err.status = 404;
    throw err;
  }

  const cast = await creditDAO.findByMovieId(movieId);

  const reviews = await reviewDAO.findById(movieId);

  return {
    ...movie,
    reviews,
    cast,
  };
};

module.exports.buyMovie = async (userId, movieId) => {
  return "TO DO";
};
