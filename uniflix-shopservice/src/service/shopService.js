const movieDAO = require('../dao/movieDAO')

module.exports.getMovieList = async (userId, limit = 10, page = 0, category = 'best') => {
  return await movieDAO.findAll()
}

module.exports.getMovie = async (userId, movieId) => {
  return await movieDAO.findById(movieId)
}

module.exports.buyMovie = async (userId, movieId) => {
  return "TO DO";
}
