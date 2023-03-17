function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const qtdApples = [];
    const qtdOranges = [];

    apples.forEach((apple, i) => {
        const value = a + apple;
        if(value >= s && value <= t) qtdApples.push(apple);
    })
    oranges.forEach((orange, i) => {
        const value = b + orange;
        if(value >= s && value <= t) qtdOranges.push(orange);
    })

    console.log(qtdApples.length);
    console.log(qtdOranges.length);
}

// TUDO QUE TIVER ENTRE S e T é pra pegar // 7 e 10 -> 7, 8, 9, 10

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
