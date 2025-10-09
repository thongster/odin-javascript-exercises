const convertToCelsius = function(fTemp) {
  // C = (F - 32) x 5 / 9
  let cTemp = (fTemp - 32) * 5 / 9;
  cTemp = Math.round(cTemp * 10) / 10;
  return cTemp;
};

const convertToFahrenheit = function(cTemp) {
  // F = (C x 9 / 5) + 32
  let fTemp = (cTemp * 9 / 5) + 32;
  fTemp = Math.round(fTemp * 10) / 10;
  return fTemp;
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
