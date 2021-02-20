function makeDiagonalRed(table) {
  //let tbody = document.querySelector('table');

  for (let tr of table.rows) {
    tr.cells[tr.rowIndex].style = 'background-color: red';  
  }
}
