const cartelera = document.querySelector("#cartelera");
const carteleraContainer = document.querySelector(".cartelera-container");

const createMovies = (json) => {
  const item = Object.entries(json);
  item.map((i) => {
    createMovieContainer(i);
  });
};

const createMovieContainer = (movie) => {
  const element = movie[1];

  const movieContainer = document.createElement("div");
  carteleraContainer.appendChild(movieContainer);

  const movieLink = document.createElement("a"); // Cambiamos a un elemento enlace
  movieContainer.appendChild(movieLink);

  const moviePoster = document.createElement("img");
  movieLink.appendChild(moviePoster);

  movieContainer.classList.add("cartelera-container-movie");
  movieLink.target = "_BLANK"; // Establecer la URL del enlace
  movieLink.href = `/${element.url}`; // Establecer la URL del enlace
  moviePoster.classList.add("cartelera-container-movie--poster");
  moviePoster.src = element.poster;
  moviePoster.alt = `${element.titulo} poster`;
};

fetch("cartelera.json")
  .then((response) => response.json())
  .then((json) => {
    createMovies(json);
  });

// ni idea, pero para entrar a cada peli

// Define una función para manejar el cambio de ruta
const handleRouteChange = () => {
  // Obtén la parte de la ruta de la URL actual
  const path = window.location.pathname;

  // Verifica si el JSON se ha cargado
  if (json) {
    // Busca la película correspondiente en el JSON basándote en la URL actual
    const currentMovie = Object.values(json).find(
      (movie) => `/${movie.url}` === path
    );

    // Verifica si se encontró la película correspondiente
    if (currentMovie) {
      // Lógica para mostrar la información de la película actual
      console.log("Mostrando información de la película:", currentMovie.titulo);
    }
  } else {
    console.log("JSON no cargado aún");
  }
};

let json; // Declara la variable json fuera de cualquier función para que sea accesible en todo el script

// Ejecuta la función al cargar la página y cada vez que cambie la URL
window.addEventListener("load", () => {
  // Cargar el JSON
  fetch("cartelera.json")
    .then((response) => response.json())
    .then((data) => {
      json = data; // Asigna el JSON cargado a la variable json
      handleRouteChange(); // Llama a la función handleRouteChange una vez que el JSON se haya cargado
    })
    .catch((error) => console.error("Error al cargar el JSON:", error));
});

window.addEventListener("popstate", () => {
  // Llamar a handleRouteChange con el JSON cargado cuando cambie la URL
  handleRouteChange();
});
