$(function(){
  
    var oldbody = $("body").width();
        var touch = 'ontouchstart' in document.documentElement; //detection for touch devices

	if (touch) {
		 $(window).scroll(function () {
            if ($window.scrollTop() > 70 ){
                $("#topbutton").removeClass("hide");
                $("#topbutton").addClass("show");
            }
            else{
                $("#topbutton").removeClass("show");
                $("#topbutton").addClass("hide");
            }
        });
    }
  
    var scrollLeft = 0;

    
	if(document.body.clientWidth<700){ //useless for tablets & desktop
        $(document).ready(function() {
                        $.slidebars();
                    })
    }
    var $errors = $("#listerrors");
    if($.trim($errors.html()) != "")
    {
    	displayCenterFrame($errors.html());
	$errors.empty();
    }
    function initFormVal(id, value)
    {
        $("#"+id).val(value).css("font-style", "italic");
    }
    
    $("#nl_but").click(showNewsletter);
     $("#nl_text").click(showNewsletterDesktop);
    $("#topbutton").click(scrollSmoth)
    $("#contact").click(toggleContacts);
    
    $('.internal-link').click(checkAccordion);
    
    function checkAccordion(){
        if ($(this).hasClass('home-menu')||$(this).hasClass('whatwedo-menu')||$(this).hasClass('ourwork-menu')||$(this).hasClass('bannermobile')) {
            close_accordion_section()
        }
        
    }


        
    $('.accordion-section-title').click(toggle_accordion);
    $("#nl_name, #nl_email").one("focus", function() {
        $(this).val("").css({"font-style" : "normal"});
    });
    var $window = $(window);
    $window.scroll(function () {
        if ($window.scrollTop() > 70 ){
            $('header').addClass('stick');
        }
        
        else{
            $('header').removeClass('stick');
        }
        });
    $("#nl_send").click(function() {
        var name = $.trim($("#nl_name").val());
        var email = $.trim($("#nl_email").val());
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(name.length < 2 || name == "name")
            displayCenterFrame("The name you enterred is too short, please enter at least two characters");
            else if(!filter.test(email))
                displayCenterFrame("Your email is invalid, please follow this example: example@host.com");                
        else
        {
            alert("Your information has been sent, thank you");
            initFormVal("nl_name", "name");
            initFormVal("nl_email", "email");
            hideNewsletter();
            $.ajax({
               type: "POST",
               url: "/home/newsletter/",
               data: {name: name, email: email},
               success: function(ret) {
                    if($.trim(ret) != "ok")
                        displayCenterFrame($.trim(ret));
               },
               error: function(err) {
                    displayCenterFrame("An error has occured, please try again if this problem happens again, please contact the administrator");
               }
            });
        }
    });
    $(window).on("touchmove touchleave scroll", function(){
        $('.case_product').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass("show");
            }
        });
    });

	window.onpopstate = function() {
        $('body').load(location.href)
	};
});
function displayCenterFrame(content)
{
    $("body").append($("<div/>", {id: "centerframeblack", css: {width: $(document).width(), height: $(document).height()}})
    .append($("<div/>", {id: "centerframe"}).append($("<div/>", {id : "closingframe", click: function() {$("#centerframeblack").remove();}})).append($("<div/>", {id : "centerframetext"}).html(content))));
    var $centerframe = $("#centerframe");
    $centerframe.css({top: $(window).scrollTop() + ($(window).height() - $centerframe.height())/2, "line-height" : $centerframe.css("height")});
    $(window).resize(function() {
        $("#centerframeblack").width($(document).width()).height($(document).height()); 
    });
}
function toggleNewsletter(){
    if($("#nl_back").is('.show')) {
        hideNewsletter();
    }
    else showNewsletter();
}
function showNewsletter()
{
    if(!$(".ct_back_container").is('.show')){
      $(".ct_back_container").addClass("show");
      setTimeout(function(){},10);
    }hideContacts();
        $(".ct_back_container").addClass("show");
        var $nllay = $("#nl");
        var $nl = $("#nl_back");
        var $nlbut = $("#nl_but");
        var $nlclose = $("#nl_close");
        $nllay.css("z-index", 10000000);
        $nl.addClass("show");
        $nlclose.click(toggleContacts);
}
function showNewsletterDesktop(){
    $(".ct_back_container").addClass("show");
    setTimeout(function(){  showNewsletter();},1);
}
function hideNewsletter()
{
    var $nllay = $("#nl");
    var $nl = $("#nl_back");
    var $nlclose = $("#nl_close");
    $nl.removeClass("show");
    $(".homeslide:first").removeClass("show");
	setTimeout(function(){$nllay.css("z-index", 0);}, 1000);
    if(!$(".ct_back_container").is('.close')){
      showContacts();
    }
}
function toggleContacts(){
    if($(".ct_back_container").is('.show')) {
        $(".ct_back_container").addClass("close");
        hideContacts();
        setTimeout(function(){ $(".ct_back_container").removeClass("show");},300);
    }
    else {
        $(".ct_back_container").addClass("show");
        setTimeout(function(){  showContacts();},1);
        $(".ct_back_container").removeClass("close");
    }
}
function showContacts()
{
    if ($("#nl_back").is('.show')) {
        hideNewsletter();
    }
    var $ct = $("#ct_back");
    var $ctbut = $("#ct_but");
    var $ctclose = $("#ct_close");
    $ctbut.unbind("click");
    $ct.css("z-index", 2);
    $ctbut.css({"z-index": 2, "background-position" : "top"});
    $ct.addClass("show");
    $ctclose.click(toggleContacts);
}
function hideContacts()
{
    
    if ($("#nl_back").is('.show')) {
        hideNewsletter();
    }
    var $ct = $("#ct_back");
    var $ctclose = $("#ct_close");
    $ctclose.unbind("click");
    $ct.removeClass("show");
    $(".homeslide:first").removeClass("show") 
}

function close_accordion_section() {
	$('.accordion .accordion-section-title').removeClass('active');
	$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
}

function toggle_accordion(e) {
	var currentAttrValue = $(this).attr('href');
	if($(e.target).is('.active')) {
		close_accordion_section();
		}else {
			close_accordion_section();
			$(this).addClass('active');
			$('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
		}				 
	e.preventDefault();
}





function scrollSmoth(){
	$target = $("#top");
     $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
        });
}
function scrollSmothDown(){
    //var headerHeight = 53;//$("#nav_desktop").height();
	$target = $("#2ndRow");
    var scrollToPosition = $("#2ndRow").offset().top ;//- 53;

    $('html').stop().animate({
        'scrollDown': scrollToPosition
    }, 800, 'swing',function(){
    });
}


