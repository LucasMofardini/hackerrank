/* Imprimir os valores positivos, negativos e zeros dividido pelo numero do array */

function plusMinus(arr) {   
    const lengthArr = arr.length;
    let qtdPositive = 0;
    let qtdNegative = 0;
    let qtdZero = 0;

    for (let i = 0; i < arr.length; i++){
        if(arr[i] > 0)  qtdPositive++;
        if(arr[i] < 0)  qtdNegative++;
        if(arr[i] == 0) qtdZero++;
    }
    console.log((qtdPositive / lengthArr).toFixed(6))
    console.log((qtdNegative / lengthArr).toFixed(6))
    console.log((qtdZero / lengthArr).toFixed(6))

}

console.log(plusMinus([
    -4, 3, -9, 0, 4, 1
]))