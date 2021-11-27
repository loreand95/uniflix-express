const movieService = require("../service/movieService");

module.exports.getGenreList = async (req, res) => {
  res.send('TO-DO');
};

module.exports.getGenre = async (req, res) => {
  res.send('TO-DO');
};

module.exports.getGenreMovies = async (req, res) => {
  movieService.getMovieList().then(movies=>{
    res.send(movies);
  }).catch(e =>{
    e.status ? res.status(e.status).send(e.message) : res.status(500).send();
  })
};
