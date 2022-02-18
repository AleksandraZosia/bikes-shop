"use strict";

const wyglądNav = function () {
  if (window.pageYOffset > 0) {
    topNav.style.borderBottom = "none";
  }
};

const kolory = [
  "wielokolorowy",
  "czarny",
  "biały",
  "różowy",
  "beżowy",
  "zielony",
  "niebieski",
];

const szosa = {
  typ: "szosa",
  kolor: [
    "wielokolorowy",
    "czarny",
    "biały",
    "różowy",
    "beżowy",
    "zielony",
    "niebieski",
  ],
  koła: "Koła 700c 28”",
  przerzutki: 3,
  waga: "7,5 kg",
};
const miejski = {
  typ: "miejski",
  kolor: [
    "wielokolorowy",
    "czarny",
    "biały",
    "różowy",
    "beżowy",
    "zielony",
    "niebieski",
  ],
  koła: "Koła 700c 28”",
  przerzutki: 3,
  waga: "7,5 kg",
};
const goral = {
  typ: "góral",
  kolor: ["wielokolorowy", "czarny", "różowy", "beżowy", "zielony"],
  koła: "Koła 700c 28”",
  przerzutki: 3,
  waga: "7,5 kg",
};
let a = true;
const rowery = [szosa, miejski, goral];
const btnTypes = document.querySelector(".btn-filtry--typ");
const btnWszystkie = document.querySelector(".btn-wszystkie");
const btnSzosa = document.querySelector(".btn-szosa");
const btnGóral = document.querySelector(".btn-goral");
const btnMiejski = document.querySelector(".btn-miejski");
const topNav = document.querySelector(".nav");
const btnColors = document.querySelector(".btn-filtry--kolor");
const displayRowery = document.querySelector(".display");
topNav.style.height = "2.7rem";

const stwórzGuziki = (obj, miejsce) =>
  obj.forEach(function (kolor, i) {
    miejsce.insertAdjacentHTML(
      "beforeend",
      `<button class ="btn-filtry--kolor${i}" id ="${kolor}" data-color ="${kolor}"></button>`
    );
    console.log("");
  });

stwórzGuziki(kolory, btnColors);

console.log(btnWszystkie, btnSzosa, btnGóral, btnMiejski);

// console.log(rowery.filter((rower) => rower.typ === "szosa"));

const checkKolor = (arr, color) =>
  arr.filter((rower) => rower.kolor.includes(color));

const checkType = (arr, typ) => arr.filter((rower) => rower.typ.includes(typ));

const displayRowery2 = function (arr, barwa) {
  arr.forEach(({ typ, kolor, koła, przerzutki, waga }, i) => {
    displayRowery.insertAdjacentHTML(
      "afterbegin",
      `<div class ="wyświetlany-rower" id =${barwa}><img src ="rower${
        i + 2
      }.svg"><p>
        ${barwa === typ ? barwa.toUpperCase() : typ.toUpperCase()}
        Dostępne kolory: ${kolor.includes(barwa) ? barwa : kolor.join(", ")}\n
        ${przerzutki} kombinacje przerzutek\n
        ${koła}\n
        Waga już od ${waga}</p></div>`
    );
  });
};

console.log(checkKolor(rowery, "biały"));
console.log(checkType(rowery, "szosa"));

// btnWszystkie.addEventListener("click", () => {
// btnWszystkie.classList.toggle("active-filter");
// console.log(rowery);
// });
//
// btnSzosa.addEventListener("click", function () {
// btnSzosa.classList.toggle("active-filter");
// return console.log(checkType(rowery, "szosa"));
// });
//
// btnGóral.addEventListener("click", function () {
// btnGóral.classList.toggle("active-filter");
// return console.log(checkType(rowery, "góral"));
// });
//
// btnMiejski.addEventListener("click", function () {
// btnMiejski.classList.toggle("active-filter");
// return console.log(checkType(rowery, "miejski"));
// });
//
// document
// .getElementById("sz1")
// ?.addEventListener("click", () => console.log(window.scrollY));

document.querySelector(".filtry-kolor").addEventListener("click", function (e) {
  const barwa = e.target.dataset.color;
  const rower = checkKolor(rowery, barwa);
  if (e.target.dataset.color && !e.target.value) {
    displayRowery2(rower, barwa);

    e.target.value = !e.target.value;
    // const wyświetlanyRower = document.querySelector(".wyświetlany-rower");
    // wyświetlanyRower.classList.toggle(".hidden");
  } else {
    document.getElementById(`${barwa}`).textContent = ""; // Wymyśl jak zrobić, żeby znikał jeden rower, a nie wszystkie -teraz nie znika nic
    e.target.value = "";
  }
});

// Tu wstaw funkcję, która na rowery wyświetli automatycznie przefiltrowane na szosy, to samo dla górali i miejskich
document.querySelector(".filtry-typ").addEventListener("click", function (e) {
  const typ = e.target.dataset.typ;
  const rower = checkType(rowery, typ);
  if (e.target.dataset.typ && !e.target.value) {
    displayRowery2(rower, typ);

    e.target.value = !e.target.value;
  } else {
    displayRowery.textContent = ""; // Teraz znika wszystko
    e.target.value = "";
  }
});
