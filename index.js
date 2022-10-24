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
    alert("Posição selecionada: atacante");
    ativaTelaDeEscalarJogador(ativa);
  } else if (document.getElementById("central").checked) {
    ativa = true;
    const selectedValue = document.getElementById("central").value;
    alert("Posição selecionada: " + selectedValue);
    ativaTelaDeEscalarJogador(ativa);
  } else if (document.getElementById("def_esq").checked) {
    ativa = true;
    const selectedValue = document.getElementById("def_esq").value;
    alert("Posição selecionada: ala esquerda");
    ativaTelaDeEscalarJogador(ativa);
  } else if (document.getElementById("def_dir").checked) {
    ativa = true;
    const selectedValue = document.getElementById("def_dir").value;
    alert("Posição selecionada: ala direita");
    ativaTelaDeEscalarJogador(ativa);
  } else if (document.getElementById("gol").checked) {
    ativa = true;
    const selectedValue = document.getElementById("gol").value;
    alert("Posição selecionada: goleiro");
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
  var classeAtacante = document.getElementsByClassName("atacante");
  var classeCentral = document.getElementsByClassName("central");
  var classeAlaEsq = document.getElementsByClassName("ala-esq");
  var classeAlaDir = document.getElementsByClassName("ala-dir");
  var classeGoleiro = document.getElementsByClassName("goleiro");
  const nomeJogadorinput = document.getElementById("nome_jogador").value;

  if (document.getElementById("atk").checked)
    for (var i = 0; i < classeAtacante.length; i++) {
      classeAtacante[i].innerHTML = nomeJogadorinput;
    }
  else if (document.getElementById("central").checked)
    for (var i = 0; i < classeCentral.length; i++) {
      classeCentral[i].innerHTML = nomeJogadorinput;
    }
  else if (document.getElementById("def_esq").checked)
    for (var i = 0; i < classeAlaEsq.length; i++) {
      classeAlaEsq[i].innerHTML = nomeJogadorinput;
    }
  else if (document.getElementById("def_dir").checked)
    for (var i = 0; i < classeAlaDir.length; i++) {
      classeAlaDir[i].innerHTML = nomeJogadorinput;
    }
  else if (document.getElementById("gol").checked)
    for (var i = 0; i < classeGoleiro.length; i++) {
      classeGoleiro[i].innerHTML = nomeJogadorinput;
    }

  ativaTelaDeEscalarJogador((ativa = 0));
  document.getElementById("nome_jogador").value = "";
}
