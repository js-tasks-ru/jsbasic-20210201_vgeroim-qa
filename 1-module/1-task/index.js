/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if(isNumber(n) &&  isNatural(n) ){
    let result = 1;
    
    if (n === 0 || n === 1) {
      return result;
    } else {
        for(i = n; i > 0; i--) {
            result *= i;
          }
      return result;
    }
  } else {
    console.log("Please enter the number greater or equal 0");
  }
}


//Function validates numbers
function isNumber(n){
  return (typeof n === 'number' ? true : false);
}

//Function validates natural numbers
function isNatural(n) {
  return (n >= 0 ? true : false);
}