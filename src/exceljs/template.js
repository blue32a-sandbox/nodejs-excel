const ExeclJS = require('exceljs');
const datas = [
  {id: "1", name: "山田太郎", birth: new Date('1980/10/03')},
  {id: "2", name: "高橋花子", birth: new Date('1979/05/21')}
];

(async () => {
  const workbook = await readXlsx('./template.xlsx');
  const ws = workbook.getWorksheet('template');

  const today = new Date();
  ws.getCell('A1').value = 'レポート ' + dateFormat(today);

  datas.forEach((data) => {
    ws.addRow([data.id, data.name, data.birth]);
  });

  await workbook.xlsx.writeFile('./report.xlsx');
})();

async function readXlsx(filename) {
  const workbook = new ExeclJS.Workbook();
  return workbook.xlsx.readFile(filename);
}

function dateFormat(date) {
  return `${date.getFullYear()}/${(date.getMonth() + 1)}/${date.getDay()}`;
}
