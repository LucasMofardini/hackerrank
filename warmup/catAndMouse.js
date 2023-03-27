function catAndMouse(catA, catB, mouse) {
    const diffCatA = Math.abs(mouse - catA);
    const diffCatB = Math.abs(mouse - catB);

    if(diffCatA == diffCatB)
        return("Mouse C");
    else if(diffCatA > diffCatB)
        return("Cat B")
    else
        return("Cat A")
}


// catAndMouse(5, 2, 3);
catAndMouse(1, 3, 2); // Mouse C

// Gatos -> X e Y
// Rato  -> Z

// Ver quem ta mais perto do rato (z)
// Se os 2 estiverem na mesma distancia o rato foge

// Gato A = 2
// Gato B = 6
// Rato = 4

// Gato A 
    // 2, 3, 4
 
// Gato B 
    // 6, 5, 4
