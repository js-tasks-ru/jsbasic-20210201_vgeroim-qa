function camelize(str) {
  let arr = str.split('-'); //split to array
  let arrCamelCase = [];
  
  if (arr[0] === '-') {
      arrCamelCase = arrayToUpperCase(arr.slice(1)); //all to upper case
  } else {
    arrCamelCase = arrayToUpperCase(arr.slice(1)); //all to upper case without first
    arrCamelCase.unshift(arr[0]); //add first to resutl
  }
  return arrCamelCase.join('');
}

function arrayToUpperCase(arr) {
  return arr.map(element => element[0].toUpperCase() + element.slice(1));
}