function gradingStudents(grades) {
    let currentNumber = [];
        for (let i = 0; grades.length > i; i++) {
            const number = grades[i];
            let canContinue = true;
            const restNumber =  number % 5;
            const rondedNumber = (5 - restNumber) + number;

            if(((restNumber < 3) || (number < 38)) && canContinue){
                currentNumber.push(number)
                canContinue = false;
            } else if (canContinue) {
                currentNumber.push(rondedNumber)
            }
    }

  return currentNumber;
}

console.log(gradingStudents([4, 73, 67, 38, 33]).join("\n") + "\n")
