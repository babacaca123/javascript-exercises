const removeFromArray = function(array, r) {


 for(let i = 0; i < array.length; i++) {
    if (array[i] === r) { 
        array.splice(i, 1);
        i--;
    }
    
}   
return array;
}

// Do not edit below this line
module.exports = removeFromArray;
