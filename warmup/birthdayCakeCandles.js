function birthdayCakeCandles(candles) {
    const maxCandle = Math.max(...candles);
    let qtdMaxCandle = 0;

    for(let i = 0; i < candles.length ; i++){
        if(candles[i] == maxCandle){
            qtdMaxCandle++
        }
    }   
    return qtdMaxCandle;
}

console.log(birthdayCakeCandles(
    [3, 2, 1, 3]
))

/* As alturas das velas são  [3, 2, 1, 3].
 As velas mais altas são 3unidades, e há 2 deles. */

