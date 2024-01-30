// assignment1.js
document.getElementById("tableForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var rows = document.getElementById("rows").value;
  var columns = document.getElementById("columns").value;
  createTable(rows, columns);
});

function createTable(rows, columns) {
  var tableDiv = document.getElementById("tableDiv");
  tableDiv.innerHTML = ""; // Clear the div
  var table = document.createElement("table");
  for (var i = 0; i < rows; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < columns; j++) {
      var td = document.createElement("td");
      td.textContent = i * j; // The value of row times the column
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  tableDiv.appendChild(table);
}
