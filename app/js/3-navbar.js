//////////////////////////////////
//             HTML             //
//////////////////////////////////

let navbarComment = document.createComment("Navbar Mobile");
const navbar = document.createElement("nav");

root.appendChild(navbarComment);
root.appendChild(navbar);

for (let i = 0; i <= 2; i++) {
  const navbarIds = ["cartelera"];
  const navbarIds = ["cartelera", "ciclos", "precios"];
  const navbarIconText = ["home"];
  const navbarIconText = ["home", "theaters", "payments"];
  const navbarLabelText = ["cartelera"];
  const navbarLabelText = ["cartelera", "ciclos", "precios"];
  const anchor = document.createElement("a");
  const icon = document.createElement("span");
  const label = document.createElement("span");

  anchor.id = `${navbarIds[i]}-btn`;
  anchor.classList.add("navbar__item");
  anchor.href = "#";
  icon.textContent = `${navbarIconText[i]}`;
  icon.classList.add("navbar__item--icon", "material-symbols-outlined");
  label.textContent = `${navbarLabelText[i]}`;
  label.classList.add("navbar__item--label");
  // prettier-ignore
  if (i === 0) { icon.classList.add("active"), label.classList.add("active");}

  navbar.appendChild(anchor);
  anchor.appendChild(icon);
  anchor.appendChild(label);
}

//////////////////////////////////
//             STYLE            //
//////////////////////////////////

navbar.classList.add("navbar");

//////////////////////////////////
//              JS              //
//////////////////////////////////

// Cambiar clase active
const navbarItems = document.querySelectorAll(".navbar__item");
const navbarIcons = document.querySelectorAll(".navbar__item--icon");
const navbarLabels = document.querySelectorAll(".navbar__item--label");

navbarItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    navbarIcons.forEach((icon) => {
      icon.classList.remove("active");
    });
    navbarLabels.forEach((label) => {
      label.classList.remove("active");
    });
    navbarIcons[index].classList.add("active");
    navbarLabels[index].classList.add("active");
  });
});

const carteleraBtn = document.querySelector("#cartelera-btn");
const ciclosBtn = document.querySelector("#ciclos-btn");
const preciosBtn = document.querySelector("#precios-btn");

carteleraBtn.addEventListener("click", () => {
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
  main.style.padding = "1rem 0 6rem";
});

ciclosBtn.addEventListener("click", () => {
  mainCartelera.classList.add("hidden");
  mainCiclos.classList.remove("hidden");
  mainPrecios.classList.add("hidden");
  main.style.padding = "1rem 0";

  // Toca el botón Ciclos vuelve al inicio de ciclos
  if (mainCiclosContainer.classList.contains("hidden")) {
    mainCiclosContainer.classList.remove("hidden");
    mainCiclosInformation.classList.add("hidden");
  }
});

preciosBtn.addEventListener("click", () => {
  mainCartelera.classList.add("hidden");
  mainCiclos.classList.add("hidden");
  mainPrecios.classList.remove("hidden");
  main.style.padding = "1rem 0 6rem";
});
