//Desafio de Código: Gerenciamento de Itens Mágicos

//Descrição: Você é um aventureiro em um mundo mágico cheio de perigos e monstros. Durante suas missões, você coleta diversos itens mágicos, cada um com seus próprios atributos e habilidades especiais. Agora, você está desenvolvendo um sistema aprimorado para gerenciar esses itens. Neste novo sistema, você pode criar diferentes tipos de itens mágicos, como armas, armaduras, poções, entre outros. Cada tipo de item terá atributos específicos e contribuirá de maneiras únicas para suas aventuras.

//Tarefa: Crie um objeto que represente um item mágico personalizado. O objeto deve ter atributos como tipo de item, dano e resistência, de acordo com o tipo escolhido. Além disso, crie uma função que calcule o dano causado por um item durante um combate, levando em consideração o tipo de item.

//Entrada: Peça ao usuário para digitar o tipo do item mágico que deseja criar, o dano e a resistência

//Saída: Imprima o tipo do item, o dano, a resistência e o dano em combate. Use a função de cálculo de dano para imprimir o dano causado por esse item em um combate simulado. Quando o tipo do item for igual a 'arma' deve-se multiplicar o dano por dois this.dano * 2 e quando não for arma, é retornado no dano this.dano.

//Código:
//Definição da classe ItemMagico
class ItemMagico {
  //Construtor que recebe tipo, dano e resistência
  constructor(tipo, dano, resistencia) {
    this.tipo = tipo;
    this.dano = dano;
    this.resistencia = resistencia;
  }

  //Função que calcula o dano causado em combate
  calcularDano() {
    //Se o tipo for "arma", o dano dobra
    return this.tipo === 'arma' ? this.dano * 2 : this.dano;
  }
}

//Solicita ao usuário os valores
const tipoItem = gets();                //ex: "arma"
const danoItem = parseInt(gets());      //ex: 50
const resistenciaItem = parseInt(gets()); //ex: 30

//Cria o item personalizado com os valores digitados
const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

//Imprime os atributos do item
print("Tipo: " + itemPersonalizado.tipo);
print("Dano: " + itemPersonalizado.dano);
print("Resistencia: " + itemPersonalizado.resistencia);

//Calcula e imprime o dano causado em combate
const danoTotal = itemPersonalizado.calcularDano();
print("Dano em combate: " + danoTotal);
