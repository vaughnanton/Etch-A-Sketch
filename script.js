var dimensions = 16;

function fillGrid() {
  for (var x=0; x<dimensions; x++) {
    for (var y=0; y<dimensions; y++) {
      $(".container").append("<div class='unit'></div>");
    }
  }
}

function reset() {
  $('.unit').remove();
  fillGrid();
}

$(document).ready(function(){

  fillGrid();

  //when the mouse enters div, add color
  $('.unit').mouseover(function(){
    $(this).addClass("hover");
  });

 //upon clicking button...
  $('.clear').click(function(){
    //remove the coloring/class
    $('.unit').removeClass("hover");
    //prompt for new grid dimensions
    dimensions = prompt("How many grid spaces do you prefer?", "Enter a number 1-64")
    //create new grid (container size divided by user input)
    var size = 576/dimensions;
    reset();
    //set size of grid pieces
    $('.unit').css({'width':size+'px', 'height':size+'px'});
    //once again add color/class when mouse is hovered
    $('.unit').mouseover(function(){
    $(this).addClass("hover");
  });
  });

});
