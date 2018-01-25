var a = [-2, -1, -4];

function lowestNumber(array) {
  var lowest = array[0]

  array.forEach(function(element) {
    if(element<lowest) {
      lowest=element
    }
  })
  return lowest
}
