//////////////////////////////////
//             HTML             //
//////////////////////////////////

////////
//Create
////////
// #1 - Cartelera
let mainComment = document.createComment("Main");
const main = document.createElement("main");
let mainCarteleraComment = document.createComment("Cartelera");
const mainCartelera = document.createElement("article");
let mainCarteleraContainerComment = document.createComment("#1 - Cartelera");
const mainCarteleraContainer = document.createElement("div");
// #2 - Selección
let mainCarteleraMovieSelectedComment =
  document.createComment("#2 - Información");
const mainCarteleraMovieSelected = document.createElement("div");
const movieSelected = document.createElement("div");
// MS = movie selected
//
// Izquierda poster
const MSPoster = document.createElement("img");
// const MSPosterContainer = document.createElement("section");
//
// Derecha información
// const MSInformation = document.createElement("section");
// Titulo
const MSInformationTitle = document.createElement("h2");
// Sinopsis
const MSInformationSinopsis = document.createElement("p");
// Contenedor con director, duración y género
const MSInformationContainer = document.createElement("div");
// Director
const MSInformationContainerDirector = document.createElement("div");
const MSInformationContainerDirectorLabel = document.createElement("span");
const MSInformationContainerDirectorName = document.createElement("span");
// Duración
const MSInformationContainerDuration = document.createElement("div");
const MSInformationContainerDurationLabel = document.createElement("span");
const MSInformationContainerDurationName = document.createElement("span");
// Género
const MSInformationContainerGenre = document.createElement("div");
const MSInformationContainerGenreLabel = document.createElement("span");
const MSInformationContainerGenreName = document.createElement("span");

// Fechas
const MSInformationFechas = document.createElement("ul");
// Fechas
const MSInformationHorario = document.createElement("ul");
// Back
const MSInformationButtons = document.createElement("div");
const MSInformationBack = document.createElement("a");
// Comprar
const MSInformationComprar = document.createElement("a");

// #3 - Felicidades
let mainFelicidadesComment = document.createComment("#3 - Felicidades");
const mainFelicidadesContainer = document.createElement("div");
const mainFelicidadesText = document.createElement("p");

const mainFelicidades = document.createElement("div");
const mainFelicidadesIncaaContainer = document.createElement("div");
const mainFelicidadesIncaa = document.createElement("img");
const mainFelicidadesInfoContainer = document.createElement("div");
const mainFelicidadesPelicula = document.createElement("p");
mainFelicidadesPelicula.textContent = "Película:";
const mainFelicidadesPeliculaSelected = document.createElement("span");
const mainFelicidadesSala = document.createElement("p");
mainFelicidadesSala.textContent = "Sala:";
const mainFelicidadesSalaSelected = document.createElement("span");
const mainFelicidadesHorario = document.createElement("p");
mainFelicidadesHorario.textContent = "Horario:";
const mainFelicidadesHorarioSelected = document.createElement("span");
const mainFelicidadesFecha = document.createElement("p");
mainFelicidadesFecha.textContent = "Fecha:";
const mainFelicidadesFechaSelected = document.createElement("span");

// Para agregar la fecha seria un loop entre element.fechas
// El horario se muestra cuando hago click en una fecha
// El botón continuar grayed out hasta que seleccione fecha && hora

// const mainCarteleraCongrats = document.createElement("div");
// const mainCiclos = document.createElement("article");
// const mainCiclosContainer = document.createElement("div");
// const mainCiclosInformation = document.createElement("div");
// const mainPrecios = document.createElement("article");

