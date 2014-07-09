var factorArray = [];
var isPrime = function(number){
    
    for(var i = 2; i<=Math.sqrt(number);i++){
        if (number % i === 0){
            factorArray.push(i);
        }
    }
};

