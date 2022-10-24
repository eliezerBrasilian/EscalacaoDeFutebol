function showModalSelectPosition() {
  document.getElementById("modal-selecao-posicao").style.visibility = "visible";
  document.getElementById("escalar").style.visibility = "hidden";
}

//variaveis de controle
let atacante = 0;
let central = 0;
let ala_esquerda = 0;
let ala_direita = 0;
let goleiro = 0;

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
  const numeroCamisaInput = document.getElementById("numero_camisa").value;
  //atualizandoa a esquerda do tabuleiro
  const ul = document.getElementById("inputs");

  if (document.getElementById("atk").checked)
    for (var i = 0; i < classeAtacante.length; i++) {
      //contador atacantes
      atacante++;
      ativaRemocao(atacante);
      //controle para criar um unico atacante no DOM
      if (atacante <= 1) {
        classeAtacante[i].innerHTML = nomeJogadorinput;
        const li = document.createElement("li");
        li.innerText =
          "Atacante: " + nomeJogadorinput + ", camisa: " + numeroCamisaInput;
        ul.appendChild(li);
      }
    }
  else if (document.getElementById("central").checked)
    for (var i = 0; i < classeCentral.length; i++) {
      //contador centrais
      central++;
      ativaRemocao(central);
      //controle pra criar um unico central no DOM
      if (central <= 1) {
        classeCentral[i].innerHTML = nomeJogadorinput;
        const li = document.createElement("li");
        li.innerText =
          "Central: " + nomeJogadorinput + ", camisa: " + numeroCamisaInput;
        ul.appendChild(li);
      }
    }
  else if (document.getElementById("def_esq").checked)
    for (var i = 0; i < classeAlaEsq.length; i++) {
      //contador ala esquerdo
      ala_esquerda++;
      ativaRemocao(ala_esquerda);
      //controle para criar um unico ala esquerdo no DOM
      if (ala_esquerda <= 1) {
        classeAlaEsq[i].innerHTML = nomeJogadorinput;
        const li = document.createElement("li");
        li.innerText =
          "Ala Esquerdo: " +
          nomeJogadorinput +
          ", camisa: " +
          numeroCamisaInput;
        ul.appendChild(li);
      }
    }
  else if (document.getElementById("def_dir").checked)
    for (var i = 0; i < classeAlaDir.length; i++) {
      //contador ala direita
      ala_direita++;
      ativaRemocao(ala_direita);
      //controle para criar um unico ala direita no DOM
      if (ala_direita <= 1) {
        classeAlaDir[i].innerHTML = nomeJogadorinput;
        const li = document.createElement("li");
        li.innerText =
          "Ala Direita: " + nomeJogadorinput + ", camisa: " + numeroCamisaInput;
        ul.appendChild(li);
      }
    }
  else if (document.getElementById("gol").checked)
    for (var i = 0; i < classeGoleiro.length; i++) {
      //contador goleiro
      goleiro++;
      ativaRemocao(goleiro);
      if (goleiro >= 1) {
        classeGoleiro[i].innerHTML = nomeJogadorinput;
        const li = document.createElement("li");
        li.innerText =
          "Goleiro: " + nomeJogadorinput + ", camisa: " + numeroCamisaInput;
        ul.appendChild(li);
      }
    }

  ativaTelaDeEscalarJogador((ativa = 0));
  document.getElementById("nome_jogador").value = "";
  document.getElementById("numero_camisa").value = "";
}

function ativaRemocao(valor) {
  if (valor > 0) {
    document.getElementById("remover").style.visibility = "visible";
    document.getElementById("escalar").style.visibility = "visible";
    document.getElementById("modal-selecao-posicao").style.visibility =
      "hidden";
  }
}
