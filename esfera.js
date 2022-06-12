// Esfera
/*
    Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R). A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159.

    Dica: Ao utilizar a fórmula, procure usar (4/3.0) ou (4.0/3), pois algumas linguagens (dentre elas o C++), assumem que o resultado da divisão entre dois inteiros é outro inteiro.
 */
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

const PI = 3.14159;

let R = parseFloat(gets());

//TODO: Complete os espaços em branco com uma possível solução para o desafio
//Para precisão numérica utiliza-se o .toFixed(n)

const VOLUME = ( (4/3) * PI * Math.pow(R, 3) )
print("VOLUME = " + Number(VOLUME).toFixed(3));

