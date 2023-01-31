const ExeclJS = require('exceljs');

const workbook = new ExeclJS.Workbook();
const worksheet = workbook.addWorksheet('example');
worksheet.columns = [
  { header: 'ID', key: 'id' },
  { header: 'Name', key: 'name' },
  { header: 'D.O.B.', key: 'dob' },
];
worksheet.addRow({id: 1, name: 'John Doe', dob: new Date(1970,1,1)});
worksheet.addRow({id: 2, name: 'Jane Doe', dob: new Date(1965,1,7)});
writeXlsx(workbook, './write.xlsx');

async function writeXlsx(workbook, filename) {
  await workbook.xlsx.writeFile(filename);
}
