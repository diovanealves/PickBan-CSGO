const turnText = document.querySelector("#turnText");

const team1 = "Fallen";
const team2 = "Trybe";
let turn = team2;

let mapPool = [
  "Train",
  "Mirage",
  "Cache",
  "Inferno",
  "Cobblestone",
  "Dust 2",
  "Overpass",
];

const maps = document.querySelectorAll(".card");
for (let i = 0; i < maps.length; i++) {
  maps[i].addEventListener("click", chooseMap);
}

function chooseMap(e) {
  if (turn == team1) {
    turn = team2;
  } else {
    turn = team1;
  }
  turnText.innerText = `É a vez da equipe ${turn} Banir o mapa!`;

  e.currentTarget.classList.add("selected");
  e.currentTarget.removeEventListener("click", chooseMap);

  e.currentTarget.querySelector(".accept").innerText = "Vetado";

  const clickedMap = e.currentTarget.querySelector(".map-name").innerText;
  mapPool = mapPool.filter((map) => map != clickedMap);
  if (mapPool.length == 1) {
    const decidedMap = document.querySelector(".card:not(.selected)");

    decidedMap.classList.add("picked");
    decidedMap.removeEventListener("click", chooseMap);
    decidedMap.classList.add("disable-hover");

    turnText.innerText = `O mapa da partida será ${mapPool[0]}`;
  }
}
