//Lab assignment for Day 5

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
  sumAndMultiplyLogStatement.textContent = ('\"' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' sum  to ' + totalSum + '.\"');
  console.log('\"The numbers ' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' have a product of ' + totalProduct + '.\"');
  return [totalSum, totalProduct];
}

function sumArray(numbersArray){
  var sum = 0;
  for(var number = 0; number < numbersArray.length; number++){
    sum += numbersArray[number];
  }
  console.table(numbersArray);
  sumArrayLogStatement.textContent = ('\"' + numbersArray + ' was passed in as an array of numbers, and ' + sum + ' is their sum.\"');
  return sum;
}

function multiplyArray(numbersArray){
  var product = 1;
  for(var number = 0; number < numbersArray.length; number++){
    product *= numbersArray[number];
  }
  console.table(numbersArray);
  multiplyArrayLogStatement.textContent = ('\"The numbers ' + numbersArray + ' have a product of ' + product + '.\"');
  return product;
}

var sumLogStatement = document.getElementById('sum');
var multiplyLogStatement = document.getElementById('multiply');
var sumAndMultiplyLogStatement = document.getElementById('sumAndMultiply');
var sumArrayLogStatement = document.getElementById('sumArray');
var multiplyArrayLogStatement = document.getElementById('multiplyArray');
