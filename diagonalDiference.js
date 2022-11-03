function diagonalDifference(arr) {
    let principal = 0;
    let secondary = 0;
      for (let i = 0; i < arr.length; i++) {
            principal += arr[i][i];
            secondary += arr[i][arr.length - i - 1];
        }
    return Math.abs(principal - secondary)
}

console.log(diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]))

/* caso 1: */
/*
    i = 0

    principal +=  [*11, 2, 4][0], ou seja: 11

    secondary += [11, 2, 4][tamanhoDoArray - 1 - i], tamanhoDoArray = 3 | i = 0 | o menos 1 é por que o indice é sempre 1 menor do que o tamanho do array
                           [3 - 1 - 0] 
                 [11, 2, 4*][2], ou seja: 4

    Na mesma linha pegamos o primeiro elemento do array e o ultimo elemento do array
    principal = 11
    secondary = 4
*/
/* caso 2: */
/*
    i = 1

    principal +=  [4, *5, 6][1], ou seja: 5

    secondary += [4, *5, 6][tamanhoDoArray = 3 - 1 - 1], tamanhoDoArray = 3 | i = 1
                           [3 - 1 - 1]
                 [4, *5, 6][1], ou seja: 5

    principal = 11 + 5
    secondary = 4 + 5

*/
/* caso 3: */
/*
    i = 2

    principal +=  [10, 8, *-12][2], ou seja: -12

    secondary += [10, 8, -12][tamanhoDoArray = 3 - 1 - 1], tamanhoDoArray = 3 | i = 2
                             [3 - 1 - 2]
                 [*10, 8, -12][0], ou seja: 10

    principal = 11 + 5 + -12
    secondary = 4 + 5 + 10

*/
/*
numero absoluto = se for negativo, coloca positivo
portanto 
    principal = 11 + 5 + -12 = 4
    secundario = 4 + 5 + 10 = 19

    diferença entre 
    principal - secundario 
    4         - 19
    resultadp = -15

    como é absoluto = 15
    resultado final = 15
 */