////////
//Append
////////
root.appendChild(mainComment);
root.appendChild(main);
// Cartelera
main.appendChild(mainCarteleraComment);
main.appendChild(mainCartelera);
// #1 - Cartelera
mainCartelera.appendChild(mainCarteleraContainerComment);
mainCartelera.appendChild(mainCarteleraContainer);
// #2 = Información
mainCartelera.appendChild(mainCarteleraMovieSelectedComment);
mainCartelera.appendChild(mainCarteleraMovieSelected);
mainCarteleraMovieSelected.appendChild(movieSelected);
//
// Izquierda poster
// movieSelected.appendChild(MSPosterContainer);
// MSPosterContainer.appendChild(MSPoster);
movieSelected.appendChild(MSPoster);
//
// Derecha información
// movieSelected.appendChild(MSInformation);
// Título
movieSelected.appendChild(MSInformationTitle);
// Sinopsis
movieSelected.appendChild(MSInformationSinopsis);
// Contenedor con director, duración y género
movieSelected.appendChild(MSInformationContainer);
// Director
MSInformationContainer.appendChild(MSInformationContainerDirector);
MSInformationContainerDirector.appendChild(MSInformationContainerDirectorLabel);
MSInformationContainerDirector.appendChild(MSInformationContainerDirectorName);
// Duración
MSInformationContainer.appendChild(MSInformationContainerDuration);
MSInformationContainerDuration.appendChild(MSInformationContainerDurationLabel);
MSInformationContainerDuration.appendChild(MSInformationContainerDurationName);
// Género
MSInformationContainer.appendChild(MSInformationContainerGenre);
MSInformationContainerGenre.appendChild(MSInformationContainerGenreLabel);
MSInformationContainerGenre.appendChild(MSInformationContainerGenreName);
// Fechas
movieSelected.appendChild(MSInformationFechas);
// Horario
movieSelected.appendChild(MSInformationHorario);
// Back
movieSelected.appendChild(MSInformationButtons);
MSInformationButtons.appendChild(MSInformationBack);
// Comprar
MSInformationButtons.appendChild(MSInformationComprar);

// #3 - Felicidades
mainCartelera.appendChild(mainFelicidadesComment);
mainCartelera.appendChild(mainFelicidadesContainer);
mainFelicidadesContainer.appendChild(mainFelicidadesText);
mainFelicidadesContainer.appendChild(mainFelicidades);
mainFelicidades.appendChild(mainFelicidadesIncaaContainer);
mainFelicidadesIncaaContainer.appendChild(mainFelicidadesIncaa);
mainFelicidades.appendChild(mainFelicidadesInfoContainer);
mainFelicidadesInfoContainer.appendChild(mainFelicidadesPelicula);
mainFelicidadesPelicula.appendChild(mainFelicidadesPeliculaSelected);
mainFelicidadesInfoContainer.appendChild(mainFelicidadesSala);
mainFelicidadesSala.appendChild(mainFelicidadesSalaSelected);
mainFelicidadesInfoContainer.appendChild(mainFelicidadesHorario);
mainFelicidadesHorario.appendChild(mainFelicidadesHorarioSelected);
mainFelicidadesInfoContainer.appendChild(mainFelicidadesFecha);
mainFelicidadesFecha.appendChild(mainFelicidadesFechaSelected);

//////////////////////////////////
//             STYLE            //
//////////////////////////////////
//Main
main.classList.add("main");
// #1 - Cartelera
mainCartelera.classList.add("cartelera");
// mainCarteleraContainer.classList.add("cartelera-container", "container");
mainCarteleraContainer.classList.add("cartelera-container");
// #2 - Información
// prettier-ignore
mainCarteleraMovieSelected.classList.add("selection-container", 'container',"hidden");
movieSelected.classList.add("selection");
//
// Izquierda poster
// MSPosterContainer.classList.add("selection-movie");
MSPoster.classList.add("selection-movie--poster");
//
// Derecha información
movieSelected.classList.add("selection-information");
// Titulo
MSInformationTitle.classList.add("selection-information--title");
// Contenedor con director, duración y género
MSInformationContainer.classList.add("selection-information__container");
// Director
// prettier-ignore
MSInformationContainerDirector.classList.add("selection-information__container--director", 'info-container');
// prettier-ignore
MSInformationContainerDirectorLabel.classList.add('selection-information__container--director-label', 'info-container', 'info-label');
// prettier-ignore
MSInformationContainerDirectorName.classList.add('selection-information__container--director-name', 'info-container', 'info-name')
// Duración
// prettier-ignore
MSInformationContainerDuration.classList.add("selection-information__container--duration", 'info-container');
// prettier-ignore
MSInformationContainerDurationLabel.classList.add('selection-information__container--duration-label', 'info-container', 'info-label');
// prettier-ignore
MSInformationContainerDurationName.classList.add('selection-information__container--duration-name', 'info-container', 'info-name');
// Género
MSInformationContainerGenre.classList.add(
  "selection-information__container--genre",
  "info-container"
);
// prettier-ignore
MSInformationContainerGenreLabel.classList.add('selection-information__container--genre-label', 'info-container', 'info-label');
// prettier-ignore
MSInformationContainerGenreName.classList.add('selection-information__container--genre-name', 'info-container', 'info-name');
// Sinopsis
MSInformationSinopsis.classList.add("selection-information--sinopsis");
// Fechas
MSInformationFechas.classList.add("selection-information__fechas");
// Horarios
MSInformationHorario.classList.add("selection-information__horarios");
// Botón container
MSInformationButtons.classList.add("selection-information__btns");
// Botón volver
MSInformationBack.textContent = "Volver";
MSInformationBack.classList.add("selection-information--back");
// Botón comprar
MSInformationComprar.textContent = "Comprar";
MSInformationComprar.classList.add("selection-information--comprar");

