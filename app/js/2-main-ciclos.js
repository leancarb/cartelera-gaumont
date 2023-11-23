//////////////////////////////////
//             HTML             //
//////////////////////////////////

// #1 - Ciclos
let mainCiclosComment = document.createComment("Ciclos");
const mainCiclos = document.createElement("article");
const mainCiclosContainer = document.createElement("div");
// #2 - Ciclo información
const mainCiclosInformation = document.createElement("div");
const imageCiclo = document.createElement("img");
const tituloCiclo = document.createElement("h2");
const descripcionCiclo = document.createElement("p");
const fechaInicioCiclo = document.createElement("p");
const fechaFinalCiclo = document.createElement("p");
const btnVolverCiclo = document.createElement("a");

main.appendChild(mainCiclosComment);
main.appendChild(mainCiclos);
mainCiclos.appendChild(mainCiclosContainer);
mainCiclos.appendChild(mainCiclosInformation);
mainCiclosInformation.appendChild(imageCiclo);
mainCiclosInformation.appendChild(tituloCiclo);
mainCiclosInformation.appendChild(descripcionCiclo);
mainCiclosInformation.appendChild(fechaInicioCiclo);
mainCiclosInformation.appendChild(fechaFinalCiclo);
mainCiclosInformation.appendChild(btnVolverCiclo);

//////////////////////////////////
//             STYLE            //
//////////////////////////////////

// #1 - Ciclos
// mainCiclos.classList.add("ciclos");
mainCiclos.classList.add("ciclos", "hidden"); // CICLOS HIDDEN
mainCiclosContainer.classList.add("ciclos-container", "container");

// #2 - Ciclo información
mainCiclosInformation.classList.add(
  "ciclos-information",
  "container",
  "hidden"
);
imageCiclo.classList.add("ciclos-information--image");
tituloCiclo.classList.add("ciclos-information--title");
descripcionCiclo.classList.add("ciclos-information--description");
fechaInicioCiclo.classList.add("ciclos-information--inicio");
fechaFinalCiclo.classList.add("ciclos-information--final");
btnVolverCiclo.classList.add("ciclos-information--btn");

//////////////////////////////////
//              JS              //
//////////////////////////////////
const createCiclos = (json) => {
  const item = Object.entries(json);
  item.map((i) => {
    createCiclosImages(i);
  });
};

const createCiclosImages = (ciclo) => {
  // Este element es cada película del json (element.titulo me da el titulo, etc.)
  const element = ciclo[1];

  const cicloComment = document.createComment(`CICLO ${element.id}`);
  const cicloImages = document.createElement("img");

  mainCiclosContainer.appendChild(cicloComment);
  mainCiclosContainer.appendChild(cicloImages);

  cicloImages.src = `${element.image}`;
  // cicloImages.alt = `${element.titulo} banner`;
  cicloImages.classList.add("ciclo");
};

fetch("ciclos.json")
  .then((response) => response.json())
  .then((json) => {
    createCiclos(json);

    const ciclosImages = document.querySelectorAll(".ciclo");

    ciclosImages.forEach((image, index) => {
      image.addEventListener("click", () => {
        mainCiclosContainer.classList.add("hidden");
        mainCiclosInformation.classList.remove("hidden");

        // Accede al json, agarra la pelicula dependiendo el index
        const selectedCiclo = json[Object.keys(json)[index]];

        imageCiclo.src = selectedCiclo.banner;
        imageCiclo.alt = `Banner ${selectedCiclo.titulo}`;

        tituloCiclo.textContent = selectedCiclo.titulo;
        descripcionCiclo.innerHTML = selectedCiclo.descripcion.replace(
          /\n/g,
          "<br>"
        );

        descripcionCiclo.style.textAlign = "justify";
        fechaInicioCiclo.textContent = `El ciclo inicia el ${selectedCiclo.fechas[0]}`;
        fechaFinalCiclo.textContent = `El ciclo finaliza el ${
          selectedCiclo.fechas[selectedCiclo.fechas.length - 1]
        }`;
        btnVolverCiclo.textContent = "Volver";

        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    btnVolverCiclo.addEventListener("click", () => {
      mainCiclosContainer.classList.remove("hidden");
      mainCiclosInformation.classList.add("hidden");
    });
  });
