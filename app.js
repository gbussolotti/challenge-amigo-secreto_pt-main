//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


//Array que receberá as entradas com os nomes dos amigos que participarão do sorteio
let listaDeAmigos = [];     

//Desativa o botão Sortear na inicialização
desabilitarBotaoSortear();

/*
    Função para adicionar um nome digitado na lista de amigos que participarão do sorteio
*/
function adicionarAmigo() {
    let nomeAmigoInput = document.getElementById('amigo').value;

    //Verifica se o input esta preechido
    if (nomeAmigoInput.trim() != '') {

        //Adiciona o nome digitado na lista de amigos
        listaDeAmigos.push(nomeAmigoInput);

        //Atualiza a view com o nome do amigo
        let listaAmigosHMTL = document.getElementById("listaAmigos");
        let li = document.createElement('li');
        li.innerText = nomeAmigoInput;
        listaAmigosHMTL.appendChild(li);

        //limpa o input e volta o foco para ele
        document.getElementById('amigo').value = '';
        document.getElementById('amigo').focus();

        //Remove o atributo de disabled do botão sortear
        document.getElementById('btnSortear').removeAttribute('disabled');

        //Remove da view o resultado anterior, caso já tenha feito uma rodada anteriormente
        let ul = document.getElementById("resultado").innerHTML = "";
    } else {
        alert('Por favor, insira um nome válido');
    }
}

/*
    Função para sortear um amigo. 
    A lista deverá já estar preenchia com pelo menos 1 elemento
*/
function sortearAmigo() {
    //Gera um id aleatório baseado na quantidade de elementos da lista
    let idAleatorioDaLista = parseInt(Math.random() * listaDeAmigos.length);

    //Limpa a view para não aparecer mais o nome dos amigos que estão participando do sorteio
    document.getElementById("listaAmigos").innerHTML = "";

    //Atualiza a view para mostrar o nome do amigo sorteado baseado no id Aleatório
    let listaResultado = document.getElementById('resultado');
    let li = document.createElement('li');
    let textoResultado = `O amigo secreto sorteado é: ${listaDeAmigos[idAleatorioDaLista]}`;
    li.innerText = textoResultado;
    listaResultado.appendChild(li);

    desabilitarBotaoSortear();
    //Por fim limpa o array para que seja efetuada uma nova lista
    listaDeAmigos = [];
}

/*
    Função para desabilitar o botão sortear
*/
function desabilitarBotaoSortear() {
    document.getElementById('btnSortear').setAttribute('disabled', true);
}
