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

// PLACEHOLDER
const navItems = {
  1: {
    text: "cartelera",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
  `,
  },
  2: {
    text: "especiales",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
  </svg>
  `,
  },
  3: {
    text: "precios",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
  </svg>
  `,
  },
};
// Create UL y append
/*
// Loop para agregar cada array item al UL
navItems.map((i) => {
  // Create LI, A
  const navLI = document.createElement("li");
  const navAnchor = document.createElement("a");
  // Poner text a cada A
  navLI.classList.add("nav__list-item");
  navAnchor.classList.add("nav__list-item--anchor");
  navAnchor.textContent = i;
  // Append LI, A al UL
  navUL.appendChild(navLI);
  navLI.appendChild(navAnchor);
});
*/

// Recorre el objeto navItems usando un bucle "for...in"
for (let i = 1; i <= Object.keys(navItems).length; i++) {
  const item = navItems[i];

  // Crea un elemento LI
  const navLI = document.createElement("li");

  // Crea un elemento DIV para el texto
  const textDiv = document.createElement("p");
  textDiv.textContent = item.text;

  // Crea un elemento IMG para el icono y establece su atributo src
  const iconImg = document.createElement("div");
  iconImg.innerHTML = item.icon;

  // Añade el icono como hijo del LI
  navLI.appendChild(iconImg);

  // Añade el texto como hijo del LI
  navLI.appendChild(textDiv);

  // Añade el LI como hijo del UL del navbar
  navUL.appendChild(navLI);

  navLI.classList.add("nav__list-item");
}

////////////////////////////
/////////// MAIN ///////////
////////////////////////////

// Funcion principal para crear la cartelera
function createMovies(json) {
  // JSON a Array
  const entries = Object.entries(json);
  // Map para iterar
  entries.map((i) => {
    // Cada iteración, crea element
    createMovieContainer(i);
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
  // const movieTitle = document.createElement("p");
  // const movieDuration = document.createElement("p");
  // const movieSinopsis = document.createElement("p");

  // #Append
  movieContainer.appendChild(moviePoster);
  movieContainer.appendChild(movieDescription);
  // movieDescription.appendChild(movieTitle);
  // movieDescription.appendChild(movieDuration);
  // movieDescription.appendChild(movieSinopsis);

  // #Content
  movieContainer.classList.add("main__container-movie");
  moviePoster.classList.add("main__container-movie--poster");
  moviePoster.src = element.poster;
  moviePoster.alt = `${element.titulo} poster`;
  // BORRAR STRONG, poner text content
  // movieDescription.classList.add("main__container-movie-description");
  // movieTitle.innerHTML = ` <strong>${element.titulo}</strong>`;
  // movieTitle.classList.add("main__container-movie-description--title");
  // movieDuration.classList.add("main__container-movie-description--duration");
  // movieDuration.innerHTML = `duración <span>${element.duracion}</span>`;
  // movieSinopsis.textContent = element.sinopsis;
  // movieSinopsis.classList.add("main__container-movie-description--sinopsis");

  // En cada película se abre el overlay
  movieContainer.addEventListener("click", openModal);

  // Si es epecial le pone border bottom
  if (element.especial === true) {
    moviePoster.style.borderBottom = ".25rem solid #7a65ff";
  }
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
