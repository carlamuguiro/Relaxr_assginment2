
$(document).ready(function() {
  // Handler for .ready() called.

  $(document).on('click', '.readmore', function(event){
  	
  	event.preventDefault();	
  	$(".readmore") .hide()
  	$("#show-this-on-click").slideDown(400, function(){
		$(".readless").show()
    })

  })

  $(document).on('click', '.readless', function(event){
  	
  	event.preventDefault();
  	
  	$(".readmore").show()

  	$(".readless") .hide()

  	$("#show-this-on-click").slideUp()

  })

  $(document).on('click', '.readless', function(event){
  	
  	event.preventDefault();
  	
  	$(".readless") .hide()

  	$("#show-this-on-click").slideUp(400, function(){
		$(".readmore").show()

    })

  })

    $(document).on('click', '.learnmore', function(event){
  	
  	event.preventDefault();	
  	$(".learnmore") .hide()
  	$("#learnmoretext").slideDown(400, function(){
		$("#learnmoretext").show()
    })

  })
    // 400 is the default slidedown duration in ms which you can change if you want
    // need to include something as first argument bc the placement of the callback function must be as second argument
    // something that gets run when animation is complete
});


// PRIMARY COLUMN
// user clicks button
// read more button changes color to indicate interaction
// read more button dissapears
// rest of post appears with 'read less button'
// 'read less' btn closes the below action and takes user back to stage 1 

// SECONDARY COLUMN
// user clicks button
// read more button changes color to indicate interaction
// read more button disapears
// rest of post appears with 'read less button'
// 'read less' btn closes the below action and takes user back to stage 1 