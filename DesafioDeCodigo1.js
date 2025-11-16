//Desafio de Código: Jornada do Herói

//Descrição: Você é um jovem herói que embarca em uma jornada épica para derrotar o temido dragão que aterroriza o reino. No entanto, você precisa atravessar uma floresta perigosa para chegar à caverna do dragão. Cada passo é crucial, e sua jornada será determinada pela lógica afiada que você possuir.

//Tarefa: Escreva um algoritmo que simule a jornada do herói pela floresta. O herói começa em uma posição inicial e deve dar uma série de passos para atravessar a floresta até a caverna do dragão.

//Entrada: A posição inicial do herói na floresta (um número inteiro). O número total de passos que o herói deve dar (um número inteiro).

//Saída: Imprima a posição final do herói após dar a quantidade de passos especificada.

//Código:
const posicaoInicial = parseInt(gets(18));
const totalPassos = parseInt(gets(9));

//Calcula a posição final do herói:
const posicaoFinal = posicaoInicial + totalPassos;

// Imprime a posição final
console.log("Posicao final do heroi: " + posicaoFinal);
