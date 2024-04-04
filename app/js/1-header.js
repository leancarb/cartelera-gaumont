//////////////////////////////////
//             HTML             //
//////////////////////////////////

//Create
let headerComment = document.createComment("Header");
const header = document.createElement("header");
let headerContainerComment = document.createComment("Logo");
const headerContainer = document.createElement("div");
const headerContainerLogo = document.createElement("img");
let headerNavbarComment = document.createComment("Navbar");
const headerNavbar = document.createElement("nav");

// prettier-ignore
let headerNavbarElements = [
  { id: "cartelera", active: true, icon: "home", label: "cartelera", },
  { id: "ciclos", active: false, icon: "theaters", label: "ciclos", },
  { id: "precios", active: false, icon: "payments", label: "precios", },
];

headerNavbarElements.map((element) => {
  const headerNavbarItem = document.createElement("a");
  const headerNavbarIcon = document.createElement("span");
  const headerNavbarText = document.createElement("span");

  headerNavbar.appendChild(headerNavbarItem);
  headerNavbarItem.appendChild(headerNavbarIcon);
  headerNavbarItem.appendChild(headerNavbarText);

  // Style
  headerNavbarItem.classList.add("header-navbar__item");
  headerNavbarItem.setAttribute("id", `${element.id}-header`);
  headerNavbarItem.id = `${element.id}-header`;

  // prettier-ignore
  headerNavbarIcon.classList.add("header-navbar__item--icon", "material-symbols-outlined");
  // prettier-ignore
  if (element.active === true) { headerNavbarIcon.classList.add("active"), headerNavbarText.classList.add("active");}
  headerNavbarIcon.textContent = `${element.icon}`;

  headerNavbarText.classList.add("header-navbar__item--anchor");
  headerNavbarText.textContent = `${element.label}`;
});

//Append
root.appendChild(headerComment);
root.appendChild(header);
header.appendChild(headerContainerComment);
header.appendChild(headerContainer);
headerContainer.appendChild(headerContainerLogo);

header.appendChild(headerNavbarComment);
header.appendChild(headerNavbar);

//////////////////////////////////
//             STYLE            //
//////////////////////////////////
header.classList.add("header");
headerContainer.classList.add("header-container");
headerContainerLogo.src = "images/logos/GAUMONT_LOGO_azul.webp";
headerContainerLogo.alt = "Logo Gaumont";
headerContainerLogo.classList.add("header-container--logo");

headerNavbar.classList.add("header-navbar");

//////////////////////////////////
//              JS              //
//////////////////////////////////

// Click ir al inicio estado default
headerContainerLogo.addEventListener("click", () => {
  // Mostrar #1 Cartelera y ocultar todo lo demas cuando toco el logo
  mainCartelera.classList.remove("hidden");
  mainCarteleraContainer.classList.remove("hidden");
  mainCarteleraMovieSelected.classList.add("hidden");
  mainCiclos.classList.add("hidden");
  mainCiclosContainer.classList.add("hidden");
  mainCiclosInformation.classList.add("hidden");
  mainPrecios.classList.add("hidden");
  mainFelicidadesContainer.classList.add("hidden");
  MSInformationFechas.innerHTML = "";
  MSInformationHorario.innerHTML = "";

  // Cambiar la clase active cuando toco el logo
  headerNavbarItems.forEach((item, index) => {
    headerNavbarIcons.forEach((icon) => {
      icon.classList.remove("active");
    });
    headerNavbarTexts.forEach((text) => {
      text.classList.remove("active");
    });
    headerNavbarIcons[0].classList.add("active");
    headerNavbarTexts[0].classList.add("active");
  });

  // Cambiar la clase active cuando toco el logo
  navbarItems.forEach((item, index) => {
    navbarIcons.forEach((icon) => {
      icon.classList.remove("active");
    });
    navbarLabels.forEach((text) => {
      text.classList.remove("active");
    });
    navbarIcons[0].classList.add("active");
    navbarLabels[0].classList.add("active");
  });
});

// Click a item del navbar cambia la clase
const headerNavbarItems = document.querySelectorAll(".header-navbar__item");
const headerNavbarIcons = document.querySelectorAll(
  ".header-navbar__item--icon"
);
const headerNavbarTexts = document.querySelectorAll(
  ".header-navbar__item--anchor"
);

headerNavbarItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    headerNavbarIcons.forEach((icon) => {
      icon.classList.remove("active");
    });
    headerNavbarTexts.forEach((text) => {
      text.classList.remove("active");
    });
    headerNavbarIcons[index].classList.add("active");
    headerNavbarTexts[index].classList.add("active");
  });
});

// Add/remove class hidden
const carteleraHeaderBtn = document.querySelector("#cartelera-header");
const ciclosHeaderBtn = document.querySelector("#ciclos-header");
const preciosHeaderBtn = document.querySelector("#precios-header");

//// funcion que haga esto para que no sea repetitivo
carteleraHeaderBtn.addEventListener("click", () => {
  mainCartelera.classList.remove("hidden");
  mainCiclos.classList.add("hidden");
  mainPrecios.classList.add("hidden");

  // Si estas en una peli tocas cartelera elimina los li
  MSInformationFechas.innerHTML = "";
  MSInformationHorario.innerHTML = "";

  // Toca el botón cartelera vuelve al inicio
  if (mainCarteleraContainer.classList.contains("hidden")) {
    mainCarteleraContainer.classList.remove("hidden");
    mainCarteleraMovieSelected.classList.add("hidden");
    mainFelicidades.classList.add("hidden");
  }
});

ciclosHeaderBtn.addEventListener("click", () => {
  mainCartelera.classList.add("hidden");
  mainCiclos.classList.remove("hidden");
  mainPrecios.classList.add("hidden");

  // Toca el botón Ciclos vuelve al inicio de ciclos
  if (mainCiclosContainer.classList.contains("hidden")) {
    mainCiclosContainer.classList.remove("hidden");
    mainCiclosInformation.classList.add("hidden");
  }
});

preciosHeaderBtn.addEventListener("click", () => {
  mainCartelera.classList.add("hidden");
  mainCiclos.classList.add("hidden");
  mainPrecios.classList.remove("hidden");
});
