function showModalSelectPosition() {
  document.getElementById("modal-selecao-posicao").style.visibility = "visible";
}

let atacante = 0;
let meia = 1;
let defensor = 2;
let goleiro = 3;
let atacantesMaximos = 2;
let cont_atacantes = 0;

function whichRadiusIsSelected() {
  let ativa = false;

  if (document.getElementById("atk").checked) {
    ativa = true;
    const selectedValue = document.getElementById("atk").value;
    //alert("Selected Radio Button is: " + selectedValue);
    ativaTelaDeEscalarJogador(ativa);
  } else if (document.getElementById("meia").checked) {
    ativa = true;
    const selectedValue = document.getElementById("meia").value;
    alert("Selected Radio Button is: " + selectedValue);
    ativaTelaDeEscalarJogador(ativa);
  } else if (document.getElementById("def").checked) {
    ativa = true;
    const selectedValue = document.getElementById("def").value;
    alert("Selected Radio Button is: " + selectedValue);
    ativaTelaDeEscalarJogador(ativa);
  } else if (document.getElementById("gol").checked) {
    ativa = true;
    const selectedValue = document.getElementById("gol").value;
    alert("Selected Radio Button is: " + selectedValue);
    ativaTelaDeEscalarJogador(ativa);
  }
}
function ativaTelaDeEscalarJogador(ativa) {
  if (ativa)
    document.getElementById("tela-de_escalar-no-time").style.visibility =
      "visible";
  else
    document.getElementById("tela-de_escalar-no-time").style.visibility =
      "hidden";
}
function atualizaNoTabuleiro() {
  var myClasses = document.getElementsByClassName("centroavante");

  for (var i = 0; i < myClasses.length; i++) {
    myClasses[i].innerHTML = "new content";
  }
  ativaTelaDeEscalarJogador((ativa = 0));
}
