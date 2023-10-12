const body = document.querySelector("body");
const root = document.getElementById("root");
//////////////
// Create
//////////////
// Header
const header = document.createElement("header");
const headerContainerLogo = document.createElement("div");
const headerLogo = document.createElement("img");
const headerNavbar = document.createElement("nav");
const headerNavbarList = document.createElement("ul");

// Main
const main = document.createElement("main");
const mainContainer = document.createElement("div");
// Modal
const mainModal = document.createElement("div");
const modalButton = document.createElement("button");
const modalHeading = document.createElement("h2");
const modalParagraph = document.createElement("p");
/* Falta agregar todo lo que vaya en el modal */
// Overlay
const mainOverlay = document.createElement("div");

// Navbar Mobile
const navbar = document.createElement("nav");
const navbarList = document.createElement("ul");

// Footer
const footer = document.createElement("footer");

//////////////
// Append
//////////////
// Header
root.appendChild(header);
header.appendChild(headerContainerLogo);
headerContainerLogo.appendChild(headerLogo);
header.appendChild(headerNavbar);
headerNavbar.appendChild(headerNavbarList);

// Main
root.appendChild(main);
main.appendChild(mainContainer);
main.appendChild(mainModal);
main.appendChild(mainOverlay);
// Modal
main.appendChild(mainModal);
mainModal.appendChild(modalButton);
mainModal.appendChild(modalHeading);
mainModal.appendChild(modalParagraph);
main.appendChild(mainOverlay);

// Navbar Mobile
root.appendChild(navbar);
navbar.appendChild(navbarList);

// Footer
root.appendChild(footer);

//////////////
// Content
//////////////
// Header
header.classList.add("header");
headerContainerLogo.classList.add("header__container");
headerLogo.src = "images/logos/GAUMONT_LOGO_azul.png";
headerLogo.alt = "Logo Gaumont";
headerLogo.classList.add("header__container-logo", "logo");

headerNavbar.classList.add("header__navbar");
headerNavbarList.classList.add("header__navbar-list");

// Main
main.classList.add("main");
mainContainer.classList.add("main__container");
// Modal
mainModal.classList.add("modal", "hidden");
modalButton.type = "button";
modalButton.textContent = "X";
modalButton.classList.add("close-modal");
mainOverlay.classList.add("overlay", "hidden");

// Navbar Mobile
navbar.classList.add("nav");
navbarList.classList.add("nav__list");

// Footer
footer.classList.add("footer");
footer.innerHTML = `&copy; Cartelera Gaumont 2023`;

//////////////////////////////
/////////// NAVBAR ///////////
//////////////////////////////

const headerNavbarItems = [
  { title: "cartelera", icon: "home" },
  { title: "especiales", icon: "theaters" },
  { title: "precios", icon: "wallet" },
];

headerNavbarItems.map((i) => {
  const headerNavIcon = document.createElement("span");
  const headerNavLI = document.createElement("li");
  const headerNavAnchor = document.createElement("a");

  headerNavLI.appendChild(headerNavIcon);
  headerNavLI.appendChild(headerNavAnchor);
  headerNavbarList.appendChild(headerNavLI);

  headerNavIcon.innerHTML = `${i.icon}`;
  headerNavIcon.alt = `icono ${i.title}`;
  headerNavIcon.classList.add(
    "header__navbar-list-item--icon",
    "material-symbols-outlined",
    "icon"
  );

  headerNavLI.classList.add("header__navbar-list-item", "list-item");
  headerNavAnchor.classList.add("header__navbar-list-item--anchor", "anchor");
  headerNavAnchor.href = "#";

  headerNavAnchor.textContent = i.title;
});

// Codigo viejo
// const navListItem = document.querySelectorAll(".nav__list-item");
// const navListItemIcon = document.querySelectorAll(".nav__list-item--icon");
// const navListItemAnchor = document.querySelectorAll(".nav__list-item--anchor ");

// // Cuando hago click en el list item agrega la clase active al icon y al anchor, elimina la clase a los demas
// navListItem.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.add("active");
//   });
// });

// // Por default le agrega la clase active al icono y al anchor
// document.querySelector(".nav__list-item--icon").classList.add("active");
// document.querySelector(".nav__list-item--anchor").classList.add("active");

////////////////////////////
/////////// MAIN ///////////
////////////////////////////

/** Convertir JSON en Object
 * @param json Convierte el JSON en objeto
 * Itera por cada película y llama a la función createMovieContainer
 */
const createMovies = (json) => {
  const entries = Object.entries(json);
  entries.map((i) => {
    createMovieContainer(i);
  });
};

/** Crear poster de cada película
 * @param movie Cada película en el objeto
 * De cada película crea dos arrays:
 * [0] Es el nombre de la película (ex: "caminemos_valentina")
 * [1] Todas las propiedades del objeto, accedo a este (movie[1])
 *
 * Crea y append un div por cada película
 * Create y append img (poster)
 * Content del poster
 *
 * Content del Overlay
 *
 * Listens clicks y abre el modal/overlay al tocar cada img
 * Si es festival le pone un border bottom
 */
