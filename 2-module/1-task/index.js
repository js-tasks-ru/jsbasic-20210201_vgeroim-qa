/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  
  for(let key in salaries) {
    let salary = salaries[key];
    
    if (typeof salary === "number" ) {
      if  (salary.toString() === 'NaN' || 
           salary.toString() === 'Infinity' || 
           salary.toString() === '-Infinity') {
        continue;
      } else {
        sum += salary;
      }
    }
  }
  
  return sum;
}
