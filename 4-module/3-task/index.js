function highlight(table) {
  let tbody = table.tBodies[0];

  for (let tr of tbody.rows) {
    //block 1 - add gender class
    let isMale = (tr.cells[2].textContent === 'm');      
    isMale ? tr.classList.add('male') : tr.classList.add('female');

    //block 2 - add inline style based on age
    let isAgeLess18 = (Number(tr.cells[1].textContent) < 18);
    isAgeLess18 ? tr.style = 'text-decoration: line-through' : tr.style = '';

    //block 3 - add availability class
    let dataAvailable = tr.cells[3].dataset.available;

    if (typeof dataAvailable === 'undefined') {
        tr.hidden = true;
        continue;
    }

    let isAvailable = (dataAvailable === 'true');
    isAvailable ? tr.classList.add('available') : tr.classList.add('unavailable');
  }
}
