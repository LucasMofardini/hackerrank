function miniMaxSum(arr) {
    let sum = 0;
    let maxNumber = 0;
    let minNumber = Math.max(...arr);

   for(let i = 0; arr.length > i; i++){
        if(arr[i] > maxNumber) maxNumber = arr[i];
        if(arr[i] < minNumber) minNumber = arr[i];
        sum += arr[i]
   }
   console.log(sum - maxNumber, sum - minNumber);
}

console.log(miniMaxSum(
    [1, 2, 3, 4, 5]
))

/* 1 é miaor que o ultimo ? */