// #Selection
const root = document.getElementById("root");
const body = document.querySelector("body");

// #Create
// #Create header
const header = document.createElement("header");
const headerLogo = document.createElement("img");
// #Create main
const main = document.createElement("main");
const mainContainer = document.createElement("div");
/*
// #Create footer
const footer = document.createElement("footer");
const footerLogoContainer = document.createElement("div");
const footerLogo = document.createElement("img");
const footerInfoContainer = document.createElement("div");
const footerInfoAddress = document.createElement("p");
const footerInfoAddressSpan = document.createElement("span");
const footerInfoPhone = document.createElement("p");
const footerInfoPhoneSpan = document.createElement("span");
const footerSocialContainer = document.createElement("div");*/
const footerUL = document.createElement("ul");
/* */
// #Create nav
const nav = document.createElement("nav");
const navUL = document.createElement("ul");
// #Create overlay
const mainModal = document.createElement("div");
const overlayButton = document.createElement("button");
const overlayHeading = document.createElement("h2");
const overlayParagraph = document.createElement("p");
const mainOverlay = document.createElement("div");

// #Append
function appendChild() {
  // #Append header
  root.appendChild(header);
  header.appendChild(headerLogo);
  // #Append main
  root.appendChild(main);
  main.appendChild(mainContainer);
  // #Append nav
  root.appendChild(nav);
  nav.appendChild(navUL);
  /*
  // #Append footer
  root.appendChild(footer);
  footer.appendChild(footerLogoContainer);
  footerLogoContainer.appendChild(footerLogo);
  footer.appendChild(footerInfoContainer);
  footerInfoContainer.appendChild(footerInfoAddress);
  // NO LO PUEDO PONER ADENTRO DEL p
  footerInfoContainer.appendChild(footerInfoAddressSpan);
  footerInfoContainer.appendChild(footerInfoPhone);
  footerInfoPhone.appendChild(footerInfoPhoneSpan);
  footer.appendChild(footerSocialContainer);
  footerSocialContainer.appendChild(footerUL);
  */
  // #Append overlay
  main.appendChild(mainModal);
  mainModal.appendChild(overlayButton);
  mainModal.appendChild(overlayHeading);
  mainModal.appendChild(overlayParagraph);
  main.appendChild(mainOverlay);
}
appendChild();

// #Content
function content() {
  // #Content header
  header.classList.add("header");
  headerLogo.src = "images/logos/GAUMONT_LOGO_azul.png";
  headerLogo.alt = "Logo Gaumont";
  headerLogo.classList.add("header__logo");
  // #Content main
  main.classList.add("main");
  mainContainer.classList.add("main__container");
  // #Content nav
  nav.classList.add("nav");
  navUL.classList.add("nav__list");
  /*
  // #Content footer
  footer.classList.add("footer");
  footerLogoContainer.classList.add("footer__img");
  footerLogo.src = "images/logos/INCAA_LOGO_2022_AZUL_CMYK.png";
  footerLogo.alt = "Logo footer";
  footerLogo.classList.add("footer__img-logo");
  footerInfoContainer.classList.add("footer__info");
  footerInfoAddress.classList.add("footer__info--address");
  footerInfoAddress.textContent = "dirección rivadavia 1635, caba";
  footerInfoPhone.classList.add("footer__info--phone");
  footerInfoPhone.textContent = "teléfono 3220-1921";
  footerSocialContainer.classList.add("footer__social");
  footerUL.classList.add("footer__social__list");
  */
  // #Content overlay
  mainModal.classList.add("modal", "hidden");
  overlayButton.type = "button";
  overlayButton.textContent = "X";
  overlayButton.classList.add("close-modal");
  overlayHeading.textContent = "caminemos valentina";
  overlayParagraph.textContent = "director: alberto lecchi";
  mainOverlay.classList.add("overlay", "hidden");
}
content();

//////////////////////////////
/////////// NAVBAR ///////////
//////////////////////////////

// Array con navbar items
const navItems = ["cartelera", "especiales", "precios"];
// Create UL y append

// Loop para agregar cada array item al UL
for (let i = 0; i < navItems.length; i++) {
  // Create LI, A
  const navLI = document.createElement("li");
  const navAnchor = document.createElement("a");
  // Append LI, A
  navUL.appendChild(navLI);
  navLI.appendChild(navAnchor);
  // Poner text a cada A
  navLI.classList.add("nav__list-item");
  navAnchor.classList.add("nav__list-item--anchor");
  navAnchor.textContent = navItems[i];
}

