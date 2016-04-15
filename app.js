//Lab assignment for Day 5

function sum(numberOne, numberTwo){
  var sum = numberOne + numberTwo;
  //console.log('\"The sum of ' + numberOne + ' and ' + numberTwo + ' is ' + sum + '.\"');
  return sum;
}

function multiply(numberOne, numberTwo){
  var product = numberOne * numberTwo;
  //console.log('\"The product of ' + numberOne + ' and ' + numberTwo + ' is ' + product + '.\"');
  return product;
}

function sumAndMultiply(numberOne, numberTwo, numberThree){
  var sumOfOneAndTwo = sum(numberOne, numberTwo);
  var totalSum = sum(sumOfOneAndTwo, numberThree);
  var productOfOneAndTwo = multiply(numberOne, numberTwo);
  var totalProduct = multiply(productOfOneAndTwo, numberThree);
  console.log('\"' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' sum  to ' + totalSum + '.\"');
  console.log('\"The numbers ' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' have a product of ' + totalProduct + '.\"');
  return [totalSum, totalProduct];
}
