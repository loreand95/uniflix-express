const axios = require("axios");

const MOVIE_SERVICE_URI = process.env.MOVIE_SERVICE_URI;

module.exports.getMovieList = async (limit, page, category) => {
  const paramString = `limit=${limit}&page=${page}&category=${category}`;
  const URI = `${MOVIE_SERVICE_URI}?${paramString}`;

  const res = await axios.get(URI);

  return res.data;
};

module.exports.getMovie = async (movieId) => {
  const URI = `${MOVIE_SERVICE_URI}/${movieId}`

  try {
    const res = await axios.get(URI);
    return res.data;
  } catch (e) {
    if (e.response && e.response.status === 404) {
      e.status = 404;
      e.message = e.response.data;
    }

    throw e;
  }
};
