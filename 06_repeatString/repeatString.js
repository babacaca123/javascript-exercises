const repeatString = function(string, num) {
    
    let rString = "";

    while (num > 0){
        rString += string;
        num--;
    }
    return rString;
};

// Do not edit below this line
module.exports = repeatString;
