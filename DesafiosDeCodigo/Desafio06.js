//Desafio de Código: Combinando Nomes de Pokémons

//Descrição: Imagine um universo onde você é um Mestre Pokémon com o poder de criar novas criaturas através da combinação de nomes. Seu algoritmo é a chave para dar vida a esses seres incríveis. Você receberá uma primeira parte do nome de um Pokémon e sua tarefa é completá-la com o sufixo mágico adequado, revelando o nome completo do Pokémon.

//Tarefa: Sua missão é criar uma função extraordinária chamada combinarNomePokemon. Essa função possui um toque mágico que transforma uma entrada simples em algo verdadeiramente especial.

//Entrada: A entrada consistirá em uma única string representando a primeira parte do nome de um Pokémon.

//Saída: A função deve retornar uma nova string que é a combinação da parte inicial(Préfixo) do nome do Pokémon com o sufixo final do nome, formando um nome de Pokémon completo.

//Código:
//Entrada da palavra usando o gets():
var nomeEntrada = gets(); 
//Aqui o programa recebe uma string que representa a primeira parte do nome de um Pokémon.
//Exemplo: "Bulba", "Ivy", "Venu".

//Função responsável por combinar a primeira parte com o sufixo "saur"
function combinandoNomesPokemons(palavra) {
  
  /*Aqui nós criamos o nome completo do Pokémon.
  Estamos concatenando a palavra recebida como parâmetro
  com o sufixo "saur", formando algo como:
  palavra = "Bulba" → resultado = "Bulba" + "saur" → "Bulbasaur" */
  let palavraPokemon = palavra + "saur";

  //Retornamos o nome completo gerado
  return palavraPokemon;
}

//Chamando a função "combinandoNomesPokemons" com o nome informado e armazenando o resultado na variável "palavraGerada":
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

//Exibindo o nome gerado:
print(palavraGerada);
