/*
	Entrada
	A entrada é composta por uma linha contendo 
	quatro números reais com precisão de duas casas 
	decimais A e G (0.01 ≤ A, G ≤ 10.00) Ra e 
	Rg (0.01 ≤ Ra , Rg ≤ 20.00) representando 
	respectivamente o preço por litro do álcool, o 
	preço por litro da gasolina, o rendimento (km/l) 
	do carro utilizando álcool e o rendimento (km/l) 
	do carro utilizando gasolina.

	A entrada deve ser lida do dispositivo de entrada 
	padrão (normalmente o teclado).

	Saída
	A saída deve ser composta por uma única linha 
	contendo o caractere ‘A’ se é mais econômico 
	abastecer a frota com álcool ou o caractere ‘G’ se 
	é mais econômico ou indiferente abastecer a frota 
	com gasolina.

	A saída deve ser escrita no dispositivo de saída 
	padrão (normalmente a tela).
*/

let lines = gets().split('\n');

const [precoAlcool, precoGasolina, rendimentoAlcool, rendimentoGasolina] = lines[0].split(' ').map(x => parseFloat(x));

const precoPorKmAlcool = precoAlcool / rendimentoAlcool;

const precoPorKmGasolina = precoGasolina / rendimentoGasolina;

const maisEconomico = precoPorKmGasolina <= precoPorKmAlcool ? 'G' : 'A';

print(maisEconomico);