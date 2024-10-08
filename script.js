// Exercicio 1

// Definindo Valores
let idade = 22;

// Exibindo Resultado
document.write("<p> Minha idade é " + idade + " Anos </p>");

// Exercicio 2

// Definindo Valores e Calculando o Resultado
let valorX = 15;
let valorY = 20;
let resultado = valorX + valorY;

// Exibindo Resultado
document.write(
  "<p> O resultado da soma de valorX e ValorY é: " + resultado + "</p>"
);

// Exercicio 3

// Definindo Valores e calculando valor da parcela
let compra = 149.9;
let parcelas = 2;
let valorParcelas = compra / parcelas;

// Exibindo Resultado
document.write(
  "<p> O valor total da compra foi: R$ " + compra + "</p> ",
  " <p> Forma de pagamento: " +
    parcelas +
    "X de R$ " +
    valorParcelas +
    "</p>"
);

// Exercicio 4

// Definindo Valores e calculando os segundos
let minutos = 120;
let segundos = minutos * 60;

// Exibindo Resultado
document.write(
  "<p>" + minutos + " Minutos equiavale á " + segundos + " Segundos! </p>"
);

// Exercicio 5

// Definindo Valores
let nome = "Lucas";
let notaA = 10;
let notaB = 8;
let notaC = 9;

// Calculando Média
let media = (notaA + notaB + notaC) / 3;

// Exibindo Resultado
document.write("<p>Aluno " + nome + " ficou com média " + media + "</p>");

// Exercicio 6

// Definindo Valores
let valorA = 15;
let valorB = 20;

// Alterando Valores
valorA = 20;
valorB = 15;

// Exibindo Novos Valores
document.write(
  "<p> o valorA é " + valorA + "</p>",
  "<p> o valorB é " + valorB + "</p>"
);

// Exercicio 7

// Definindo Valores
let totalEleitores = 1000;
let votosBrancos = 100;
let votosNulos = 50;
let votosValidos = 850;

//Calculando Porcentuais
let percentualBrancos = (votosBrancos / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualValidos = (votosValidos / totalEleitores) * 100;

// Exibindo Resultados
document.write(
  "<p> Percentual de votos brancos: " + percentualBrancos + "% </p>",
  "<p> Percentual de votos nulos: " + percentualNulos + "% </p>",
  "<p> Percentual de votos válidos: " + percentualValidos + "% </p>"
);

// Exercicio 8

// Definindo Valores
let numeroA = 15;
let numeroB = 20;

// Verificando se são Iguais e Exibindo o Resultado
document.write(
  numeroA === numeroB
    ? "Números iguais"
    : numeroA > numeroB
    ? "Primeiro é Maior"
    : "Segundo é Maior"
);

// Exercicio 9

// valor por maçã
let valor;

// Quantidade de maçãs
let quantidade = 12;

// Definindo o valor com base na quantidade
if (quantidade < 12) {
  valor = 0.35;
} else {
  valor = 0.25;
}

// Calculando o valor total
let total = quantidade * valor;

// Mostrando o valor total na página
document.write("<p>Total deu R$" + total + "</p>");

// Exercicio 10

// Definindo Valores
let nomes = "Guilherme";
let anos = 22;
let nascimento = 2000;

// Exibindo os dados na página
document.write(
  "<p>Nome: " +
    nomes +
    ", Idade: " +
    anos +
    ", Nasceu em " +
    nascimento +
    "</p>"
);

// Exercicio 11

// Definindo Valores
let numero = 7;

// Verifica se o número é par ou impar e exibe uma mensagem na tela
if (numero % 2 === 0) {
  alert("Numero é par ");
} else {
  alert("Numero é impar!");
}

// Exercicio 12

// Armazena o ano atual e o ano de nascimento
let anoAtual = 2024;
let anoNascimento = 2000;

// Calcula a idade e verifica se a pessoa pode votar
let idades = anoAtual - anoNascimento;
console.log(
  idade >= 16
    ? "A pessoa pode votar este ano."
    : "A pessoa não pode votar este ano."
);