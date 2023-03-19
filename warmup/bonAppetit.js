function bonAppetit (k, bill, b) {
    let billAccount = 0;

    bill.forEach((element, index) => { if(index != k) billAccount += element });

    const valueDivided = billAccount / 2;

    if(valueDivided == b) return console.log('Bon Appetit');
    if(b > valueDivided) return console.log(b - valueDivided);
}

console.log(bonAppetit(1,
    [3, 10, 2, 9],
    7));

// Entrada - >
// Bill => Array de custos dos itens pedidos
// K => Indice do array Bill, do que Anna nâo come
// B => A quantidade de dinheiro que Anna Pagou

// Saída ->
// Se B (entrada) for menor que b (real) devolver um numero 
