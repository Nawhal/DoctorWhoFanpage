$(function(){
        $(".internal-link").click(updateView);
        $(".internal-link").click(visitedLink);
});


function updateView()
{

        $('.internal-link').unbind('click',updateView);
        $('.internal-link').unbind('click',visitedLink);
    $('#center').css('min-height',$('#center').height());
	$url = $(this).children("a").attr("href");
	window.history.pushState({path:$url},'',$url);
    var timeStart = new Date().getTime();
	$('#loading').addClass('true'); //set timeStart
    $('#loading').removeClass('fade-out');
    $('#loading').addClass('fade-in');

    setTimeout(function(){
        $('#container').removeClass('fade-in');
        $('#container').addClass('fade-out');
    },400  );//wait for the slidebar to close
    setTimeout(function(){
        $.ajax({
                type: "GET",
                url: $url,
                success: function(data) {
                    matches = data.match(/<title>(.*?)<\/title>/);
                    title = matches[1];
                    $('title').html(title);
                    $res_productsslides = $(data).find('#container').html();
                    setTimeout(function(){
                        $('#container').html($res_productsslides);
                        
                        $('#center').css('min-height',730);
                        $('#container').addClass('fade-in');
                        
                        $('#container').removeClass('fade-out');
                        setTimeout(function(){
                            //$('#container').removeClass('faded');
                        },200);
                        var timeWait =  1700- ((new Date().getTime() - timeStart)%1700);
                        scrollSmoth();//window.top.window.scrollTo(0,0);
                        setTimeout(function(){
                            $('#loading').removeClass('fade-in');
                            $('#loading').addClass('fade-out');
                            setTimeout(function(){$('#loading').removeClass('true')},200);
                        },timeWait-200);
                    },500); 
                },
                error: function(err) {
                    alert("An error has occured, please try again if this problem happens again, please contact the administrator");
                    return true;
                }
        });
    },400)
	return false;
}

function visitedLink(){
    $('.visitedlink').addClass('normalmenu');
	$('.visitedlink').removeClass('visitedlink');
    
    var menuselected = window.location.pathname;
    if (menuselected=='/') {
        menuselected='/home/';
    }
    var menuselected2 = menuselected.match(/\/([a-z])\w+\//);
    var submenu = ('/'+menuselected.replace(menuselected2[0],'')).match(/\/([a-z])\w+\//);
    menuselected = menuselected2[0].replace( /\//g, '' );
    

            if ($(this).hasClass('sub-menu')) {
                $(this).addClass("visitedlink");
            }
        menuselected = '.'+menuselected+'-menu';
   
        $(menuselected).removeClass('normalmenu');
        $(menuselected).addClass('visitedlink');

}