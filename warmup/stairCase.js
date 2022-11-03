function staircase(n) {
    let output = '';
    let inputPosition = n - 1;
    /* i = linha */
    for(let i = 0; i < n; i++) {
        /* j = coluna */
        for(let j = 0; j < n; j++) {
            /* se a coluna for maior ou igual a posição do input coloque # */
            if(j >= inputPosition ) output += '#'
            else output += ' '
        }
        console.log(output);
        output = '';
        inputPosition -= 1;       
    }
}

console.log(staircase(3))

/* caso 1 : */
/*
    n = 3
    inputPosição = 2;
    (entra no for i linha)
    i = 0
    (entra no for j coluna)
    j = 0
    (entra no if do j)
    j é maior ou igual a inputPosição? não 
    (coloca espaço)
 */
/* caso 2 : */
/*
    n = 3
    inputPosição = 2;
    (entra no for i linha)
    i = 0
    (entra no for j coluna)
    j = 1
    (entra no if do j)
    j é maior ou igual a inputPosição? não 
    (coloca espaço)
 */
/* caso 3 : */
/*
    n = 3
    inputPosição = 2;
    (entra no for i linha)
    i = 0
    (entra no for j coluna)
    j = 2
    (entra no if do j)
    j é maior ou igual a inputPosição? sim 
    (coloca #)
    (diminui 1 do inputPosição)
 */

/* primeira linha completa */
/*
    ' ' ' ' '#' 
*/

/* caso 4 : */
/*
    n = 3
    inputPosição = 1;
    (entra no for i linha)
    i = 1
    (entra no for j coluna)
    j = 0
    (entra no if do j)
    j é maior ou igual a inputPosição? não 
    (coloca espaço)
 */
/* caso 5 : */
/*
    n = 3
    inputPosição = 1;
    (entra no for i linha)
    i = 1
    (entra no for j coluna)
    j = 1
    (entra no if do j)
    j é maior ou igual a inputPosição? sim 
    (coloca #)
 */
/* caso 6 : */
/*
    n = 3
    inputPosição = 1;
    (entra no for i linha)
    i = 1
    (entra no for j coluna)
    j = 2
    (entra no if do j)
    j é maior ou igual a inputPosição? sim 
    (coloca #)
    (diminui 1 do inputPosição)
 */

/* Segunda  linha completa */
/*
    ' ' ' ' '#'
    ' ' '#' '#'
*/

/* caso 7 : */
/*
    n = 3
    inputPosição = 0;
    (entra no for i linha)
    i = 1
    (entra no for j coluna)
    j = 0
    (entra no if do j)
    j é maior ou igual a inputPosição? sim 
    (coloca #)
 */
/* caso 8 : */
/*
    n = 3
    inputPosição = 1;
    (entra no for i linha)
    i = 1
    (entra no for j coluna)
    j = 1
    (entra no if do j)
    j é maior ou igual a inputPosição? sim 
    (coloca #)
 */
/* caso 9 : */
/*
    n = 3
    inputPosição = 1;
    (entra no for i linha)
    i = 1
    (entra no for j coluna)
    j = 2
    (entra no if do j)
    j é maior ou igual a inputPosição? sim 
    (coloca #)
    (diminui 1 do inputPosição)
    (acaba o for i)
 */

/* Segunda  linha completa */
/*
    ' ' ' ' '#'
    ' ' '#' '#'
    '#' '#' '#'
*/