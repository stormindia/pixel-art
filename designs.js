// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
let table = $('#pixel_canvas')
let table_column = $("#input_width").val();
let table_rows = $("#input_height").val();
//const color = $("#colorPicker").val();
table.children().remove();

for (var i = 0; i < table_rows; i++){
  table.append('<tr></tr>');
  for(var j = 0; j < table_column; j++){
    table.children().last().append('<td></td>');
  }
};
table.on("click", "td", function(){
  var color = $("#colorPicker").val();
  $(this).css('background-color', color);
})

}

var submitButton = $('input[type="button"]');

submitButton.click(function(button){
  makeGrid();
});
