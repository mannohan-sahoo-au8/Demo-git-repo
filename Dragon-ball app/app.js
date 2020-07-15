import axios from "axios";
/*DOM Elements*/

var dbzCardContainer = find(".container__characters");
var loader = find(".loader");

// variables
var CORS_URL = `https://corsanywhere.herokuapp.com/`;
var BASE_URL = `https://dragon-ball-api.herokuapp.com/`;

function find(selector) {
  return document.querySelector(selector);
}

function findAll(selector) {
  return document.querySelectorAll(selector);
}

function renderHTML(dbzCharacters) {
  for (var character of dbzCharacters) {
    var characterHTML = `<div data-name=${character.name} class="container__character container__character--1">
    <img
      class="container__character-image"
      src=${character.image}
      alt="Character"
    />
    <p class="container__character-name"><span>Name:</span> ${character.name}</p>
    <p class="container__character-gender"><span>Gender:</span> ${character.gender}</p>
    <p class="container__character-planet">
      <span>Planet:</span> ${character.planet}
    </p>
  </div>`;
    dbzCardContainer.insertAdjacentHTML("beforeend", characterHTML);
  }
}

function fetchDBZCharacters() {
  loader.style.display = "block";
  var characters = localStorage.getItem("characters");
  if (characters) {
    return Promise.resolve(JSON.parse(characters));
  }
  var dbzPromise = axios
    .get(`${CORS_URL}${BASE_URL}/api/character`)
    .then(function (res) {
      var constructedData = [];
      var dbzCharacters = res.data;
      for (var character of dbzCharacters) {
        console.log(character);
        var characterObj = {
          name: character.name,
          planet: character.originPlanet,
          image: character.image.replace("../", BASE_URL),
          gender: character.gender,
        };
        constructedData.push(characterObj);
      }
      localStorage.setItem("characters", JSON.stringify(constructedData));
      return constructedData;
    })
    .catch(function (err) {
      console.log(err);
    });
  return dbzPromise;
}
function checkValidHash() {
  if (
    window.location.hash !== "#home" &&
    window.location.hash !== "#individual"
  ) {
    window.location.hash = "#home";
  }
}
function renderPage(hashValue) {
  find(hashValue).style.display = "block";
  if (hashValue === "#home") {
    fetchDBZCharacters().then(function (characters) {
      loader.style.display = "none";
      renderHTML(characters);
    });
  }
}

function init() {
  checkValidHash();
  renderPage(window.location.hash);
}

window.addEventListener("hashchange", function (event) {
  checkValidHash();
  find("#home").style.display = "none";
  find("#individual").style.display = "none";
  renderPage(window.location.hash);
});

init();
