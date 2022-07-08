let btn = document.querySelector("button");
let player = document.querySelector("#player");
let password = document.querySelector("#password");

function habilitarBotao() {
  if (player.value && password.value.length >= 8) {
    btn.removeAttribute("disabled");
    btn.style.backgroundColor = "#FF002E";
  } else {
    btn.setAttribute("disabled", "disabled");
    btn.style.backgroundColor = "rgba(255, 0, 46, 0.21)";
  }
}

player.addEventListener("input", habilitarBotao);
password.addEventListener("input", habilitarBotao);