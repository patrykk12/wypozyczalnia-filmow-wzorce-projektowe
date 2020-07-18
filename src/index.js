import { MovieList } from "./Classes/MovieList";

const submitForm = document.getElementById("form");
const movieList = new MovieList();

// Akcja dodawania filmu
submitForm.onsubmit = function (e) {
  e.preventDefault();
  movieList.addMovieToDb();
};

// Pobranie danych z bazy danych i wypełnienie nimi tabeli
movieList.getMoviesFromDb();
