/*
Utilizando 1 matriz e 1 vetor de objetos e um menu de opções,
 faça um programa que crie funções para:
  
1) cadastrar em um vetor 4 carros contendo marca, modelo, ano e valor, 
e para cada carro, informar em uma matriz a nota do carro para cada uma das 5 avaliações que ele recebe da empresa 
Guia Quatro Rodas da Editora Abril.
  
2) calcular e mostrar a média de notas de cada carro, informe junto a marca e modelo do carro
  
3) calcular e mostrar o modelo do carro com menor nota em cada avaliação

  4) calcule e mostre qual das cinco avaliações teve menor média
  */
  
  
  
  
  //cadastrar em um vetor 4 carros contendo marca, modelo, ano e valor, 

  function CadastraCarros(carros){
    //cadastra 5 carros
    for (let i=0; i<5;i++){
    do { 
        let carroinserido = {
            marca: prompt(`Informe a MARCA do carro`).toUpperCase(),
            modelo: prompt(`Informe o MODELO do carro`).toUpperCase(),
            ano: Number(prompt(`Informe o ANO do carro`)),
            valor: Number(prompt(`Informe o VALOR do carro`)),
        }

        // Verifica se o código já existe em algum CÓ
        if (carros.some(carro => carros.marca === carroinserido.marca && carros.modelo === carroinserido.mmodelo && carros.ano === carroinserido.ano)) {
            console.log("Este carro já existe. Informe outro carro.");
        } else {
            carros.push(carro);
            console.log("Carro cadastrado:", carro);
        }
    } while (confirm("Deseja cadastrar outro carro?"));

}
    

    console.log("Carros Cadastradas:", carros);
}

  function lerMatriz(matriz){
    //4x5 (4 linhas e 6 colunas)
    //para cada linha
    for (let i=0; i<5;i++){
        matriz [i] = []
        //cria um vetor dentro de um vetor
        //cria um preenchimento RANDÔMICO PARA O VETOR colocando valores de 1 a 5
        for (let j=0; j<6; j++){
            matriz[i][j] = parseInt((Math.random()*5)+1);
        }
    }
}

function mostraMatriz(matriz,carros){
    let somaMedia = 0;
    let qtdeAvaliacoes = 5;
    
              for (let i=0; i<5;i++){
                    somaMedia = 0;
                    concatenado = `O carro da marca ${carros[i].marca}, modelo ${carros[i].modelo} e ano ${carros[i].ano}, tirou as seguintes notas:`;
                   //coluna
                   for (let j=0; j<6; j++){
                   
                         concatenado = concatenado +` `+ matriz[i][j];
                         somaMedia = somaMedia  + matriz[i][j];

                         if (j == 5){
                         media = somaMedia/qtdeAvaliacoes
                         concatenado = concatenado + ` e sua NOTA MÉDIA foi de: ${media}`;
                         matriz[i][j] = media;
                         }
                         
                }
      }
      console.log(concatenado);
      console.log(matriz)
      return matriz;
}


function MenorNota(matriz,vet_apresenta){
    let menorNota = matriz[0][0];
    let num_menornota = 0;
 //faz uma varredura na matriz e descobre a menor nota
 for(let i = 0; i<5; i++){
    for(let i = 0; i<6; i++){
    if (menorNota < matriz[i][j]){
        menorNota = matriz[i][j]
    } 
   }
 }
 function apresentaMediaNotas(){
    for(let i = 0; i<5; i++){
        for(let i = 0; i<6; i++){
            if (matriz [i][5]){
                
            }

        }


 }


 //descobre quantas menores notas existem.
for(let i = 0; i<5; i++){
    for(let i = 0; i<4; i++){
         if (menorNota  == matriz[i][j]){
             num_menornota++;
             linha = [i]
             } 
      }
    }
    
 //se huver apenas uma menor nota
 if (num_menornota == 1){ 
    concatenado = concatenado + `O carro que tirou a menor nota foi: O carro da marca ${carros[linha].marca}, modelo ${carros[linha].modelo} e ano ${carros[linha].ano}`;
    console.log(concatenado);
 }

//se houver mais de uma menor nota
if (num_menornota > 1){
    for(let i = 0; i<5; i++){
        for(let i = 0; i<4; i++){
            if (num_menornota == matriz[i][j]){
                vet_apresenta.push(matriz[i]);
            }
        }
    }
}

//agora ele vai apresentar
if (vet_apresenta.length > 0) {
    console.log("Carros com menor Nota:");
    vet_apresenta.forEach(item => {
        console.log( `marca ${carros[linha].marca}, modelo ${carros[linha].modelo} e ano ${carros[linha].ano}`);
    });
} else {
    console.log("Não há carros com Menor Nota.");
}
}

  
  function main() {
    let opcao;
    let carros = [];
    let matriz = [];
    let vet_apresenta = [];

    do {
        let input = prompt("Escolha a opção: \n" +
                           "1 - Cadastrar Carro\n" +
                           "2 - Ver as Notasque foram dadas\n" +
                           "3 - Ver quem tirou a menor Nota\n" +
                           "4 - Ver quem tirou a menor Nota\n" +
                           "0 - Sair\n"
        );

        opcao = parseInt(input);

        if (isNaN(opcao)) {
            console.log("Por favor, insira um número válido.");
        } else {
            switch (opcao) {
                case 1: CadastraCarros(carros); break;

                case 2: lerMatriz(matriz); mostraMatriz(matriz,carros); break;

                case 3: lerMatriz(matriz); mostraMatriz(matriz,carros);MenorNota(matriz,vet_apresenta); break;

                case 4: lerMatriz(matriz); mostraMatriz(matriz,carros);MenorNota(matriz,vet_apresenta); break;

                case 0: console.log("Programa encerrado."); break;
                default: console.log("Número inválido.");
            }
        }
    } while (opcao !== 0);
}

main();