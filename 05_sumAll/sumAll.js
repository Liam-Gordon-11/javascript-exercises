const sumAll = function() {
    if (arguments[0] < 0 || arguments[1] < 0 || isNaN(arguments[0]) || isNaN(arguments[1])){
        return "ERROR";
    }

    let big = 0;
    let small = 0;
    let sum = 0;

    if (arguments[0] > arguments[1]){
        big = arguments[0];
        small = arguments[1];
    }else{
        big = arguments[1];
        small = arguments[0];
    }

    for ( let i = small; i <= big; i++){
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
