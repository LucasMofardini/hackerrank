function breakingRecords(scores) {
    let highScore = 0;
    let lowScore = 0;
    let qtdHighScore = 0;
    let qtdLowScore = 0;

    scores.forEach((score, index) => {
        if(index == 0) {
            highScore = score;
            lowScore = score;
        }else{
            if(score > highScore) { 
                highScore = score;
                qtdHighScore++;
            }
            if(score < lowScore) { 
                lowScore = score;
                qtdLowScore++;
            }
        }   
    });

    return [qtdHighScore, qtdLowScore]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
