//Lab assignment for Day 5


//good summary of getElementById variables
var sumLogStatement = document.getElementById('sum');
var multiplyLogStatement = document.getElementById('multiply');
var sumAndMultiplyLogStatement1 = document.getElementById('sumAndMultiply1');
//created additional sumAndMultiplyLogStatement variable for product output
var sumAndMultiplyLogStatement2 = document.getElementById('sumAndMultiply2');
var sumArrayLogStatement = document.getElementById('sumArray');
var multiplyArrayLogStatement = document.getElementById('multiplyArray');

//function arguments have clear naming
function sum(numberOne, numberTwo){
  var sum = numberOne + numberTwo;
  sumLogStatement.textContent = ('\"The sum of ' + numberOne + ' and ' + numberTwo + ' is ' + sum + '.\"');
  return sum;
}

function multiply(numberOne, numberTwo){
  var product = numberOne * numberTwo;
  multiplyLogStatement.textContent = ('\"The product of ' + numberOne + ' and ' + numberTwo + ' is ' + product + '.\"');
  return product;
}

function sumAndMultiply(numberOne, numberTwo, numberThree){
  var totalSum = sum(sum(numberOne, numberTwo), numberThree);
  var totalProduct = multiply(multiply(numberOne, numberTwo), numberThree);
  sumAndMultiplyLogStatement1.textContent = ('\"' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' sum  to ' + totalSum + '.\"');
  //need to create an additional variable to attach to <p> tag
  //fixed
  sumAndMultiplyLogStatement2.textContent = ('\"The numbers ' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' have a product of ' + totalProduct + '.\"');
  return [totalSum, totalProduct];
}

function sumArray(numbersArray){
  var sum = 0;
  //pretty cool use of a for loop
  for(var number = 0; number < numbersArray.length; number++){
    sum += numbersArray[number];
  }
  console.table(numbersArray);
  sumArrayLogStatement.textContent = ('\"' + numbersArray + ' was passed in as an array of numbers, and ' + sum + ' is their sum.\"');
  return sum;
}

function multiplyArray(numbersArray){
  var product = 1;
  //still like the for loop
  for(var number = 0; number < numbersArray.length; number++){
    product *= numbersArray[number];
  }
  console.table(numbersArray);
  multiplyArrayLogStatement.textContent = ('\"The numbers ' + numbersArray + ' have a product of ' + product + '.\"');
  return product;
}
