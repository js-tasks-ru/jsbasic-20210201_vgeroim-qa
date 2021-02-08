/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  return str ? stringToUpperCase(str) : str;
}

function stringToUpperCase(str) {
  return str.length === 1 ? str.toUpperCase() : (str.charAt(0).toUpperCase() + str.slice(1));  
}
