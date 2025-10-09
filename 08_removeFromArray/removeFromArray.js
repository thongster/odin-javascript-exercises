const removeFromArray = function(arr, value) {
    for (i = 0; i < arr.length; i++) {
        let index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
    };
    return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 4));

// Do not edit below this line
module.exports = removeFromArray;
