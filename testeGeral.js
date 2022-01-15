const data = "99/03/2000";

function validaData(dataBruta) {
    const divisor = data.split('/');

    if(divisor.length !== 3){
        return NaN;
    }

    const dia = divisor[0];
    const mes = divisor[1];
    const ano = divisor[2]; 

    if(dia > 28 && mes == 2){
        return NaN;
    }

    if(mes > 12 || mes < 1){
        return NaN;
    }

    if(mes == 1 || mes ==3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
        if( dia < 1 || dia > 31){
            return NaN;
        } else{
            return new Date(ano, mes, dia);
        }
    }
    if(mes == 4 || mes == 6 || mes == 9 || mes == 11){
        if (dia < 1 || dia > 30){
            return NaN;
        } else{
            return new Date(ano, mes, dia);
        }
    }

}

console.log(validaData());


