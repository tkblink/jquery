$(document).ready(function(){

//When the mouseover over a block, Change the background 
//color of the block to whatever color you want.

//After the mouse leaves the block the color should return to white.

$('.block').on('mouseover', '.block', function() {
    $(this).css('background-color', 'green'); 
 }).on('mouseout', '.block', function(){
  		$(this).css('background-color', 'white');
  });

//Remove the block when you click on it

$(document).on('click', '.block', function() {
	$(this).remove();
});


//Add a block every X seconds
var counter = 0;
var frequency= 2000;

setInterval(function(){
	if(counter==0){
		$('body').append('<div class="row"><div class="block">New Block</div></div>');
		counter++;
	} else if(counter > 0 && counter < 3) {
		$('.row').last().append('<div class="block">New Block</div>');
		counter++;
	} else {
		$('.row').last().append('<div class="block">New Block</div>');
		counter=0;
	}

}, frequency);


});

});