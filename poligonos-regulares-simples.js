/*
	Entrada
	A entrada tem dois inteiros positivos: N e L, que 
	são, respectivamente, o número de lados e o 
	comprimento de cada lado de um polígono 
	regular (3 ≤ N ≤ 1000000 and 1 ≤ L ≤ 4000).

	Saída
	A saída é o perímetro P do polígono regular em 
	uma única linha.
*/

let lines = gets().split("\n");
let line = lines.shift().split(' ');

let C = parseInt(line[0]);
let L = parseInt(line[1]);
let P = C*L;

console.log(P)