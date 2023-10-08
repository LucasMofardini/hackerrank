function run(candies, extraCandies){
    let final = [];
    let bigger = 0;

    candies.forEach(c => c > bigger ? bigger = c : null);

    for(let i = 0; i <= candies.length; i++){
        const val = candies[i] + extraCandies;
        
        if(val >= bigger)
            final.push(true)
        else 
            final.push(false);
    }

    return final;
}

return run([2,3,5,1,3], 3)