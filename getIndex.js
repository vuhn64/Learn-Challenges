function highest(array){
  var most =  array[0]

  array.forEach(function(element){
    if(element>most){
      most=element
    }
  })

  return array.indexOf(most)
  //position of highest number in array and where is it
}
