const reverseString = function(string) {
   
    rString = string.split("")

    rString.reverse();

    reversed = rString.join("");    

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
