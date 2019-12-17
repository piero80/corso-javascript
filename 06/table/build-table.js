"use strict";

var mountains = [
  { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
  { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
  { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
  { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
  { name: "Monte Amiata", height: 1738, place: "Siena" }
];
//Per prima cosa abbiamo bisogno di un thead
document.createElement("thead");
function generateTableHead(table) {
  var thead = table.createTHead();
}
//var table = document.querySelector("table");
//generateTableHead(table);

/*SECOND STEP*/

function generateTableHead(table, data) {
  var thead = table.createTHead();
  var row = thead.insertRow();
  for (var i = 0; i < data.length; i++) {
    var th = document.createElement("th");
    var text = document.createTextNode(data[i]);
    th.appendChild(text);
    row.appendChild(th);
  }
}
function generateTable(table, data) {
  for (var i = 0; i < data.length; i++) {
    var row = table.insertRow();
    for (var key in data[i]) {
      var cell = row.insertCell();
      var text = document.createTextNode(data[i][key]);
      cell.appendChild(text);
    }
  }
}
var table = document.querySelector("table");
var data = Object.keys(mountains[0]);
generateTable(table, mountains);
generateTableHead(table, data);
