function getTime(n) {
    let min, hour, sec;
    let temp = 0;
    if(n===1000){
        sec = Math.floor(n / 1000)
        return `${sec} second`;
    }
    else if (n>1000 && n < 60000) {
        sec = Math.floor(n / 1000)
        return `${sec} seconds`;
    } else if(n===60000){
        minutes = Math.floor(n / 60000);
        return `${minutes} minute`;
    }
    else if (n > 60000 && n < 3600000) {
        minutes = Math.floor(n / 60000);
        let temp = n % 60000;
        sec = Math.floor(temp / 1000);
        return `${minutes} minutes ${sec} seconds`;

    } else {
        hour = Math.floor(n / 3600000);
        temp = n % 3600000;
        min = Math.floor(temp / 60000);
        temp = temp % 60000;
        sec = Math.floor(temp / 1000);
        return `${hour} hours ${min} minutes ${sec} seconds`;
    }
}
// 
module.exports ={getTime};
