/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 * @param {string | null} name
 * @returns {boolean}
 */
function isValid(name) {
  //Validate null and blank string
  if (name) {
    //Validate white space and length
    return (hasWhiteSpace(name) || name.length < 4) ? false : true;    
  } else {
    return false;
  }
}

function hasWhiteSpace(name) {
  return (name.indexOf(' ') >= 0 ? true : false); 
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
