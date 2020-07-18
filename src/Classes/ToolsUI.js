import { RentService } from "./RentService";
import { MovieList } from "./MovieList";

const rentService = new RentService();

export class ToolsUI {
  constructor() {}

  createMovie() {
    const inputName = document.getElementById("name").value;
    const inputGenre = document.getElementById("genre").value;
    const inputProductionYear = document.getElementById("productionYear").value;
    const inputLength = document.getElementById("length").value;

    return {
      inputName,
      inputGenre,
      inputProductionYear,
      inputLength,
    };
  }

  getMovies() {
    const movies = new MovieList().getAll();
    const tableMovies = document
      .getElementById("tableMovies")
      .getElementsByTagName("tbody")[0];

    const tr = document.querySelectorAll("#body tr");

    tr.forEach((item) => {
      item.remove();
    });

    movies.forEach((movie, index) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${movie.name}</td>
        <td>${movie.movieFlyweight.genre}</td>
        <td>${movie.movieFlyweight.productionYear}</td>
        <td>${movie.length}</td>
        <td><button type="button" id="bookBtn">Wypożycz</button></td>
      `;

      tr.setAttribute("id", movie.id);
      tableMovies.appendChild(tr);
      const bookBtns = document.querySelectorAll("#tableMovies #bookBtn");
      bookBtns[index].addEventListener("click", function () {
        rentService.click();
        this.innerHTML =
          rentService.sign() === "Rented" ? "Anuluj" : "Wypożycz";
      });
    });
  }
}
