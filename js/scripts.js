$(document).ready(function(){
   $(".calc").submit(
    function(event){
      // alert("button1 is working");
      var inp1 = parseInt(
      $("input#value1").val());
      var inp2 = parseInt(
      $("input#value2").val());
      // alert(parseInt(inp1) + parseInt(inp2));
      var result = add (inp1, inp2);
      event.preventDefault();
      $(".answer").text(result);
  });
});


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
