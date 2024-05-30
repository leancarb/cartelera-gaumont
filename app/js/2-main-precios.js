//////////////////////////////////
//             HTML             //
//////////////////////////////////


let mainPreciosComment = document.createComment("Precios");
const mainPrecios = document.createElement("article");
const mainPreciosContainer = document.createElement("div");
const mainPreciosHeading = document.createElement("h4");
const publicoGeneral = document.createElement("p");
const publicoGeneralValor = document.createElement("span");
const mainPreciosSubheading = document.createElement("h4");
const jubiladosPensionados = document.createElement("p");
const jubiladosPensionadosValor = document.createElement("span");
const estudiantes = document.createElement("p");
const estudiantesValor = document.createElement("span");
const afiliados = document.createElement("p");
const afiliadosValor = document.createElement("span");
const discapacitados = document.createElement("p");
const discapacitadosValor = document.createElement("span");
const empleadosIncaa = document.createElement("p");
const empleadosIncaaValor = document.createElement("span");
const mainPreciosEntradas = document.createElement("p");

main.appendChild(mainPreciosComment);
main.appendChild(mainPrecios);
mainPrecios.appendChild(mainPreciosContainer);
mainPreciosContainer.appendChild(mainPreciosHeading);
mainPreciosContainer.appendChild(publicoGeneral);
publicoGeneral.appendChild(publicoGeneralValor);
mainPreciosContainer.appendChild(mainPreciosSubheading);
mainPreciosContainer.appendChild(jubiladosPensionados);
jubiladosPensionados.appendChild(jubiladosPensionadosValor);
mainPreciosContainer.appendChild(estudiantes);
estudiantes.appendChild(estudiantesValor);
mainPreciosContainer.appendChild(afiliados);
afiliados.appendChild(afiliadosValor);
mainPreciosContainer.appendChild(discapacitados);
discapacitados.appendChild(discapacitadosValor);
mainPreciosContainer.appendChild(empleadosIncaa);
empleadosIncaa.appendChild(empleadosIncaaValor);
mainPreciosContainer.appendChild(mainPreciosEntradas);

//////////////////////////////////
//             STYLE            //
//////////////////////////////////

mainPrecios.classList.add("precios", "hidden");
mainPreciosContainer.classList.add("precios-container");
mainPreciosHeading.classList.add("precios--heading", "titulo");
publicoGeneral.classList.add("precios--publico", "precio");
publicoGeneralValor.classList.add("precios--publico-valor", "valor");
mainPreciosSubheading.classList.add("precios--subheading", "titulo");
jubiladosPensionados.classList.add("precios--jubilados");
jubiladosPensionadosValor.classList.add("precios--jubilados-valor", "valor");
estudiantes.classList.add("precios--estudiantes");
estudiantesValor.classList.add("precios--estudiantes-valor", "valor");
afiliados.classList.add("precios--afiliados");
afiliadosValor.classList.add("precios--afiliados-valor", "valor");
discapacitados.classList.add("precios--discapacitados");
discapacitadosValor.classList.add("precios--discapacitados-valor", "valor");
empleadosIncaa.classList.add("precios--empleados");
empleadosIncaaValor.classList.add("precios--empleados-valor", "valor");
mainPreciosEntradas.classList.add("precios--entradas");

//////////////////////////////////
//              JS              //
//////////////////////////////////

fetch("precios.json")
  .then((response) => response.json())
  .then((json) => {
    mainPreciosHeading.textContent = `${json.precios.titulo}`;
    // DESAPARECEN LOS SPAN
    // publicoGeneral.textContent = `${json.precios.publico_general.label}`;
    // publicoGeneralValor.textContent = `${json.precios.publico_general.valor}`;
    // SOLUCION TOSCA
    publicoGeneral.innerHTML = `${json.precios.publico_general.label}: <span class="precios--publico-valor valor">$${json.precios.publico_general.valor}.-</span>`;

    mainPreciosSubheading.textContent = `${json.precios.subtitulo}`;
    jubiladosPensionados.textContent = `${json.precios.jubilados.label}`;
    jubiladosPensionadosValor.textContent = `${json.precios.jubilados.valor}`;
    estudiantes.textContent = `${json.precios.estudiantes.label}`;
    estudiantesValor.textContent = `${json.precios.estudiantes.valor}`;
    afiliados.textContent = `${json.precios.afiliados.label}`;
    afiliadosValor.textContent = `${json.precios.afiliados.valor}`;
    discapacitados.textContent = `${json.precios.discapacitados.label}`;
    discapacitadosValor.textContent = `${json.precios.discapacitados.valor}`;
    empleadosIncaa.textContent = `${json.precios.incaa.label}`;
    empleadosIncaaValor.textContent = `${json.precios.incaa.valor}`;
    mainPreciosEntradas.textContent = `${json.precios.entradas}.`;
  });

