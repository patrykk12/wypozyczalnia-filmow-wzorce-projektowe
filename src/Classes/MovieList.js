import { ToolsUI } from "./ToolsUI";
import { CreateMovie } from "./CreateMovie";
import { Http } from "./Http";
import { Iterator } from "./Iterator";

const toolsUi = new ToolsUI();
let allMovies = [];
const http = new Http();

export class MovieList {
  constructor() {}
  //Dodajemy nowy film do listy
  add({ id, name, genre, productionYear, length }) {
    allMovies.push(new CreateMovie(id, name, genre, productionYear, length));
  }

  //Pobranie filmu z DB
  getMoviesFromDb() {
    allMovies.length = 0;
    return http
      .get("https://5f10862100d4ab0016134fd0.mockapi.io/movies")
      .then((movies) => {
        const iterator = new Iterator(movies.data);
        iterator.each((movie) => {
          this.add(movie);
        });
      })
      .finally(() => {
        return toolsUi.getMovies();
      });
  }

  //Dodanie filmu do BB
  addMovieToDb() {
    const formData = toolsUi.createMovie();

    http
      .post("https://5f10862100d4ab0016134fd0.mockapi.io/movies", {
        name: formData.inputName,
        genre: formData.inputGenre,
        productionYear: formData.inputProductionYear,
        length: formData.inputLength,
      })
      .finally(() => {
        new MovieList().getMoviesFromDb();
        return toolsUi.getMovies();
      });
  }

  getAll() {
    return allMovies;
  }
}
