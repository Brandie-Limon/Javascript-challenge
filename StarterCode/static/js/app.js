// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData)
// Use D3 to select the table
var table = d3.select("table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Append one table row `tr` to the table body
var row = tbody.append("tr");

// Append one cell for the student name
// row.append("td").text(newGrade[0]);

// Append one cell for the student grade
// row.append("td").text(newGrade[1]);
// BONUS: Refactor to use Arrow Functions!
tableData.forEach((UFO) => {
  var row = tbody.append("tr");
  Object.entries(UFO).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

