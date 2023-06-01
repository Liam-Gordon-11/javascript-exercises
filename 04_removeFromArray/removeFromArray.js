const removeFromArray = function() {
    let arrItems = arguments[0];
    for (let i = 1, arrLen = arrItems.length; i <= arrLen; i++){
        if (arrItems.indexOf(arguments[i]) != -1){
            arrItems.splice(arrItems.indexOf(arguments[i]),1);
        }
    }
    return arrItems;
    }
// Do not edit below this line
module.exports = removeFromArray;
