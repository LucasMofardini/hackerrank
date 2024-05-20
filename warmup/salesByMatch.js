
function salesByMatch(n, arr) {
  let numberOfPairs = 0;
  let numberOfRepeatedValues = [];

  arr.forEach((number) => {
    let repeatedNumber = 0;

    if (numberOfRepeatedValues.includes(number)) return;

    numberOfRepeatedValues.push(number);

    arr.forEach((number2) => {
      if (number == number2) repeatedNumber++;
    });

    if (repeatedNumber == 1) return;

    numberOfPairs = numberOfPairs + Math.trunc(repeatedNumber / 2);
  });

  console.log(numberOfPairs)
}

// Preciso contar quantos pares existem no array
// Percorrer todo o array e buscar valores iguais