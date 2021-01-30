/*Crie um programa que peça os ingressos, os custos e o % de impostos, e calcule o ganho depois de impostos. Deve imprimir o resultado no site com o símbolo $ na frente.*/

var income = prompt("Qual é o valor da entrada ");

var costs = prompt("Qual é o valor da saída?");

var percents = prompt("Qual é a porcentagm?");


var grossProfit = income - costs;
var tax = grossProfit*percents/100

var netIncome = grossProfit - tax;

document.write("Sua Renda líquida é de R$" + netIncome)


