function loader_on() {
	$('.loader').fadeIn(300);
}

function loader_off() {
	$('.loader').fadeOut(300);
}


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1
  });
});