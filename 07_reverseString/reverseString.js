const reverseString = function(string) {
    let arr = string.split("");
    arr = arr.reverse();
    let newString = arr.join("");
    return newString;
};

console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
