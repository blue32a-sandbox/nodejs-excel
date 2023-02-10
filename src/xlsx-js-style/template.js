const XLSX = require('xlsx-js-style');

const options = { dense: true };
const workbook = XLSX.readFile('./template.xlsx', options);

const ws = workbook.Sheets.template;

let row = [
	{ v: "Courier: 24", t: "s", s: { font: { name: "Courier", sz: 24 } } },
	{ v: "bold & color", t: "s", s: { font: { bold: true, color: { rgb: "FF0000" } } } },
	{ v: "fill: color", t: "s", s: { fill: { fgColor: { rgb: "E9E9E9" } } } },
	{ v: "line\nbreak", t: "s", s: { alignment: { wrapText: true } } },
];

XLSX.utils.sheet_add_aoa(ws, [row], {origin: "A4"});

const newwb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(newwb, ws, "report");

XLSX.writeFile(newwb, "report.xlsx");
