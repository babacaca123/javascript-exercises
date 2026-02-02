const fibonacci = function(a) {


    let fibo = [0, 1]
    x = 0;
    for(let i = 1; i < a ; i++){
        x = fibo[i] + fibo[i -1]
        fibo.push(x);
    }
    return  a < 0 ? "OOPS" : fibo[a];
};

// Do not edit below this line
module.exports = fibonacci;
