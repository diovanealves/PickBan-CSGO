const turnText = document.querySelector("#turnText");

const team1 = "Fallen";
const team2 = "Trybe";
let turn = team2;

const maps = document.querySelectorAll(".card");
for (let i = 0; i < maps.length; i++) {
  maps[i].addEventListener("click", chooseMap);
}

function chooseMap(event) {
  if (turn == team1) {
    turn = team2;
  } else {
    turn = team1;
  }
  turnText.innerText = `É a vez da equipe ${turn} Banir o mapa!`;
}
