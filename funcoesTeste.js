let nome = "Izaque Farias";
let idade = 34;
let cidade = "Salvador";
let dadosInseridos = false;
let apresentacao = `Meu nome é ${nome} tenho ${idade} e moro na cidade de ${cidade} `;
let mensagemDeErro = "Dados não inseridos!"

function imprimeDados(apresentacao, dadosInseridos, mensagemDeErro){
    if(dadosInseridos === true){
        console.log(apresentacao)
    } else{
        console.log(mensagemDeErro);
    }
    
}

imprimeDados(apresentacao, dadosInseridos, mensagemDeErro); 
