import axios from 'axios';

const serviceConfig = {
  url: process.env.REACT_APP_MOVIE_SERVICE_URI,
  timeout: 6000,
  configHeaders: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
};

const service = axios.create({
  baseURL: serviceConfig.url,
  timeout: serviceConfig.timeout,
  headers: serviceConfig.configHeaders,
});

export async function getActorFetch(actorId){
  return service
  .get('/actors/'+actorId).then(res => res.data)
  .catch((error) => {
    throw error;
  });
}

export async function getActorsFetch(movieId){
  return service
  .get('/movies/'+movieId+'/actors').then(res => res.data)
  .catch((error) => {
    throw error;
  });
}

export async function getMoviesByGenre(genreId){
  return service
  .get('/genre/'+genreId+'/movies').then(res => res.data)
  .catch((error) => {
    throw error;
  });
}