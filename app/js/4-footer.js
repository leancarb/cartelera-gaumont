//////////////////////////////////
//             HTML             //
//////////////////////////////////

let footerComment = document.createComment("Footer");
const footer = document.createElement("footer");

root.appendChild(footerComment);
root.appendChild(footer);


for (let i = 0; i <= 2; i++) {
  const footerClasses = [
    { comment: "Logo INCAA", class: "logo" },
    { comment: "Information", class: "information" },
    { comment: "Redes sociales", class: "socials" },
  ];
  const footerContainer = document.createElement("div");
  let footerContainerComment = document.createComment(`${footerClasses[i].comment}`);

  footerContainer.classList.add(`footer-${footerClasses[i].class}`);

  footer.appendChild(footerContainerComment);
  footer.appendChild(footerContainer);
}

footer.classList.add("footer");
const footerLogoContainer = document.querySelector(".footer-logo");
const footerLogoImage = document.createElement("img");
const footerInformationContainer = document.querySelector(".footer-information");
const footerInformationAddress = document.createElement("a");
const footerInformationPhone = document.createElement("a");
const footerSocialContainer = document.querySelector(".footer-socials");
const redesSociales = [
  {
    link: "https://twitter.com/incaa_argentina",
    innerHTMLicon: `<ion-icon name="logo-twitter" role="img" class="md hydrated"></ion-icon>`,
  },
  {
    link: "https://www.facebook.com/INCAA.Argentina",
    innerHTMLicon: `<ion-icon name="logo-facebook" role="img" class="md hydrated"></ion-icon>`,
  },
  {
    link: "https://www.instagram.com/incaa_argentina",
    innerHTMLicon: `<ion-icon name="logo-instagram" role="img" class="md hydrated"></ion-icon>`,
  },
  {
    link: "https://www.flickr.com/photos/incaaargentina",
    innerHTMLicon: `<ion-icon name="logo-flickr" role="img" class="md hydrated"></ion-icon>`,
  },
  {
    link: "https://www.youtube.com/user/INCAA2010",
    innerHTMLicon: `<ion-icon name="logo-youtube" role="img" class="md hydrated"></ion-icon>`,
  },
];

for (let i = 0; i < redesSociales.length; i++) {
  const redSocial = document.createElement("a");

  redSocial.href = `${redesSociales[i].link}`;
  redSocial.innerHTML = `${redesSociales[i].innerHTMLicon}`;

  footerSocialContainer.appendChild(redSocial);
}

// Style
footerLogoImage.src = "images/logos/INCAA_LOGO_2022_AZUL_CMYK.png";
footerLogoImage.alt = "Logo INCAA";
footerLogoImage.classList.add("footer-logo__incaa");
footerInformationAddress.href = "https://maps.app.goo.gl/fxF95obKXugL5TY58";
footerInformationAddress.textContent = "Rivadavia 1635, CABA";
footerInformationPhone.href = "tel:+5401132201921";
footerInformationPhone.textContent = "Tel. 3220-1921";

footerLogoContainer.appendChild(footerLogoImage);
footerInformationContainer.appendChild(footerInformationAddress);
footerInformationContainer.appendChild(footerInformationPhone);

//////////////////////////////////
//             STYLE            //
//////////////////////////////////

//////////////////////////////////
//              JS              //
//////////////////////////////////

// script icons
const body = document.querySelector("body");

let iconComment = document.createComment("Iconos");
const moduleIcons = document.createElement("script");
const nomoduleIcons = document.createElement("script");

moduleIcons.setAttribute("type", "module");
moduleIcons.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
nomoduleIcons.setAttribute("nomodule", "");
nomoduleIcons.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";

body.appendChild(iconComment);
body.appendChild(moduleIcons);
body.appendChild(nomoduleIcons);
