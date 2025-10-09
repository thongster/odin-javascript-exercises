const leapYears = function(year) {
    // must be divisble by 4
    // not divisible by 100
    // if divisible by 400 then true

    if (year % 100 === 0 && year % 400 != 0) {
        return false;
    } else if (year % 4 === 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(leapYears(1900));

// Do not edit below this line
module.exports = leapYears;