const createMovieContainer = (movie) => {
  const element = movie[1];

  const movieContainer = document.createElement("div");
  mainContainer.appendChild(movieContainer);

  const moviePoster = document.createElement("img");
  movieContainer.appendChild(moviePoster);

  movieContainer.classList.add("main__container-movie");
  moviePoster.classList.add("main__container-movie--poster");
  moviePoster.src = element.poster;
  moviePoster.alt = `${element.titulo} poster`;

  modalHeading.textContent = `${element.titulo}`;
  modalHeading.style.textTransform = "capitalize";
  modalParagraph.textContent = `Dirección: ${element.director}`;

  movieContainer.addEventListener("click", openModal);

  if (element.especial === true) {
    moviePoster.style.borderBottom = ".2rem solid #7a65ff";
  }
};

/** Acceder al JSON
 * Accede al JSON y llama createMovies() que convierte el JSON en Object, la cual llama createMovieContainer() que crea el poster por cada película
 */
fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    createMovies(json);
  });

//////////////////////////////
///////// NAV MOBILE /////////
//////////////////////////////

headerNavbarItems.map((i) => {
  const navLI = document.createElement("li");
  const navIcon = document.createElement("span");
  const navAnchor = document.createElement("a");

  navLI.appendChild(navIcon);
  navLI.appendChild(navAnchor);
  navbarList.appendChild(navLI);

  // Agarrar el primer LI del nav y ponerle la clase active

  navIcon.innerHTML = `${i.icon}`;
  navIcon.alt = `icono ${i.title}`;
  navIcon.classList.add(
    "nav__list-item--icon",
    "material-symbols-outlined",
    "icon"
  );

  navLI.classList.add("nav__list-item", "list-item");
  navAnchor.classList.add("nav__list-item--anchor", "anchor");
  navAnchor.href = "#";

  navAnchor.textContent = i.title;

  // Agregar clase active

  navLI.addEventListener("click", () => {
    const eachIcon = document.querySelectorAll(".nav__list-item--icon");
    const eachAnchor = document.querySelectorAll(".nav__list-item--anchor");

    eachIcon.forEach((element) => {
      element.classList.remove("active");
    });

    eachAnchor.forEach((element) => {
      element.classList.remove("active");
    });

    navIcon.classList.add("active");
    navAnchor.classList.add("active");
  });
});

// window.onload(firstLI.classList.add("active"));

// ////////////////////////////
// ////////// FOOTER //////////
// ////////////////////////////

// /* Footer viejo
// // Array redes
// footerSocials = ["twitter", "facebook", "instagram", "flickr", "youtube"];

// // Loop para agregar cada array item al UL
// for (let i = 0; i < footerSocials.length; i++) {
//   // #Create
//   const footerLI = document.createElement("li");
//   const footerAnchor = document.createElement("a");
//   // #Append
//   footerUL.appendChild(footerLI);
//   footerLI.appendChild(footerAnchor);
//   // #Content
//   footerAnchor.textContent = footerSocials[i];
//   footerLI.classList.add("footer__social__list-item");
//   footerAnchor.classList.add("footer__social__list-item--anchor");
// }
// */

// ////////////////////////////
// ////////// OVERLAY /////////
// ////////////////////////////

// #Selección
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

/** calculatePosition()
 * Calcula la posición actual del scroll
 * Calcula la altura de la ventana
 * Calcula la altura del modal
 * Cálculo para saber los px para centrar el modal
 * Centra el modal verticalmente
 * El top del overlay = la posición actual del scroll
 * Altura del overlay = altura de la ventana 100%
 *
 */
const calculatePosition = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const modalHeight = modal.offsetHeight;

  const top = scrollY + (windowHeight - modalHeight) / 2; // Ajustar el cálculo
  modal.style.top = `${top}px`;

  overlay.style.top = `${scrollY}px`;
  overlay.style.height = `${windowHeight}px`;
};

/** openModal()
 * Remueve la clase hidden al modal
 * Remueve la clase hidden al overlay
 * Previene el scroll cuando está abierto
 */
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  // Prevent scroll
  body.style.overflow = "hidden";

  // Calculate and set the modal and overlay positions
  calculatePosition();
};

/** closeModal()
 * Añade la clase hidden al modal
 * Añade la clase hidden al overlay
 * Permite el scroll al cerrar
 */
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.style.overflow = "";
};

/** Listens the window
 * This ensures that the calculateModalPosition function is called whenever the user scrolls the page. It keeps the modal and overlay centered even when the user scrolls.
 * This event listener handles window resizing. When the user resizes the window, it recalculates the modal and overlay positions to keep them centered correctly.
 */
window.addEventListener("scroll", calculatePosition);
window.addEventListener("resize", calculatePosition);

/** Cerrar overlay
 * #1 Click al botón (X)
 * #2 Tocando afuera del modal (el overlay)
 * #3 Tocando Escape
 */
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
