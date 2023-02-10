const XLSX = require('xlsx-js-style');

const options = { dense: true };
const workbook = XLSX.readFile('./read.xlsx', options);

console.log(workbook.SheetNames);

console.log(Object.keys(workbook.Sheets).length);

console.log(workbook.Sheets.example !== undefined);

const ws = workbook.Sheets.example;
console.log('example worksheet', ws);

console.log('cols', ws['!cols']); // undefined ???
console.log('rows', ws['!rows']); // undefined ???
console.log('data', ws['!data']); // undefined ???

// denseオプションをtrueにすることで行を配列操作ができる
ws.forEach(row => {
  console.log('row', row);
});

// デフォルトだと1行目をヘッダーとして、2行目以降の値のkeyとなる
// | hoge | fuga |
// | 1111 | 2222 |
// => [{hoge: 1111, fuga: 2222}]
console.log('sheet to json', XLSX.utils.sheet_to_json(ws));
