//Movies = name, director, two actors, image, link to imdb website

const movies = [
  {id: "a234", name: 'Clue', director: 'Johnathan Lynn', firstActor: 'Tim Curry', secondActor: 'Madeline Kahn', image: "https://media.giphy.com/media/OaB1SQcjEMuoo/giphy.gif", imdb: "https://www.imdb.com/title/tt0088930/?ref_=fn_al_tt_1", genre: ["comedy", "mystery", "crime"], year: "1985" },
  {id: "a345", name: 'Monty Python and the Holy Grail', director: 'Terry Gilliam', firstActor: 'John Cleese', secondActor: 'Eric Idle', image: "https://media.giphy.com/media/6Y49Ck6FxF4nS/giphy.gif", imdb: "https://www.imdb.com/title/tt0071853/?ref_=nv_sr_1", genre: ["comedy", "adventure", "fantasy"], year: "1975"},
  {id: "b234", name: 'Thor: Ragnorok', director: 'Taika Waititi', firstActor: 'Chris Hemsworth', secondActor: 'Tom Hiddleston', image: "https://media.giphy.com/media/xT9IgDWcLMC7smV3JS/giphy.gif", imdb: "https://www.imdb.com/title/tt3501632/?ref_=nv_sr_1", genre: ["action", "adventure", "comedy"], year: "2017"},
 {id: "cda2", name: 'Gilda', director: 'Charles Vidor', firstActor: 'Rita Hayworth', secondActor: 'Glenn Ford', image: "https://media.giphy.com/media/11qYJoC3dXHxsY/giphy.gif", imdb: "https://www.imdb.com/title/tt0038559/?ref_=fn_al_tt_1", genre: ["drama", "romance", "film-noir"], year: "1946"},
 {id: "d456", name: 'Kill Bill', director: 'Quentin Tarantino', firstActor: 'Uma Thurman', secondActor: ' David Carradine', image: "https://media.giphy.com/media/C5Zi4at3ADKCI/giphy.gif", imdb: "https://www.imdb.com/title/tt0266697/?ref_=nv_sr_2", genre: ["action", "crime", "thriller"], year: "2003"},
 {id: "ecba1", name: 'I\'m No Angel', director: 'Wesley Ruggles', firstActor: 'Mae West', secondActor: 'Cary Grant', image: "https://media.giphy.com/media/TCSHyqeNf5ene/giphy.gif", imdb: "https://www.imdb.com/title/tt0024166/?ref_=nm_knf_i2", genre: ["comedy", "musical", "romance"], year: "1933"},


];

const getAll = () => movies;

const getOne = id => movies.find(movie => movie.id === id);

const updateRating = (userRating, movieID) => {
  // let currentMovie = movies.find(movie => movie.id === movieID);
  // console.log(movieID)
  // currentMovie.rating = userRating
}

export default {
  getOne,
  getAll,
  updateRating

};
