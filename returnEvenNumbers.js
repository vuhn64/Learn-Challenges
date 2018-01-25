function isEven(x) {
  return x % 2 == 0;
}

function returnEvenNums(array) {
  var evens = [];

  array.forEach(function(element) {
    if (isEven(element)) {
      evens.push(element);
    }
  });

  if (evens.length > 0) {
    return evens;
  } else {
    return "No even numbers found.";
  }
}
function isOdd(x) {
  return x % 2 !==
}
