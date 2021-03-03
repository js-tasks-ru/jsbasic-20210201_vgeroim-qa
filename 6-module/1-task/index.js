/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = this.renderTable(rows);
  }

  renderTable(params) {
    let table = document.createElement('table');
    let thead = table.createTHead();
    let row = thead.insertRow();
    let tbody = table.appendChild(document.createElement('tbody'));

    //create table header
    for (let columnName of ['Имя', 'Возраст', 'Зарплата', 'Город', '']) {
      let th = document.createElement('th');
      let text = document.createTextNode(columnName);
      th.appendChild(text);
      row.appendChild(th);
    }

    //seed data for table body
    params.forEach(param => {
      let newRow = tbody.insertRow();
      let button = document.createElement('button');
      button.appendChild(document.createTextNode('X'));

      for (let key in param) {
        newRow.insertCell().appendChild(document.createTextNode(param[key]));
      }

      newRow.insertCell().appendChild(button);
    });

    table.addEventListener('click', this.deleteRowOnClick.bind(this));

    return table;
  } 

  deleteRowOnClick(e) {
    if (e.target.tagName === 'BUTTON') {
      let index = e.target.closest('tr').rowIndex;
      e.target.closest('table').deleteRow(index);
    }
  }
}
