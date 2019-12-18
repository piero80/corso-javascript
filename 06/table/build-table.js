"use strict";

var mountains = [
  { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
  { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
  { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
  { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
  { name: "Monte Amiata", height: 1738, place: "Siena" }
];
/*
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
*/

//Per prima cosa abbiamo bisogno di un thead

/*
document.createElement("thead");
function generateTableHead(table) {
  var thead = table.createTHead();
}
var table = document.querySelector("table");
generateTableHead(table);
*/

/*SECOND STEP*/
/*
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
*/

/*
var table = document.querySelector("table");
var data = Object.keys(mountains[0]);
generateTableHead(table, data);
generateTable(table, mountains);
function generateTableHead(table, data) {
  var thead = document.createElement("thead");
  var row = document.createElement("tr");
  thead.appendChild(row);
  table.appendChild(thead);
  for (var i = 0; i < data.length; i++) {
    var th = document.createElement("th");
    var text = document.createTextNode(data[i]);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  var tbody = document.createElement("tbody");
  table.appendChild(tbody);
  for (var i = 0; i < data.length; i++) {
    var row = document.createElement("tr");
    tbody.appendChild(row);
    for (var key in data[i]) {
      var cell = document.createElement("td");
      row.append(cell);
      var text = document.createTextNode(data[i][key]);
      cell.appendChild(text);
    }
  }
}
*/

//--------MODULE--------//
/*
const GenerateTableModule = (function() {
  let data = {};
  let table = null;
  function init(arr, tableSelector) {
    data = arr;
    table = tableSelector;
  }

  function generateTable() {
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for (var i = 0; i < data.length; i++) {
      var row = document.createElement("tr");
      tbody.appendChild(row);
      for (var key in data[i]) {
        var cell = document.createElement("td");
        row.append(cell);
        var text = document.createTextNode(data[i][key]);
        cell.appendChild(text);
      }
    }
    _generateTableHead(Object.keys(data[0]));
  }

  function _generateTableHead(data) {
    var thead = document.createElement("thead");
    var row = document.createElement("tr");
    thead.appendChild(row);
    table.appendChild(thead);
    for (var i = 0; i < data.length; i++) {
      var th = document.createElement("th");
      var text = document.createTextNode(data[i]);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

  return { init: init, generateTable: generateTable };
})();

GenerateTableModule.init(mountains, document.querySelector("table"));
GenerateTableModule.generateTable();
*/

//--------PROTOTYPE--------//
/*
function Table(data, table) {
  this.data = data;
  this.table = table;
}

Table.prototype.generateTable = function() {
  var tbody = document.createElement("tbody");
  this.table.appendChild(tbody);
  for (var i = 0; i < this.data.length; i++) {
    var row = document.createElement("tr");
    tbody.appendChild(row);
    for (var key in this.data[i]) {
      var cell = document.createElement("td");
      row.append(cell);
      var text = document.createTextNode(this.data[i][key]);
      cell.appendChild(text);
    }
  }
  this._generateTableHead(Object.keys(this.data[0]));
};

Table.prototype._generateTableHead = function(data) {
  var thead = document.createElement("thead");
  var row = document.createElement("tr");
  thead.appendChild(row);
  this.table.appendChild(thead);
  for (var i = 0; i < data.length; i++) {
    var th = document.createElement("th");
    var text = document.createTextNode(data[i]);
    th.appendChild(text);
    row.appendChild(th);
  }
};

const table = new Table(mountains, document.querySelector("table"));
table.generateTable();
*/
