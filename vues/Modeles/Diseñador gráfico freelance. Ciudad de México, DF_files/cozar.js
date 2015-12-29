$(document).ready(function(){

// Funciones de Home
function menus() {
	if ($('body').hasClass("b-about")){
		$('.m-about').addClass("active");
	} else if ($('body').hasClass("b-portfolio")){
		$('.m-portfolio').addClass("active");
	} else if ($('body').hasClass("b-home")){
		$('.m-home').addClass("active");
	} else if ($('body').hasClass("b-contact")){
		$('.m-contact').addClass("active");
	}
}
menus();

var isTouch =  !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;

if( !isTouch ){
    // add class which defines hover behavior


$('.trig-tit').hover(function(){
	var $this = $(this).parent();
	$('.titulo-sobre').hide();
	$this.find('.titulo-sobre').show();
	$this.find('p.minis-pro a').css("color","#fff");
});
$('.titulo-sobre').mouseleave(function(){
	var $this = $(this).parent();
	$(this).hide();
	$this.find('p.minis-pro a').css("color","#000");
});


}


function interiores(){
	if ($('body').hasClass("b-about")){
		$('.skills-uno').delay(500).animate({
			'width': '85%'
		},1000);
		$('.skills-dos').delay(500).animate({
			'width': '78%'
		},1000);
	} else
	if ($('body').hasClass("port-lis")){
		$('.btn-cat').click(function() {
		    var $this = this;

		    event.preventDefault();
		    $('.btn-cat, #showall').removeClass("active");
		    $(this).addClass("active");
		    $('div').siblings(".post").stop().fadeOut(300, function(){
			//$('.post').not('.' + $this.id).stop().fadeOut(300, function(){
		    	setTimeout( function (){
		    		$('.'+ $this.id).stop().fadeIn(300);
		    	},300);
		    });
		});

		$('#showall').click(function() {
			event.preventDefault();
			$('.btn-cat').removeClass("active");
		    $(this).addClass("active");
		    $('div').siblings('.post').stop().fadeOut(300, function(){
		    	setTimeout( function (){
		    		$('.post').stop().fadeIn(300);
		    	},300);
		    });
		});
	}
}



interiores();

});//jQ