//Add two numbers x and y together
exports.numAdd = (x, y) => {
    return x + y;
}

exports.numMultiply = (x, y) => {
    return x * y;
}


/*Implement a function named factorial that has one parameter: an integer, n. 
It must return the value of n! (i.e., n factorial).

Example: If n = 4 | result = 24 i.e. (4 x 3 x 2 x 1 = 24)
*/

exports.factorial = (n) => {
    let result = 1;
    while(n > 1) {
        result *= n;
        n--
    }
    return result
}