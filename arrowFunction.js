//arrow function

const apresentaArrow = (nome) =>`meu nome é ${nome}`;


//arrow function com mais de uma linha de instrunção

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 9 || num2 > 9){
        return "somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(2, 3));
console.log(apresentaArrow("Izaque"));