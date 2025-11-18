//Desafio de Código: Geração de Biomas em um Mundo de Blocos

//Descrição: Você é um mestre construtor em um mundo de blocos e tem a tarefa de gerar biomas em diferentes regiões do mundo. Cada bioma tem características únicas, como tipos de solo, vegetação e clima.

//Tarefa: Sua tarefa é coletar minérios enquanto ataca uma rocha com sua picareta. Use loops e lógica de programação para representar cada golpe na rocha e determinar qual minério foi obtido.

//Entrada: O programa irá solicitar que você digite um número inteiro positivo representando a quantidade de golpes que você deseja dar com a picareta.

//Saída: Para cada golpe que você der, o programa exibirá uma mensagem indicando o resultado do golpe. Será mostrado o número do golpe e o minério obtido, que pode ser 1: Carvao, 2: Ferro, 3: Diamante e 4: Pedra.

//Lê a quantidade de golpes informada pelo usuário.
//OBS: gets() sempre retorna texto, por isso usamos parseInt() para converter para número.
//Código:
const quantidadeGolpes = parseInt(gets(10));

//Lista de minerais disponíveis na ordem em que devem aparecer.
//Índices: 0 -> Carvao, 1 -> Ferro, 2 -> Diamante, 3 -> Pedra
let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

//Loop que simula cada golpe do jogador.
//O contador i começa em 1 porque o enunciado diz "1: Carvao", "2: Ferro", etc.
for (let i = 1; i <= quantidadeGolpes; i++) {

  /*
    ENTENDENDO A LÓGICA DO ÍNDICE:

    - O array 'minerais' usa índices de 0 a 3.
    - Porém, o golpe começa em 1 (e não em 0).
    - Se usássemos diretamente i % 4:
        1 % 4 → 1 → Ferro   (errado, o primeiro deveria ser Carvao)
        2 % 4 → 2
        3 % 4 → 3
        4 % 4 → 0
      Ou seja: o primeiro valor nunca seria 0.

    - Para que o primeiro golpe gere o índice 0 (Carvao),
      precisamos transformar o valor de i antes do módulo.

    - Por isso fazemos: (i - 1)
        Golpe 1 → 1 - 1 = 0 → Carvao
        Golpe 2 → 2 - 1 = 1 → Ferro
        Golpe 3 → 2 - 1 = 2 → Diamante
        Golpe 4 → 3 - 1 = 3 → Pedra
        Golpe 5 → 5 - 1 = 4 → 4 % 4 = 0 → Carvao novamente

    - Aplicar o módulo (%) garante que,
      depois de chegar ao final da lista,
      o índice volte ao início automaticamente.

    Ou seja:
    (i - 1) % minerais.length
    é o cálculo que faz a sequência repetir corretamente.
  */
  let minaIndex = (i - 1) % minerais.length;

  //Exibe o número do golpe, seguido pelo tipo de mineral correspondente.
  print(i + ": " + minerais[minaIndex]);
}
