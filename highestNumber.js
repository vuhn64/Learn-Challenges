var a = [1.2, 2.3, 3.4, 7.8, 5.6];

var b = [2.4, 6.2, 1.2, 9.0];

function highestNumber(array) {
  var highest =  array[0]

  array.forEach(function(element){
    if(element > highest){
      highest = element
    }
  });

  return highest;
}

console.log(highestNumber(a)); // 7.8
console.log(highestNumber(b)); // 9.0
