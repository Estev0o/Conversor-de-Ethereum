// //desafio do guilherme cripto moeda

// var Ethereum = 1;
// var cotacaoEmReal = 7952.99;
// var criptoEmReal;

// //desadio da Rafa_balerine acrescentar o nome da pessoa

// var nome = "Vinicius Estevo";

// criptoEmReal = Ethereum * cotacaoEmReal;
// criptoEmReal = criptoEmReal.toFixed(2);

// alert("Olá " + nome + " o valor de " + Ethereum + " Ethereum em real é de: R$ "+ criptoEmReal)

function Converter() {
    var ethereum = 8663.63

    var nome = document.getElementById("nome").value;

    var valor = document.getElementById("valor").value;

    var resultado = ethereum * valor;
    resultado.toFixed(2);

    var load = document.getElementById("load");
    load.innerHTML = `<h3> Olá ${nome} ! <br> confira o resultado da conversao de real para a cripto moeda Ethereum: ${valor} ETH é igual: ${resultado} R$ </h3>`


}