const ExeclJS = require('exceljs');

readXlsx('./read.xlsx')
  .then((workbook) => {
    const worksheet = workbook.getWorksheet('example');
    const row = worksheet.getRow(2);
    row.eachCell(function(cell, colNumber) {
      console.log('Cell ' + colNumber + ' = ' + cell.value);
    });
  });

async function readXlsx(filename) {
    const workbook = new ExeclJS.Workbook();
    return workbook.xlsx.readFile(filename);
}
