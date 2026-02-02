const palindromes = function (str) {
    let clean = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    let reverse = ''
    

    for(let i = clean.length - 1; i >= 0; i--){
        reverse += clean[i];
        
    }
    return clean === reverse;
};

// Do not edit below this line
module.exports = palindromes;
