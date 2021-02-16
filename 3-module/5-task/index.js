function getMinMax(str) {
  let charNumbers = str.split(','); // get rid of all commas
  charNumbers = charNumbers.join(' ');
  charNumbers = charNumbers.split(' '); // get rid of all spaces

  let numbers = charNumbers.map(element => Number(element))
                           .filter(element => !isNaN(element));

  return { min: Math.min(...numbers), max: Math.max(...numbers) }
}
