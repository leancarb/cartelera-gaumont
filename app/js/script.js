// #Selección
const root = document.getElementById("root");
const body = document.querySelector("body");

/** #Create
 * Header
 * Main
 * Footer
 * Nav
 * Overlay
 */
const header = document.createElement("header");
const headerLogo = document.createElement("img");

const main = document.createElement("main");
const mainContainer = document.createElement("div");

// Footer
// const footer = document.createElement("footer");
// const footerLogoContainer = document.createElement("div");
// const footerLogo = document.createElement("img");
// const footerInfoContainer = document.createElement("div");
// const footerInfoAddress = document.createElement("p");
// const footerInfoAddressSpan = document.createElement("span");
// const footerInfoPhone = document.createElement("p");
// const footerInfoPhoneSpan = document.createElement("span");
// const footerSocialContainer = document.createElement("div");
// const footerUL = document.createElement("ul");

const nav = document.createElement("nav");
const navUL = document.createElement("ul");

const mainModal = document.createElement("div");
const overlayButton = document.createElement("button");
const overlayHeading = document.createElement("h2");
const overlayParagraph = document.createElement("p");
const mainOverlay = document.createElement("div");

/** #Append
 * Header
 * Main
 * Nav
 * Footer
 * Overlay
 */
const appendChild = () => {
  root.appendChild(header);
  header.appendChild(headerLogo);

  root.appendChild(main);
  main.appendChild(mainContainer);

  root.appendChild(nav);
  nav.appendChild(navUL);

  // root.appendChild(footer);
  // footer.appendChild(footerLogoContainer);
  // footerLogoContainer.appendChild(footerLogo);
  // footer.appendChild(footerInfoContainer);
  // footerInfoContainer.appendChild(footerInfoAddress);
  // NO LO PUEDO PONER ADENTRO DEL p
  // footerInfoContainer.appendChild(footerInfoAddressSpan);
  // footerInfoContainer.appendChild(footerInfoPhone);
  // footerInfoPhone.appendChild(footerInfoPhoneSpan);
  // footer.appendChild(footerSocialContainer);
  // footerSocialContainer.appendChild(footerUL);

  main.appendChild(mainModal);
  mainModal.appendChild(overlayButton);
  mainModal.appendChild(overlayHeading);
  mainModal.appendChild(overlayParagraph);
  main.appendChild(mainOverlay);
};
appendChild();

/** #Content
 * Header
 * Main
 * Nav
 * Footer
 * Overlay
 */
const content = () => {
  header.classList.add("header");
  headerLogo.src = "images/logos/GAUMONT_LOGO_azul.png";
  headerLogo.alt = "Logo Gaumont";
  headerLogo.classList.add("header__logo");

  main.classList.add("main");
  mainContainer.classList.add("main__container");

  nav.classList.add("nav");
  navUL.classList.add("nav__list");

  // footer.classList.add("footer");
  // footerLogoContainer.classList.add("footer__img");
  // footerLogo.src = "images/logos/INCAA_LOGO_2022_AZUL_CMYK.png";
  // footerLogo.alt = "Logo footer";
  // footerLogo.classList.add("footer__img-logo");
  // footerInfoContainer.classList.add("footer__info");
  // footerInfoAddress.classList.add("footer__info--address");
  // footerInfoAddress.textContent = "dirección rivadavia 1635, caba";
  // footerInfoPhone.classList.add("footer__info--phone");
  // footerInfoPhone.textContent = "teléfono 3220-1921";
  // footerSocialContainer.classList.add("footer__social");
  // footerUL.classList.add("footer__social__list");

  mainModal.classList.add("modal", "hidden");
  overlayButton.type = "button";
  overlayButton.textContent = "X";
  overlayButton.classList.add("close-modal");
  mainOverlay.classList.add("overlay", "hidden");
};
content();

//////////////////////////////
/////////// NAVBAR ///////////
//////////////////////////////

// Array para el navbar
const navItems = [
  { title: "cartelera", icon: "home" },
  { title: "especiales", icon: "theaters" },
  { title: "precios", icon: "wallet" },
];

/** Loop para iterar por el objeto
 * Create span, li y a
 * Append span, li y a
 * Content span, li y a
 */
navItems.map((i) => {
  const navIcon = document.createElement("span");
  const navLI = document.createElement("li");
  const navAnchor = document.createElement("a");

  navLI.appendChild(navIcon);
  navLI.appendChild(navAnchor);
  navUL.appendChild(navLI);

  navIcon.innerHTML = `${i.icon}`;
  navIcon.alt = `icono ${i.title}`;
  navIcon.classList.add("nav__list-item--icon", "material-symbols-outlined");

  navLI.classList.add("nav__list-item");
  navAnchor.classList.add("nav__list-item--anchor");
  navAnchor.href = "#";

  navAnchor.textContent = i.title;
});

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

  overlayHeading.textContent = `${element.titulo}`;
  overlayHeading.style.textTransform = "capitalize";
  overlayParagraph.textContent = `Dirección: ${element.director}`;

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

////////////////////////////
////////// FOOTER //////////
////////////////////////////

/* Por ahora sin footer
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
*/

////////////////////////////
////////// OVERLAY /////////
////////////////////////////

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
function calculatePosition() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const modalHeight = modal.offsetHeight;

  const top = scrollY + (windowHeight - modalHeight) / 2; // Ajustar el cálculo
  modal.style.top = `${top}px`;

  overlay.style.top = `${scrollY}px`;
  overlay.style.height = `${windowHeight}px`;
}

/** openModal()
 * Remueve la clase hidden al modal
 * Remueve la clase hidden al overlay
 * Previene el scroll cuando está abierto
 */
const openModal = function () {
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
