const adr = 'http://localhost:8080/default.html?year=2017&month=february';
const url = require('url');
const q = url.parse(adr, true);

console.log(q.host);        //returns 'localhost:8000'
console.log(q.pathname);    //returns '/default.html'
console.log(q.search);      //returns '?year=2017&month=february'

const qdata = q.query;      //returns and object: {year : 2017, month : february}
console.log(qdata.month);   //returns 'february