// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));

var add = function(number1,number2) {
  return number1 + number2;
};

var subtract = function(number1, number2){
    return number1 - number2;
}

var multiply = function (number1, number2){
  return number1 * number2;
}

var divide = function (number1, number2){
  return number1 / number2;
}

// var result = alert(add(number1, number2));
// var result = alert(subtract(number1, number2));
// var result = alert(multiply(number1, number2));
// var result = alert(divide(number1, number2));

var w = parseInt(prompt("what is your weight"));
var h = parseInt(prompt("what is your height"));

function bmi(weight, height){
  var bmi = (weight * 703) / height;
  return bmi;
}

alert(bmi(w,h));


// var bmiCalc = bmi(prompt("what is your weight")),parseInt(prompt("what is your height")));
