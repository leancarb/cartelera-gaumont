let moviesData = {}; // Este objeto almacenará los datos de las películas

document.addEventListener("DOMContentLoaded", () => {
  fetch("cartelera.json")
    .then((response) => response.json())
    .then((json) => {
      moviesData = json; // Almacena los datos de las películas globalmente
      createMovies(json);
    })
    .catch((error) => console.error("Error loading JSON:", error));
});

function createMovies(json) {
  const carteleraContainer = document.querySelector(".cartelera-container");

  Object.entries(json).forEach(([key, value]) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("cartelera-container-movie");

    const movieLink = document.createElement("a");
    movieLink.href = `javascript:void(0);`; // Evitar la navegación real
    movieLink.dataset.url = value.url; // Usamos dataset para almacenar la URL
    movieLink.classList.add("movie-link");
    movieContainer.appendChild(movieLink);

    const moviePoster = document.createElement("img");
    moviePoster.src = value.poster;
    moviePoster.alt = `${value.titulo} poster`;
    moviePoster.classList.add("cartelera-container-movie--poster");
    movieLink.appendChild(moviePoster);

    movieLink.addEventListener("click", () => {
      loadMovieDetails(value.url); // Carga los detalles usando la URL de la película
    });

    carteleraContainer.appendChild(movieContainer);
  });
}

function loadMovieDetails(movieUrl) {
  // Buscamos la película por su URL en moviesData
  const movie = Object.values(moviesData).find(
    (movie) => movie.url === movieUrl
  );
  if (!movie) {
    console.error("Película no encontrada con URL:", movieUrl);
    return;
  }

  // Actualiza el DOM con los detalles de la película
  document.getElementById("movie-title").textContent = movie.titulo;
  document.getElementById("movie-poster").src = movie.poster;
  document.getElementById("movie-poster").alt = `${movie.titulo} poster`;

  // Muestra el contenedor de detalles de la película
  document.getElementById("movie-details").style.display = "block";
}
