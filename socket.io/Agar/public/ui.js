let wHeight = window.innerHeight;
let wWidth = window.innerWidth;

const canva = document.querySelector("#the-canvas");

const context = canva.getContext("2d");

canva.height = wHeight;
canva.width = wWidth;
const player = {}; // all the data for the particular player

const loginModal = new bootstrap.Modal(document.querySelector("#loginModal"));
const spawnModal = new bootstrap.Modal(document.querySelector("#spawnModal"));

window.addEventListener("load", () => {
  loginModal.show();
});

document.querySelector(".name-form").addEventListener("submit", (e) => {
  e.preventDefault();
  player.name = document.querySelector("#name-input").value;
  loginModal.hide();
  spawnModal.show();
  console.log({ player });
});

document.querySelector(".start-game").addEventListener("click", (e) => {
  // hide the spawn modal
  spawnModal.hide();

  // show the hiddenOnStart elements
  Array.from(document.querySelectorAll(".hiddenOnStart")).forEach((el) =>
    el.removeAttribute("hidden")
  );
  init();
});
