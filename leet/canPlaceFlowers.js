var canPlaceFlowers = function(flowerbed, n) {
    let qtdPlaces = 0;

    for(let i = 0; i <= flowerbed.length - 1; i++)
    {
        const prev = (flowerbed[i - 1] ?? 0) == 0;
        const now = (flowerbed[i] ?? 0) == 0; 
        const next = (flowerbed[i + 1] ?? 0) == 0;

        if (prev && now && next){
            flowerbed[i] = 1
            qtdPlaces++
        } 
    }

    return qtdPlaces >= n;
};;

return canPlaceFlowers([0,0,1,0,0], 1);