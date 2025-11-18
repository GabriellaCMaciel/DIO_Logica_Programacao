//Desafio de Código: Coleta de Tesouros no Dungeon

//Descrição: Sua missão é vasculhar as salas da masmorra em busca de recompensas lendárias e desafios perigosos. Cada sala pode conter monstros formidáveis, tesouros preciosos ou ambos. Use suas habilidades estratégicas para enfrentar as ameaças e coletar os tesouros!

//Tarefa: Escreva um programa que simule sua jornada heróica pela masmorra. O programa deve percorrer cada sala e verificar se há tesouros ou monstros. Se você encontrar um tesouro, colecionará a recompensa. Se encontrar um monstro, terá que derrotá-lo para continuar. Atenção! Em nossa resolução utilizamos a função.includes() do JavaScript para verificar se um número (representando a sala atual) está presente nos arrays salasComTesouro e salasComMonstro.

//Entrada: O número total de salas no dungeon (um número inteiro).

//Saída: Sempre que encontrar um tesouro, imprima " Tesouro na sala X!". Sempre que encontrar um monstro, imprima "Monstro na sala X!".

//Código:
const totalSalas = parseInt(gets(8));
//Aqui temos uma demonstração de array com valores já predefinidos:
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

//Aqui temos uma forma de loop para percorrer cada sala da masmorra:
for (let sala = 1; sala <= totalSalas; sala++) {
//Utilizamos o .includes() para verificar se um número está presente nos arrays:
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

//Implementa uma condição necessária para verificar e exibir se há tesouro na sala e se há montro na sala:
    if ( temTesouro == true ) {
        print("Tesouro na sala " + sala + "!");
    } else if ( temMonstro == true ) {
        print("Monstro na sala " + sala + "!");
    }
}