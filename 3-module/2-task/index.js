function filterRange(arr, a, b) {
  let rangeArr = [];
   
  //Create a new array in range of [a..b]
  for (element = a; element <= b; element++) {
    rangeArr.push(element);
  }
  
  return arr.filter(element => rangeArr.indexOf(element) > -1);
}
