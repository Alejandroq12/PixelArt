// The purpose of "use strict" is to indicate that code should be executed in "strict mode".
//with strict mode, you can not, for example use undeclared variables.
"use strict";

// This function is to build a grid in the container
function makeGrid() {
  const table = $("#pixelCanvas");
  const gridH = $("#inputHeight").val();
  const gridW = $("#inputWidth").val();
  table.empty();
// the .append method is used to insert a set of Node objects
  for (let i = 0; i < gridH; i++) {
    table.append("<tr></tr>");
  }

  let Row = $("tr");

  for (let a = 0; a < gridW; a++) {
    Row.append("<td></td>");
  }
//The .click method can be used to execute a click on an element as if the user manually clicked on it.
  let column = table.find("td");
  column.click(function () {
    let chooseColor = $("#colorPicker").val();
    $(this).attr("bgcolor", chooseColor);
  });
}
//The on() method attaches one or more event handlers for the selected elements and child element.
$("#sizePicker").on("submit", function (event) {
  event.preventDefault();
  makeGrid();
});