const libraryDAO = require("../dao/libraryDAO");
const movieService = require("./movieService");

module.exports.getMovieList = async (
  userId,
  limit = 10,
  page = 0,
  category = "best"
) => {
  
  //Check purchased movies
  //TO-DO

  return await movieService.getMovieList(limit, page, category);
};

module.exports.getMovie = async (userId, movieId) => {

  //Retrieve movie
  const movie = await movieService.getMovie(movieId);

  //Check if it has been purchased
  const isPurchased = await libraryDAO.isPurchased(userId, movieId);
  movie.isPurchased = isPurchased;

  movie.price = estimatePrice(movieId);

  return movie 
};

module.exports.buyMovie = async (userId, movieId) => {

  //Check if movieId exists
   const movie = await this.getMovie(userId, movieId);

  if(movie.isPurchased){
    const err = new Error('Movie already purchased')
    err.status=400
    throw err
  }

  //Pay
  //TO-DO

  //Estimated price
  const price = estimatePrice(movieId);

  //Add to library
  return libraryDAO.addMovie(userId, movieId, price);
};

function estimatePrice(movieId) {
  return 3.99;
}
