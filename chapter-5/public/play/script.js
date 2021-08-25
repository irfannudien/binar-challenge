var gameplay = document.getElementById("hasil");
var refresh = document.getElementById("refresh");
var playerGunting = document.getElementById("gunting");
var playerKertas = document.getElementById("kertas");
var playerBatu = document.getElementById("batu");
var comGunting = document.getElementById("gunting-com");
var comKertas = document.getElementById("kertas-com");
var comBatu = document.getElementById("batu-com");

class SuitClass {
  // REFRESH
  isReady = true;
  refresh() {
    gameplay.innerHTML = "VS";
    gameplay.className = "";

    gameplay.classList.add("textVs");
    gameplay.classList.remove("value-text");

    playerBatu.classList.remove("setBackground");
    playerKertas.classList.remove("setBackground");
    playerGunting.classList.remove("setBackground");
    comBatu.classList.remove("setBackground");
    comKertas.classList.remove("setBackground");
    comGunting.classList.remove("setBackground");
    this.isReady = true;
  }
  // AKHIR REFRESH

  // GAMEPLAY
  suit(player) {
    if (!this.isReady) {
      return;
    }

    console.log(`Player Choice: ${player}`);

      // Untuk membuat pilihan suit
    let pool = ["gunting", "batu", "kertas"];
    let com = Math.floor(Math.random() * pool.length);

      // Untuk tampilan background random computer
    if (pool[com] == "gunting")
      comGunting.classList.add("setBackground")
      // document.getElementById("gunting-com").classList.add("setBackground");
      else if (pool[com] == "batu")
      comBatu.classList.add("setBackground")
      // document.getElementById("batu-com").classList.add("setBackground");
      else if (pool[com] == "kertas")
      comKertas.classList.add("setBackground")
      // document.getElementById("kertas-com").classList.add("setBackground");

    let computer = pool[com];

    let result;
    console.log(player, computer);

      // Untuk gameplay pilihan suit
    if (player == "gunting") {
      if (computer == player) {
        result = "draw";
      } else if (computer == "kertas") {
        result = "player win";
      } else if (computer == "batu") {
        result = "com win";
      }
    } else if (player == "batu") {
      if (computer == player) {
        result = "draw";
      } else if (computer == "kertas") {
        result = "com win";
      } else if (computer == "gunting") {
        result = "player win";
      }
    } else if (player == "kertas") {
      if (computer == player) {
        result = "draw";
      } else if (computer == "gunting") {
        result = "com win";
      } else if (computer == "batu") {
        result = "player win";
      }
    }

    gameplay.innerHTML = result;

    if (result === "draw") {
      gameplay.classList.add("draw");
    } else {
      gameplay.classList.add("win");
    }
    this.isReady = false;
    console.log(`Value: ${result}`);
    return result;
  }
};
// AKHIR CLASS

let play = new SuitClass();

refresh.addEventListener("click", function () {
  play.refresh("");
});
playerGunting.addEventListener("click", function () {
  play.suit("gunting");
});
playerBatu.addEventListener("click", function () {
  play.suit("batu");
});
playerKertas.addEventListener("click", function () {
  play.suit("kertas");
});
// AKHIR GAMEPLAY


// TOGGLE BACKGROUND
    // Untuk membuat background dibelakang object ketika di klik
const [
  gambarGunting,
  gambarKertas,
  gambarBatu,
  guntingCom,
  kertasCom,
  batuCom,
] = [
  document.getElementById("gunting"),
  document.getElementById("kertas"),
  document.getElementById("batu"),
];

let playerChoice = "";

const toggleBackgroundButton = function (bg) {
  let background = bg.target;

  let isObjectActive = bg.className.includes("setBackground");

  if (isObjectActive) {
    bg.className = bg.className.replace("setBackground", "");
    bg.className = bg.className.replace(/\s/g, "");

    playerChoice = "";
  } else {
    if (playerChoice !== "") {
      let beforePlayerChoice = playerChoice;
      playerChoice = bg.id;

      let beforeElement = document.getElementById(beforePlayerChoice);
      let newElement = document.getElementById(playerChoice);
      beforeElement.className = beforeElement.className.replace(
        "setBackground",
        ""
      );
      beforeElement.className = beforeElement.className.replace(/\s/g, "");

      newElement.className += " setBackground";
    } else {
      playerChoice = bg.id;
      bg.className += " setBackground";
    }
  }
};

gambarBatu.addEventListener("click", function (bg) {
  toggleBackgroundButton(bg.target);
});
gambarGunting.addEventListener("click", function (bg) {
  toggleBackgroundButton(bg.target);
});
gambarKertas.addEventListener("click", function (bg) {
  toggleBackgroundButton(bg.target);
});
// AKHIR TOOGLE BACKGROUND


// ROTATE REFRESHH
    // Untuk membuat rotasi object
var rotate = false;
var runner;
var degrees = 0;

function start() {
  runner = setInterval(function () {
    if (degrees === 360) {
      degrees = 0;
      clearInterval(runner);
    }
    degrees++;
    btn.style.webkitTransform = "rotate(" + degrees + "deg)";
  }, 1);
}

function stop() {
  clearInterval(runner);
}
var btn = document.getElementById("refresh");
btn.addEventListener("click", function () {
  if (!rotate) {
    rotate = true;
    start();
  } else {
    rotate = false;
    stop();
  }
});
// AKHIR ROTATE REFRESH
