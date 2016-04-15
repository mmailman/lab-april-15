//Lab assignment for Day 5

function sum(numberOne, numberTwo){
  var sum = numberOne + numberTwo;
  var sumLogStatement = document.getElementById('sum');

  sumLogStatement.textContent = ('\"The sum of ' + numberOne + ' and ' + numberTwo + ' is ' + sum + '.\"');
  return sum;
}

function multiply(numberOne, numberTwo){
  var product = numberOne * numberTwo;
  var multiplyLogStatement = document.getElementById('multiply');
  multiplyLogStatement.textContent = ('\"The product of ' + numberOne + ' and ' + numberTwo + ' is ' + product + '.\"');
  return product;
}

function sumAndMultiply(numberOne, numberTwo, numberThree){
  var totalSum = sum(sum(numberOne, numberTwo), numberThree);
  var totalProduct = multiply(multiply(numberOne, numberTwo), numberThree);
  var sumAndMultiplyLogStatement1 = document.getElementById('sumAndMultiply1');
  var sumAndMultiplyLogStatement2 = document.getElementById('sumAndMultiply2');

  sumAndMultiplyLogStatement1.textContent = ('\"' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' sum  to ' + totalSum + '.\"');
  sumAndMultiplyLogStatement2.textContent = ('\"The numbers ' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' have a product of ' + totalProduct + '.\"');
  return [totalSum, totalProduct];
}

function sumArray(numbersArray){
  var sum = 0;
  var sumArrayLogStatement = document.getElementById('sumArray');

  for(var number = 0; number < numbersArray.length; number++){
    sum += numbersArray[number];
  }
  console.table(numbersArray);
  sumArrayLogStatement.textContent = ('\"' + numbersArray + ' was passed in as an array of numbers, and ' + sum + ' is their sum.\"');
  return sum;
}

function multiplyArray(numbersArray){
  var product = 1;
  var multiplyArrayLogStatement = document.getElementById('multiplyArray');

  for(var number = 0; number < numbersArray.length; number++){
    product *= numbersArray[number];
  }
  console.table(numbersArray);
  multiplyArrayLogStatement.textContent = ('\"The numbers ' + numbersArray + ' have a product of ' + product + '.\"');
  return product;
}
