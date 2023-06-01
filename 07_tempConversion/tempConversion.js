const convertToCelsius = function() {
  let temp = arguments[0];
  temp = Math.round(((temp - 32) * (5/9))*10)/10;
  return temp ;
};

const convertToFahrenheit = function() {
  let temp = arguments[0];
  temp = Math.round(((temp * (9/5)) + 32)*10)/10;
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
