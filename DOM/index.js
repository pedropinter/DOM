/*
ATIVIDADE 1
let botaoUm = document.getElementById('botao-um');
botaoUm.style.backgroundColor = 'grey';
let quadradoUm = document.getElementById('quadrado-um');
quadradoUm.style.width = '200px';
quadradoUm.style.height = '200px';

botaoUm.addEventListener('click', function() {
    // Cor para o quadrado e para o botao
    quadradoUm.style.backgroundColor = 'green';

    botaoUm.style.backgroundColor = 'green';
    
    // Atribuicao de segunda cor para o segundo clique
    botaoUm.addEventListener('click', function() {
        quadradoUm.style.backgroundColor = 'blue';

        botaoUm.style.backgroundColor = 'blue';
    });
});
let botaoDois = document.getElementById('botao-dois');
botaoDois.style.backgroundColor = 'grey';
let quadradoDois = document.getElementById('quadrado-dois');
quadradoDois.style.width = '200px';
quadradoDois.style.height = '200px';

botaoDois.addEventListener('click', function() {
    quadradoDois.style.backgroundColor = 'green';

    botaoDois.style.backgroundColor = 'green';
    
    // Atribuicao de segunda cor para o segundo clique
    botaoDois.addEventListener('click', function() {
        quadradoDois.style.backgroundColor = 'blue';

        botaoDois.style.backgroundColor = 'blue';
    });
});
let botaoTres = document.getElementById('botao-tres');
botaoTres.style.backgroundColor = 'grey';
let quadradoTres = document.getElementById('quadrado-tres');
quadradoTres.style.width = '200px';
quadradoTres.style.height = '200px';

botaoTres.addEventListener('click', function() {
    quadradoTres.style.backgroundColor = 'green';

    botaoTres.style.backgroundColor = 'green';

    // Atribuicao de segunda cor para o segundo clique
    botaoTres.addEventListener('click', function() {
        quadradoTres.style.backgroundColor = 'blue';

        botaoTres.style.backgroundColor = 'blue';
    });
});

*/
/*
//ATIVIDADE 2
let contador = document.getElementById('contador');
let texto = document.getElementById('texto');
let cliques = 0;

contador.addEventListener('click', function () {
    cliques++;
    
    texto.innerText = Cliques: ${cliques};
});
*/
/*
// ATIVIDADE 3
let frase = document.getElementById('frase');
let mostrar = document.getElementById('mostrar');
let ocultar = document.getElementById('ocultar');

mostrar.addEventListener('click', function () {
    if (mostrar) {
        frase.innerText = 'Frase aqui';
    }
});
ocultar.addEventListener('click', function () {
    if (ocultar) {
        frase.innerText = ' ';
    }
});
*/
/*
// ATIVIDADE 4
let frase = document.getElementById('frase');
let botao = document.getElementById('botao');

botao.addEventListener('click', function () {
    let novaFrase = prompt('Digite uma nova frase:');
    frase.innerText = novaFrase;
});
*/
/*
// ATIVIDADE 5
document.addEventListener("keydown", function(event) {
    const mensagem = document.getElementById("mensagem");
    mensagem.innerText = Tecla pressionada: ${event.key};
    console.log(Tecla pressionada: ${event.key});
});
*/
/*
// ATIVIDADE 6
let botao = document.getElementById('botao');
let naruto = document.getElementById('bob');
let sasuke = document.getElementById('patrick');
let sakura = document.getElementById('gary');

let candidato01 = document.getElementById('candidato01');
let candidato02 = document.getElementById('candidato02');
let candidato03 = document.getElementById('candidato03');
let candidato04 = document.getElementById('candidato04');

let contador01 = 0;
let contador02 = 0;
let contador03 = 0;
let contador04 = 0;

naruto.style.display = 'none';
sasuke.style.display = 'none';
sakura.style.display = 'none';

botao.addEventListener('click', function() {
    naruto.style.display = 'none';
    sasuke.style.display = 'none';
    sakura.style.display = 'none';
    let voto = prompt('Voto:\n|| 1 - Naruto\n|| 2 - Sasuke\n|| 3 - Sakura');
    if (voto === '1') {
        let confirmar = prompt('Você tem certeza?').toUpperCase();
        if (confirmar == 'S') {
            alert('Voto: Naruto');
            naruto.style.display = 'block';

            contador01 +=1;
            candidato01.innerText = naruto: ${contador01};
        } else if (confirmar == 'N') { // se o usuário desejar não confirmar então aparece uma mensagem
            alert('Voto não confirmado.')
        } else { // se a resposta for diferente de 'N' ou 'S' então aparece uma mensagem de erro
            alert('Algo deu errado. Por favor tente novamente.')
        } // o mesmo acontece no resto dos "if else"
    } else if (voto === '2') {
        let confirmar = prompt('Confirmar voto?').toUpperCase();
        
        if (confirmar == 'S') {
            alert('Voto: Sasuke');
            sasuke.style.display = 'block';

            contador02 +=1;
            candidato02.innerText = sasuke: ${contador02};
        } else if (confirmar == 'N') {
            alert('Voto não confirmado.')
        } else {
            alert('Algo deu errado. Por favor tente novamente.')
        }
    } else if (voto === '3') {
        let confirmar = prompt('Confirmar voto?').toUpperCase();

        if (confirmar == 'S') {
            alert('Voto: Sakura');
            sakura.style.display = 'block'q;

            contador03 +=1;
            candidato03.innerText = sakura: ${contador03};
        } else if (confirmar == 'N') {
            alert('Voto não confirmado.')
        } else {
            alert('Algo deu errado. Por favor tente novamente.')
        }
    } else {
        alert('Voto nulo.')
        contador04 +=1;
        candidato04.innerText = Nulos: ${contador04};
    }
});
*/
/**/
// DESAFIO

document.getElementById("botao").addEventListener("click", function() {
    const item = prompt("Digite o item que deseja adicionar:");
    if (item) {
        const itemLista = document.createElement("li");
        itemLista.innerHTML = item;
        document.getElementById("listaItem").appendChild(itemLista); // appendChild = add
    }
  });
          