var mergeAlternately = function(word1, word2) {
    const ws1 = word1.split('');
    const ws2 = word2.split('');
    
    let final = '';

    const bigger = word1.length > word2.length 
    ? word1.length 
    : word2.length;
    
    for(let i = 0; i <= bigger; i++){
        const aux = (ws1[i] ?? '') + (ws2[i] ?? '');
        final = final + aux;
    }

    return final
};

return mergeAlternately("abc", "pqr");