////////////////////////////
/////////// MAIN ///////////
////////////////////////////

// Funcion principal para crear la cartelera
function createMovies(json) {
  // JSON a Array
  const entries = Object.entries(json);
  // Map para iterar
  entries.map((e) => {
    // Cada iteración, crea element
    createMovieContainer(e);
  });
}

// Función para poner el poster y título de cada película
function createMovieContainer(movie) {
  // Cada elemento son dos arrays:
  // [0] es el nombre de la película
  // [1] es el objeto
  const element = movie[1];
  // #Create y append movie container (1 por cada película)
  const movieContainer = document.createElement("div");
  mainContainer.appendChild(movieContainer);

  // #Create
  const moviePoster = document.createElement("img");
  const movieDescription = document.createElement("div");
  const movieTitle = document.createElement("p");
  const movieDuration = document.createElement("p");
  const movieSinopsis = document.createElement("p");

  // #Append
  movieContainer.appendChild(moviePoster);
  movieContainer.appendChild(movieDescription);
  movieDescription.appendChild(movieTitle);
  movieDescription.appendChild(movieDuration);
  movieDescription.appendChild(movieSinopsis);

  // #Content
  movieContainer.classList.add("main__container-movie");
  moviePoster.classList.add("main__container-movie--poster");
  moviePoster.src = element.poster;
  moviePoster.alt = `${element.titulo} poster`;
  // BORRAR STRONG, poner text content
  movieDescription.classList.add("main__container-movie-description");
  movieTitle.innerHTML = ` <strong>${element.titulo}</strong>`;
  movieTitle.classList.add("main__container-movie-description--title");
  movieDuration.classList.add("main__container-movie-description--duration");
  movieDuration.innerHTML = `duración <span>${element.duracion}</span>`;
  movieSinopsis.textContent = element.sinopsis;
  movieSinopsis.classList.add("main__container-movie-description--sinopsis");

  // En cada película se abre el overlay
  movieContainer.addEventListener("click", openModal);
}

// Llama al json
fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    createMovies(json);
  });

////////////////////////////
////////// FOOTER //////////
////////////////////////////

// Array redes
footerSocials = ["twitter", "facebook", "instagram", "flickr", "youtube"];

// Loop para agregar cada array item al UL
for (let i = 0; i < footerSocials.length; i++) {
  // #Create
  const footerLI = document.createElement("li");
  const footerAnchor = document.createElement("a");
  // #Append
  footerUL.appendChild(footerLI);
  footerLI.appendChild(footerAnchor);
  // #Content
  footerAnchor.textContent = footerSocials[i];
  footerLI.classList.add("footer__social__list-item");
  footerAnchor.classList.add("footer__social__list-item--anchor");
}

////////////////////////////
////////// OVERLAY /////////
////////////////////////////

// #Selection overlay
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

// Función abrir modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  // Previene scroll
  body.style.overflow = "hidden";
};
// Función cerrar modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.style.overflow = "";
};

// Cierra overlay con botón
btnCloseModal.addEventListener("click", closeModal);
// Cierra overlay tocando afuera
overlay.addEventListener("click", closeModal);
// Cierra overlay con escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/*
// CAMBIAR UBICACION DEL NAV SI ES MOBILE O WEB
// Obtener la ventana actual
const ventana = window;

// Función para verificar si es un dispositivo móvil
function esDispositivoMovil() {
  return ventana.innerWidth <= 768; // Ajusta este valor según tus necesidades
}

// Función para mover la barra de navegación
function actualizarUbicacionBarraNavegacion() {
  const navbar = document.getElementById('navbar');
  const main = document.querySelector('main');

  if (esDispositivoMovil()) {
    // Mover la barra de navegación a la parte inferior
    main.appendChild(navbar);
  } else {
    // Mover la barra de navegación a la parte superior
    document.body.insertBefore(navbar, main);
  }
}

// Llamar a la función al cargar la página y cuando se cambie el tamaño de la ventana
ventana.addEventListener('load', actualizarUbicacionBarraNavegacion);
ventana.addEventListener('resize', actualizarUbicacionBarraNavegacion);
*/