// #3 - Felicitaciones
// prettier-ignore
mainFelicidadesContainer.classList.add("felicidades-container","container","hidden");
mainFelicidadesText.classList.add("felicidades-paragraph");
mainFelicidadesText.textContent = "Boleto Oficial Cinematografico";
mainFelicidades.classList.add("felicidades");
mainFelicidadesIncaaContainer.classList.add("felicidades__incaa-container");
mainFelicidadesIncaa.src = "images/logos/INCAA_LOGO_2022_NEGRO.png";
mainFelicidadesIncaa.alt = "Logo INCAA";
mainFelicidadesInfoContainer.classList.add("felicidades__info-container");

mainFelicidadesPelicula.classList.add("felicidades__info-container--label");

// prettier-ignore
mainFelicidadesPeliculaSelected.classList.add("felicidades__info-container--selection");
mainFelicidadesPeliculaSelected.textContent = "placeholder";
mainFelicidadesSala.classList.add("felicidades__info-container--label");
// prettier-ignore
mainFelicidadesSalaSelected.classList.add("felicidades__info-container--selection");
mainFelicidadesHorario.classList.add("felicidades__info-container--label");
// prettier-ignore
mainFelicidadesHorarioSelected.classList.add("felicidades__info-container--selection");
mainFelicidadesFecha.classList.add("felicidades__info-container--label");
// prettier-ignore
mainFelicidadesFechaSelected.classList.add("felicidades__info-container--selection");

//////////////////////////////////
//              JS              //
//////////////////////////////////
const createMovies = (json) => {
  const item = Object.entries(json);
  item.map((i) => {
    createMovieContainer(i);
  });
};

const createMovieContainer = (movie) => {
  // Este element es cada pelicula en el json (element.cartelera.titulo me da el titulo, etc.)
  const element = movie[1];

  const movieContainer = document.createElement("div");
  mainCarteleraContainer.appendChild(movieContainer);

  const moviePoster = document.createElement("img");
  movieContainer.appendChild(moviePoster);

  movieContainer.classList.add("cartelera-container-movie");
  moviePoster.classList.add("cartelera-container-movie--poster");
  moviePoster.src = element.poster;
  moviePoster.alt = `${element.titulo} poster`;
};

