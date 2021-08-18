//variaveis de valor
var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var segundoValor = parseInt(prompt("Digite o segundo valor:"))

//variavel da operação
var operacao = prompt("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração:")


//**As quatro operações da calculadora
if (operacao == 1) {
var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = "+ resultado + "</h2>")
}  else if(operacao == 2) {
      var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " * " + segundoValor + " = "+ resultado + "</h2>")
}  else if(operacao == 3) {
    var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = "+ resultado + "</h2>")
}  else if(operacao == 4) {
    var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = "+ resultado + "</h2>")
} else {
  document.write("<h2> Opção Inválida</h2>")
}


// if: se
// else: senão
//else if: senão se
//Concatenação (juntar palavras com variaveis) = ("palavra" + variável)
//Escrevendo na tela = document.write
// O simbolo == é diferente do = que usamos para fazer atribuição