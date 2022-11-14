function timeConversion(s) {
    const hoursSplit = slice(0,8).split(':');

    hoursSplit[0] = (s.indexOf('PM') > -1) ?
        (hoursSplit[0] == 12 ? '12' : Number(hoursSplit[0]) + 12) :    // Se for de PM 
        (hoursSplit[0] == 12 ? '00' : hoursSplit[0]); // Se for AM

        return hoursSplit.join(':');
}

console.log(timeConversion('12:05:45AM'));