fetch("cartelera.json")
  .then((response) => response.json())
  .then((json) => {
    createMovies(json);

    // Si no está adentro del fetch, no encuentra la clase
    const moviesContainer = document.querySelectorAll(
      ".cartelera-container-movie"
    );

    moviesContainer.forEach((poster, index) => {
      poster.addEventListener("click", () => {
        mainCarteleraContainer.classList.add("hidden");
        mainCarteleraMovieSelected.classList.remove("hidden");

        // JSON.parse
        const selectedMovie = json[Object.keys(json)[index]];

        MSPoster.src = selectedMovie.poster;
        MSInformationTitle.textContent = selectedMovie.titulo;
        MSInformationContainerDirectorLabel.textContent = "Director";
        MSInformationContainerDirectorName.textContent = selectedMovie.director;
        MSInformationContainerDurationLabel.textContent = "Duración";
        MSInformationContainerDurationName.textContent = selectedMovie.duracion;
        MSInformationContainerGenreLabel.textContent = "Género";
        MSInformationContainerGenreName.textContent = selectedMovie.genero[0];

        MSInformationSinopsis.textContent = selectedMovie.sinopsis;

        // Agregar dinamicamente las fechas
        for (let i = 0; i < selectedMovie.fechas.semana.length; i++) {
          const fecha = document.createElement("li");
          const diaSem = document.createElement("span");
          const diaMes = document.createElement("span");
          fecha.appendChild(diaSem);
          fecha.appendChild(diaMes);
          MSInformationFechas.appendChild(fecha);
          fecha.classList.add("selection-information__fechas--fecha");
          //id para seleccionar en la proxima pantalla
          fecha.setAttribute("id", `fecha-${i + 1}`);

          diaSem.textContent = selectedMovie.fechas.semana[i].slice(0, 3);
          diaMes.textContent = selectedMovie.fechas.numero[i];
        }

        // cuando haces click se agrega la clase active
        const date = document.querySelectorAll(
          ".selection-information__fechas--fecha"
        );
        date.forEach((element) => {
          element.addEventListener("click", () => {
            date.forEach((el) => {
              el.classList.remove("active");
            });
            element.classList.toggle("active");
          });
        });

        // Agregar dinamicamente los horarios
        for (let i = 0; i < selectedMovie.horario.length; i++) {
          console.log(selectedMovie.horario[i]);
          const hora = document.createElement("li");

          MSInformationHorario.appendChild(hora);
          //id para seleccionar en la proxima pantalla
          hora.setAttribute("id", `hora-${i + 1}`);
          hora.textContent = selectedMovie.horario[i];

          // cuando haces click se agrega la clase active
          hora.addEventListener("click", () => {
            hora.classList.toggle("active");
          });
        }

        const time = document.querySelectorAll(
          ".selection-information__horarios > li"
        );

        time.forEach((element) => {
          element.addEventListener("click", () => {
            time.forEach((el) => {
              el.classList.remove("active");
            });
            element.classList.toggle("active");
          });
        });

        let compra = {
          diaSemana: "",
          diaNumero: "",
          hora: "",
        };

        function verificarCompra() {
          let fechaSeleccionada = document.querySelector(
            ".selection-information__fechas--fecha.active"
          );
          let horaSeleccionada = document.querySelector(
            ".selection-information__horarios > .active"
          );
          compra.diaSemana = fechaSeleccionada.firstChild.textContent;
          compra.diaNumero = fechaSeleccionada.lastChild.textContent;
          compra.hora = horaSeleccionada.textContent;
        }

        // Boton comprar
        MSInformationComprar.addEventListener("click", () => {
          mainCarteleraMovieSelected.classList.add("hidden");
          mainFelicidadesContainer.classList.remove("hidden");
          mainFelicidades.classList.remove("hidden");
          // Compra
          verificarCompra();

          //#3 - Felicidades: agregar main felicidades al html inicial
          mainFelicidadesPeliculaSelected.textContent = ` ${selectedMovie.titulo}`;
          mainFelicidadesSalaSelected.textContent = ` ${selectedMovie.sala}`;
          mainFelicidadesHorarioSelected.textContent = ` ${compra.hora}`;
          mainFelicidadesFechaSelected.textContent = ` ${compra.diaSemana} ${compra.diaNumero}`;

          /*
          if (compra.diaSemana === "" && compra.diaNumero === "") {
            alert("No seleccionaste la fecha");
          } else if (compra.hora === "") {
            alert("No seleccionaste el horario");
          }
          */
        });
      });
    });

    MSInformationBack.addEventListener("click", () => {
      MSInformationFechas.innerHTML = "";
      MSInformationHorario.innerHTML = "";
      mainCarteleraContainer.classList.remove("hidden");
      mainCarteleraMovieSelected.classList.add("hidden");
    });
  });
