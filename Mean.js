function sum(array){
  var total =0
  array.forEach(function(element) {
    total= element + total
  })
  return total
}

function mean (array){
  var sumOfNumbers = sum(array);

  var average = sumOfNumbers / array.length;

  return average;
}
