/* Created by Gewest13 */
/* www.gewest13.nl   */
/* info@gewest13.nl  */

/* Cycle transitions */
$.fn.cycle.transitions.scrollVert = {
    before: function( opts, curr, next, fwd ) {
        opts.API.stackSlides( opts, curr, next, fwd );
        var height = opts.container.css('overflow','hidden').height();
        opts.cssBefore = { top: fwd ? -height : height, left: 0, opacity: 1, display: 'block' };
        opts.animIn = { top: 0 };
        opts.animOut = { top: fwd ? height : -height };
    }
};


var scroll_timeout;

function animate_arrow(){
	$(".option_arrow").css({backgroundPosition:"-44px 0"});
	setTimeout(function(){
		$(".option_arrow").css({backgroundPosition:"-88px 0"});
		setTimeout(function(){
			$(".option_arrow").css({backgroundPosition:"-132px 0"});
			setTimeout(function(){
				$(".option_arrow").css({backgroundPosition:"-176px 0"});
				setTimeout(function(){
					$(".option_arrow").css({backgroundPosition:"-220px 0"});
					setTimeout(function(){
						$(".option_arrow").css({backgroundPosition:"-264px 0"});
						setTimeout(function(){
							$(".option_arrow").css({backgroundPosition:"-308px 0"});
							setTimeout(function(){
								$(".option_arrow").css({backgroundPosition:"0 0"});
								setTimeout(function(){
									animate_arrow();
								},100);
							},200);
						},100);
					},100);
				},100);
			},100);
		},100);
	},100);
};

var user;

  window.fbAsyncInit = function() {
    FB.init({
        appId   : '1427843454152701',
        status  : true, // check login status
        xfbml   : true // parse XFBML
    });

  };

function fb_login(){
    FB.login(function(response) {

        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            //console.log(response); // dump complete info
            access_token = response.authResponse.accessToken; //get access token
            user_id = response.authResponse.userID; //get FB UID

		    FB.api('/me', function(response) {
		      console.log('Successful login for: ' + response.name);
				user = response.name;
				fid = response.id;
				link = response.link;
		    });
            $(".block.active").addClass("log");
            $(".login").addClass("log");

        } else {
            //user hit cancel button
            console.log('User cancelled login or did not fully authorize.');

        }
    }, {
        scope: 'publish_stream,email'
    });
}
(function() {
    var e = document.createElement('script');
    e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
    e.async = true;
    document.getElementById('fb-root').appendChild(e);
}());


$(document).ready(function(){

	if($("#home_lines").length>0){
		
		setTimeout(function(){
			$("#tickets_alert").removeClass("small");
		},2000);
		
	}
	
	if($("#home_grid_15").length>0){
	
		
		$("#home_lines").css({height:$(window).height()-111});
	
		$(".griditem").each(function(){
			$(this).css({height:$(this).width()});
		});
		
		$(".videolink").click(function(){
			$(".videocon").css({display:"block"});
			$(".videocon").stop().animate({opacity:1},600,"easeOutExpo");
		});
		
		$(".videocon").find(".closevid").click(function(){
			$(".videocon").stop().animate({opacity:0},600,"easeOutExpo",function(){
				$(".videocon").css({display:"none"});
			});
		});
		
		function animate_stripes(){
			$(".movieblock").find("img").attr("src","/images/algemeen/purplestripes2.png");
			setTimeout(function(){
				$(".movieblock").find("img").attr("src","/images/algemeen/purplestripes3.png");
			},100);
			setTimeout(function(){
				$(".movieblock").find("img").attr("src","/images/algemeen/purplestripes4.png");
			},200);
			setTimeout(function(){
				$(".movieblock").find("img").attr("src","/images/algemeen/purplestripes5.png");
			},300);
			setTimeout(function(){
				$(".movieblock").find("img").attr("src","/images/algemeen/purplestripes6.png");
			},400);
			setTimeout(function(){
				$(".movieblock").find("img").attr("src","/images/algemeen/purplestripes7.png");
			},500);
			setTimeout(function(){
				$(".movieblock").find("img").attr("src","/images/algemeen/purplestripes8.png");
			},600);
			setTimeout(function(){
				$(".movieblock").find("img").attr("src","/images/algemeen/purplestripes9.png");
			},700);
			setTimeout(function(){
				$(".movieblock").find("img").attr("src","/images/algemeen/purplestripes.png");
			},800);
		}
		
		$(".movieblock").hover(function(){
			animate_stripes();
			hoverInterval = setInterval(animate_stripes, 900);
		},function(){
			clearInterval(hoverInterval);
			$(".movieblock").find("img").attr("src","/images/algemeen/purplestripes.png");
		});
		
		function animate_packages(){
			$(".packageblock").find("img").attr("src","/images/algemeen/purplestripes2.png");
			setTimeout(function(){
				$(".packageblock").find("img").attr("src","/images/algemeen/purplestripes3.png");
			},100);
			setTimeout(function(){
				$(".packageblock").find("img").attr("src","/images/algemeen/purplestripes4.png");
			},200);
			setTimeout(function(){
				$(".packageblock").find("img").attr("src","/images/algemeen/purplestripes5.png");
			},300);
			setTimeout(function(){
				$(".packageblock").find("img").attr("src","/images/algemeen/purplestripes6.png");
			},400);
			setTimeout(function(){
				$(".packageblock").find("img").attr("src","/images/algemeen/purplestripes7.png");
			},500);
			setTimeout(function(){
				$(".packageblock").find("img").attr("src","/images/algemeen/purplestripes8.png");
			},600);
			setTimeout(function(){
				$(".packageblock").find("img").attr("src","/images/algemeen/purplestripes9.png");
			},700);
			setTimeout(function(){
				$(".packageblock").find("img").attr("src","/images/algemeen/purplestripes.png");
			},800);
		}
		
		$(".packageblock").hover(function(){
			animate_packages();
			hoverInterval = setInterval(animate_packages, 900);
		},function(){
			clearInterval(hoverInterval);
			$(".packageblock").find("img").attr("src","/images/algemeen/purplestripes.png");
		});
		
		function animate_pinkwave(){
			$(".ticketsblock").find("img").css('transform','scaleX(-1)');
			$(".ticketsblock").find("img").css('-webkit-transform','scaleX(-1)');
			$(".ticketsblock").find("img").css('-moz-transform','scaleX(-1)');
			$(".ticketsblock").find("img").css('-ms-transform','scaleX(-1)');
			$(".ticketsblock").find("img").css('-o-transform','scaleX(-1)');
			setTimeout(function(){
			$(".ticketsblock").find("img").css('transform','scaleX(1)');
			$(".ticketsblock").find("img").css('-webkit-transform','scaleX(1)');
			$(".ticketsblock").find("img").css('-moz-transform','scaleX(1)');
			$(".ticketsblock").find("img").css('-ms-transform','scaleX(1)');
			$(".ticketsblock").find("img").css('-o-transform','scaleX(1)');
			},150);	
		}
		
		$(".ticketsblock").hover(function(){
			animate_pinkwave();
			hoverInterval = setInterval(animate_pinkwave, 300);
		},function(){
			clearInterval(hoverInterval);
		});
		
		function animate_bluewave(){
			$(".articleblock").find("img").css('transform','rotate(180deg)');
			$(".articleblock").find("img").css('-webkit-transform','rotate(180deg)');
			$(".articleblock").find("img").css('-moz-transform','rotate(180deg)');
			$(".articleblock").find("img").css('-ms-transform','rotate(180deg)');
			$(".articleblock").find("img").css('-o-transform','rotate(180deg)');
			setTimeout(function(){
			$(".articleblock").find("img").css('transform','rotate(0deg)');
			$(".articleblock").find("img").css('-webkit-transform','rotate(0deg)');
			$(".articleblock").find("img").css('-moz-transform','rotate(0deg)');
			$(".articleblock").find("img").css('-ms-transform','rotate(0deg)');
			$(".articleblock").find("img").css('-o-transform','rotate(0deg)');
			},150);	
		}
		
		$(".articleblock").hover(function(){
			animate_bluewave();
			hoverInterval = setInterval(animate_bluewave, 300);
		},function(){
			clearInterval(hoverInterval);
		});
		
		function animate_purplewave(){
			$(".newsblock").find("img").attr("src","/images/algemeen/purplewave2.png");
			setTimeout(function(){
			$(".newsblock").find("img").attr("src","/images/algemeen/purplewave.png");
			},150);	
		}
		
		$(".newsblock").hover(function(){
			animate_purplewave();
			hoverInterval = setInterval(animate_purplewave, 300);
		},function(){
			clearInterval(hoverInterval);
		});
		
		function animate_orangewave(){
			$(".historyblock").find("img").css('transform','scaleX(-1)');
			$(".historyblock").find("img").css('-webkit-transform','scaleX(-1)');
			$(".historyblock").find("img").css('-moz-transform','scaleX(-1)');
			$(".historyblock").find("img").css('-ms-transform','scaleX(-1)');
			$(".historyblock").find("img").css('-o-transform','scaleX(-1)');
			setTimeout(function(){
			$(".historyblock").find("img").css('transform','scaleX(1)');
			$(".historyblock").find("img").css('-webkit-transform','scaleX(1)');
			$(".historyblock").find("img").css('-moz-transform','scaleX(1)');
			$(".historyblock").find("img").css('-ms-transform','scaleX(1)');
			$(".historyblock").find("img").css('-o-transform','scaleX(1)');
			},150);	
		}
		
		$(".historyblock").hover(function(){
			animate_orangewave();
			hoverInterval = setInterval(animate_orangewave, 300);
		},function(){
			clearInterval(hoverInterval);
		});
		
		setTimeout(function(){
			
			animate_arrow();
			
			function animate_arrow(){
				$(".arrow5").stop().animate({opacity:0},150,function(){
					$(".arrow5").stop().animate({opacity:1},150);
					$(".arrow4").stop().animate({opacity:0},150,function(){
						$(".arrow4").stop().animate({opacity:1},150);
						$(".arrow3").stop().animate({opacity:0},150,function(){
							$(".arrow3").stop().animate({opacity:1},150);
							$(".arrow2").stop().animate({opacity:0},150,function(){
								$(".arrow2").stop().animate({opacity:1},150);
								$(".arrow1").stop().animate({opacity:0},150,function(){
									$(".arrow1").stop().animate({opacity:1},150);
									animate_arrow();
								});
							});
						});
					});
				});
			}
			
		},3000);
		
		$(window).resize(function(){
			
			$("#home_lines").css({height:$(window).height()-111});
			$(".griditem").each(function(){
				$(this).css({height:$(this).width()});
			});
		});
		
	}

	if($("#home_grid_15").length>0){
		$(".original").css({display:"none"});
		$(".shuffleheader").css({display:"block"});
		$(window).scroll(function(){
			if($(window).scrollTop()>200){
				if($(window).width()>768){
					$(".shuffleheader").stop().animate({top:110},400,"easeOutExpo");
				}else{
					$(".shuffleheader").stop().animate({top:129},400,"easeOutExpo");
				}
			}else{
				$(".shuffleheader").stop().animate({top:-85},400,"easeOutExpo");
			}
		});
	}else{
		$(".shuffleheader").css({display:"none"});
	}
	
	if($("#home_grid_15").length>0){
		if($(".firstvisit").length>0){
			$(".videocon").css({display:"block"});
			$(".videocon").stop().animate({opacity:1},400,"easeOutExpo");
			$(".closevid").click(function(){
				$(".videocon").stop().animate({opacity:0},400,"easeOutExpo",function(){
					$(".videocon").css({display:"none"});
				});
			});
		}
	}
	

	
	//Alternatieve afbeeldingformaten bij mobile resolutie
	$(window).resize(function() {	
		if($(window).width() <= 979){
			$(".slider").each(function(){
				if($(this).hasClass("part4")){
					$(this).css({left:"0%",top:"0%"});
					$(this).removeClass("part4");
					$(this).addClass("part1");
				}
			});
		}
		if($(window).width() < 768){
			$(".homecontainer").css({paddingTop:0});
			$(".streambtn").css({top:200});
		}else{
			$(".homecontainer").css({paddingTop:$(window).height()*0.8});
			if($(window).width()>1200){
				$(".streambtn").css({top:$(".homebg").width()*0.29});
			}else if($(window).width()>1000 && $(window).width()<=1200){
				$(".streambtn").css({top:$(".homebg").width()*0.33});
			}else if($(window).width()>768 && $(window).width()<=1000){
				$(".streambtn").css({top:$(".homebg").width()*0.39});
			}
			
		}
		if($(document).width() < 775) {
			$(".home_artist").find(".artist").each(function(){
				var bg = $(this).find(".bg_mobile").val();
				$(this).css("background-image", "url('"+bg+"')");
			});
			
		} else {
			$(".home_artist").find(".artist").each(function(){
				var bg = $(this).find(".bg_desktop").val();
				$(this).css("background-image", "url('"+bg+"')");
			});
		}

	});
	
	$(".bgimage").click(function(){
		$(".win_ajax").css({display:"block"});
	});
	
	$(".win_ajax").find(".close").click(function(){
		$(".win_ajax").css({display:"none"});
	});
	
	$(window).scroll(function() {
		// after resize
		clearTimeout(scroll_timeout);
		scroll_timeout = setTimeout(done_scrolling,50);
	});
	
	function done_scrolling(){
		if($(window).scrollTop()<1){
			$(".homebg").css({opacity:1});
			$(".hometxt").css({top:0});
		}
	};
	
	if($(document).width() < 775) {
			$(".home_artist").find(".artist").each(function(){
				var bg = $(this).find(".bg_mobile").val();
				$(this).css("background-image", "url('"+bg+"')");
			});
	}
	else {
			$(".home_artist").find(".artist").each(function(){
				var bg = $(this).find(".bg_desktop").val();
				$(this).css("background-image", "url('"+bg+"')");
			});
	}
	
	if($("#map").length>0){
		var block_width = $(".map_content").find(".block").width();
		$(".map_content").find(".block").css({height:block_width});
		
		$(".map_content").find("a").click(function(){
			var url = $(this).data("href");
			$("#lightbox").css({top:0});
			$("#lightbox").stop().animate({opacity:1},600,"easeOutExpo",function(){
				window.location.href = url;
			});
		});
	}
	
	if($("#xowin").length>0){
		$(".share_win").click(function(){
			var url_to_get = $(this).data("href");
			$(this).siblings(".sharecon").load("/ajax.sharewin.php",{url:url_to_get,name:user,fid:fid,link:link});
		});
		
		$(".login").click(function(){
			fb_login();
		});
	}
	
	/* HOME */
	if($("#home").length>0){
		
		$(".videocon").find(".closevid").click(function(){
			$(".videocon").stop().animate({opacity:0},600,"easeOutExpo",function(){
				$(".videocon").css({display:"none"});
			});
		});
		
		$(".option_arrow").click(function(){
			$("html,body").stop().animate({scrollTop:$(".grid").offset().top-200},500,"easeOutExpo");
		});
		
		animate_arrow();
		
		if($(window).width()>768){
			$(".original").css({top:-120});
			
			$("#home").find(".homebg").gwst_parallax(0,$(".grid").offset().top,0,-100,"top");
			$("#home").find(".hometxt").gwst_parallax(0,$(".grid").offset().top,0,-200,"top");
			$("#home").find(".overlay").gwst_parallax(0,$(".grid").offset().top*0.5,0,1,"opacity");
		}else{
			$(".original").css({top:0});
		}
	
		$(window).scroll(function(){
			if($(window).scrollTop()>200){
				$(".original").stop().animate({top:0});
			}else{
				if($(window).width()>768){
					$(".original").stop().animate({top:-120});
				}else{
					$(".original").stop().animate({top:0});
				}
			}
			if($(window).scrollTop()<1){
				$("#home").find(".homebg").css({top:0});
				$("#home").find(".hometxt").css({top:0});
				$("#home").find(".overlay").css({opacity:0});
			}
		});
		
		$(window).resize(function(){
			if($(window).width()>768){
				$(".original").css({top:-120});
			}else{
				$(".original").css({top:0});
			}
		});
		
		
		var homeblock_width = $(".mask").width();
		$("#home").find(".mask").css({height:homeblock_width});
		
		$("#home").find(".sliderbtn").click(function(){
			if($(this).parents(".mask").hasClass("even")){
				var current_num = $(this).parents(".mask").find(".slider").data("num");
				if(current_num!=10){
					$(this).parents(".mask").find(".slider").stop().animate({left:"-"+current_num+"00%"});
					$(this).parents(".mask").find(".slider").removeClass("part"+current_num);
					$(this).parents(".mask").find(".slider").addClass("part"+(current_num+1));
					$(this).parents(".mask").find(".slider").data("num",current_num+1);
				}else{
					$(this).parents(".mask").find(".slider").stop().animate({left:"0%"});
					$(this).parents(".mask").find(".slider").removeClass("part10");
					$(this).parents(".mask").find(".slider").addClass("part1");
					$(this).parents(".mask").find(".slider").data("num",1);
				}
			}else{
				var current_num = $(this).parents(".mask").find(".slider").data("num");
				if(current_num!=10){
					$(this).parents(".mask").find(".slider").stop().animate({top:"-"+current_num+"00%"});
					$(this).parents(".mask").find(".slider").removeClass("part"+current_num);
					$(this).parents(".mask").find(".slider").addClass("part"+(current_num+1));
					$(this).parents(".mask").find(".slider").data("num",current_num+1);
				}else{
					$(this).parents(".mask").find(".slider").stop().animate({top:"0%"});
					$(this).parents(".mask").find(".slider").removeClass("part10");
					$(this).parents(".mask").find(".slider").addClass("part1");
					$(this).parents(".mask").find(".slider").data("num",1);
				}
			}
		});
		
		$(".shuffleall").click(function(){
			$("#home").find(".mask").each(function(){
				if($(this).hasClass("even")){
					var current_num = $(this).find(".slider").data("num");
					if(current_num!=10){
						var part_number = current_num+1;
					}else{
						var part_number = 1;
					}
					var slide_number = part_number-1;
					$(this).find(".slider").stop().animate({left:"-"+slide_number+"00%"});
					$(this).find(".slider").removeClass("part1 part2 part3 part4 part5 part6 part7 part8 part9 part10");
					$(this).find(".slider").addClass("part"+part_number);
					$(this).find(".slider").data("num",part_number);
				}else{
					var current_num = $(this).find(".slider").data("num");
					if(current_num!=10){
						var part_number = current_num+1;
					}else{
						var part_number = 1;
					}
					var slide_number = part_number-1;
					$(this).find(".slider").stop().animate({top:"-"+slide_number+"00%"});
					$(this).find(".slider").removeClass("part1 part2 part3 part4 part5 part6 part7 part8 part9 part10");
					$(this).find(".slider").addClass("part"+part_number);
					$(this).find(".slider").data("num",part_number);
				}
			});
		});
		
		$(".map").click(function(){
			
			$("#home").find(".mask").each(function(){
				if($(this).hasClass("even")){
					$(this).find(".slider").stop().animate({left:"-900%"});
					$(this).find(".slider").removeClass("part1 part2 part3 part4 part5 part6 part7 part8 part9 part10");
					$(this).find(".slider").addClass("part10");
				}else{
					$(this).find(".slider").stop().animate({top:"-900%"});
					$(this).find(".slider").removeClass("part1 part2 part3 part4 part5 part6 part7 part8 part9 part10");
					$(this).find(".slider").addClass("part10");
				}
			});
		});
		
		$(".savegrid").click(function(){
			var gridcode = "";
			var thisgrid = 0;
			$("#home").find(".slider").each(function(){
				thisgrid++;
				if($(this).hasClass("part1")){
					gridcode += ""+thisgrid+"a-";
				}if($(this).hasClass("part2")){
					gridcode += ""+thisgrid+"b-";
				}if($(this).hasClass("part3")){
					gridcode += ""+thisgrid+"c-";
				}if($(this).hasClass("part4")){
					gridcode += ""+thisgrid+"d-";
				}if($(this).hasClass("part5")){
					gridcode += ""+thisgrid+"e-";
				}if($(this).hasClass("part6")){
					gridcode += ""+thisgrid+"f-";
				}if($(this).hasClass("part7")){
					gridcode += ""+thisgrid+"g-";
				}if($(this).hasClass("part8")){
					gridcode += ""+thisgrid+"h-";
				}if($(this).hasClass("part9")){
					gridcode += ""+thisgrid+"i-";
				}if($(this).hasClass("part10")){
					gridcode += ""+thisgrid+"j-";
				}
			});
			$("#home").find(".savegrid").load("/ajax.savegrid.php",{code:gridcode});
		});
		
		$("#home").find(".option").hover(function(){
			$(this).find(".tooltip").find("span").stop().animate({top:0},400,"easeOutExpo");
		},function(){
			$(this).find(".tooltip").find("span").stop().animate({top:20},400,"easeOutExpo");
		});
		$("#home").find(".socialshare").hover(function(){
			$(this).siblings(".sharegrid").css({backgroundPosition:"-86px -45px"});
			$(this).siblings(".sharegrid").find(".tooltip").find("span").stop().animate({top:0},400,"easeOutExpo");
		},function(){
			$(this).siblings(".sharegrid").css({backgroundPosition:"-86px 0"});
			$(this).siblings(".sharegrid").find(".tooltip").find("span").stop().animate({top:20},400,"easeOutExpo");
		});
		
		$(".facebookshare").click(function(){
			var gridcode = "";
			var thisgrid = 0;
			var this_network = "facebook";
			$("#home").find(".slider").each(function(){
				thisgrid++;
				if($(this).hasClass("part1")){
					gridcode += ""+thisgrid+"a-";
				}if($(this).hasClass("part2")){
					gridcode += ""+thisgrid+"b-";
				}if($(this).hasClass("part3")){
					gridcode += ""+thisgrid+"c-";
				}if($(this).hasClass("part4")){
					gridcode += ""+thisgrid+"d-";
				}if($(this).hasClass("part5")){
					gridcode += ""+thisgrid+"e-";
				}if($(this).hasClass("part6")){
					gridcode += ""+thisgrid+"f-";
				}if($(this).hasClass("part7")){
					gridcode += ""+thisgrid+"g-";
				}if($(this).hasClass("part8")){
					gridcode += ""+thisgrid+"h-";
				}if($(this).hasClass("part9")){
					gridcode += ""+thisgrid+"i-";
				}if($(this).hasClass("part10")){
					gridcode += ""+thisgrid+"j-";
				}
			});
			$("#home").find(".sharegrid").load("/ajax.sharegrid.php",{code:gridcode,network:this_network});
		});
		$(".twittershare").click(function(){
			var gridcode = "";
			var thisgrid = 0;
			var this_network = "twitter";
			$("#home").find(".slider").each(function(){
				thisgrid++;
				if($(this).hasClass("part1")){
					gridcode += ""+thisgrid+"a-";
				}if($(this).hasClass("part2")){
					gridcode += ""+thisgrid+"b-";
				}if($(this).hasClass("part3")){
					gridcode += ""+thisgrid+"c-";
				}if($(this).hasClass("part4")){
					gridcode += ""+thisgrid+"d-";
				}if($(this).hasClass("part5")){
					gridcode += ""+thisgrid+"e-";
				}if($(this).hasClass("part6")){
					gridcode += ""+thisgrid+"f-";
				}if($(this).hasClass("part7")){
					gridcode += ""+thisgrid+"g-";
				}if($(this).hasClass("part8")){
					gridcode += ""+thisgrid+"h-";
				}if($(this).hasClass("part9")){
					gridcode += ""+thisgrid+"i-";
				}if($(this).hasClass("part10")){
					gridcode += ""+thisgrid+"j-";
				}
			});
			$("#home").find(".sharegrid").load("/ajax.sharegrid.php",{code:gridcode,network:this_network});
		});
		
		$("#home").find(".mask").each(function(){
			if($(this).hasClass("even")){
				var current_num = $(this).find(".slider").data("num");
				var new_num = current_num-1;
				$(this).find(".slider").stop().animate({left:"-"+new_num+"00%"});
			}else{
				var current_num = $(this).find(".slider").data("num");
				var new_num = current_num-1;
				$(this).find(".slider").stop().animate({top:"-"+new_num+"00%"});
			}	
		});

		$("#home").find(".block").click(function(){
			if($(this).hasClass("spotify")){
				var spotify_code = $(this).data("code");
				
				$("#spotify").load("/ajax.spotify.php",{spotify:spotify_code},function(){
					$("#spotify").css({top:0});
					$("#spotify").stop().animate({opacity:1},400,"easeOutExpo");
				});
			}
		});

		$("#home").find(".block").find("a").click(function(){
			var url = $(this).data("href");
			$("#lightbox").css({top:0});
			$("#lightbox").stop().animate({opacity:1},600,"easeOutExpo",function(){
				window.location.href = url;
			});
		});
		
		$("#home").find(".sharegrid").hover(function(){
			$(".socialshare").css({display:"block",opacity:1});
		},function(){
			$(".socialshare").css({display:"none",opacity:0});
		});
		
		$("#home").find(".socialshare").hover(function(){
			$(".socialshare").css({display:"block",opacity:1});
		},function(){
			$(".socialshare").css({display:"none",opacity:0});
		});
	}
	
	if($(".line-up-overview").length>0){
	
		$(".overview-bg1").gwst_parallax(0,$(window).height(),0,-200,'top');
		$(".overview-bg2").gwst_parallax(0,$(window).height(),0,-500,'top');
	
		$(window).scroll(function(){
			if($(window).scrollTop()>80){
				$(".scrollmenu").css({position:"fixed",top:$("header").outerHeight()});
				$(".menubg").stop().animate({opacity:1},400,"easeOutExpo");
				$("header.original").css({display:"block"});
				$("header.original").stop().animate({opacity:1},400,"easeOutExpo");
			}else{
				$(".scrollmenu").css({position:"absolute",top:"auto"});
				$(".menubg").stop().animate({opacity:0},400,"easeOutExpo");
				$("header.original").stop().animate({opacity:0},400,"easeOutExpo",function(){
					$("header.original").css({display:"none"});
				});
			}
			
		});
	}
	
	if($(".archive_page").length>0){
		
		var num_slides = $(".slide").length;
		var slider_length = num_slides+"00";
		var slide_length = 100/num_slides;
		
		$(".buttonslider").css({width:slider_length+"%"});
		$(".slide").css({width:slide_length+"%"});
		
		$(".next_archive").click(function(){
			
			var this_slide = $(".current").data("slide");
			var next_slide = this_slide+1;
			
			if(next_slide==num_slides){
				$(".next_archive").addClass("hide");
			}
			if(next_slide>1){
				$(".prev_archive").removeClass("hide");
			}
			
			$(".slide.current").removeClass("current");
			$("#slide"+next_slide).addClass("current");
			
			$(".buttonslider").stop().animate({left:"-"+(next_slide-1)+"00%"},400,"easeOutExpo");
			
		});
		
		$(".prev_archive").click(function(){
			
			var this_slide = $(".current").data("slide");
			var next_slide = this_slide-1;
			
			if(next_slide==1){
				$(".prev_archive").addClass("hide");
			}
			if(next_slide<num_slides){
				$(".next_archive").removeClass("hide");
			}
			
			$(".slide.current").removeClass("current");
			$("#slide"+next_slide).addClass("current");
			
			$(".buttonslider").stop().animate({left:"-"+(next_slide-1)+"00%"},400,"easeOutExpo");
			
		});
		
	}
	
	if($(".areas").length>0){
	
		$(".scrollmenu").stop().animate({opacity:1},600,"easeOutExpo");
		$(".line-up_content").stop().animate({opacity:1},600,"easeOutExpo");
	
		
		$(window).scroll(function(){
			if($(window).scrollTop()>80){
				$(".scrollmenu").css({position:"fixed",top:$("header").outerHeight()});
				$(".menubg").stop().animate({opacity:1},400,"easeOutExpo");
				$("header.original").css({display:"block"});
				$("header.original").stop().animate({opacity:1},400,"easeOutExpo");
			}else{
				$(".scrollmenu").css({position:"absolute",top:"auto"});
				$(".menubg").stop().animate({opacity:0},400,"easeOutExpo");
				$("header.original").stop().animate({opacity:0},400,"easeOutExpo",function(){
					$("header.original").css({display:"none"});
				});
			}
			
			$(".stage").each(function(){
				var this_area = $(this).attr("id");
				if(($(window).scrollTop()>=$(this).offset().top-100) && $(window).scrollTop()<$(this).offset().top + $(this).outerHeight()){
					$(".scrollmenu").find("a").each(function(){
						if($(this).data("area")==this_area){
							$(".scrollmenu").find("a").removeClass("active");
							$(this).addClass("active");
						}
					});
				}
			});
			
		});
		
		$(".scrollmenu").find("a").click(function(){
			$(".scrollmenu").find("a").removeClass("active");
			$(this).addClass("active");
			var this_stage = $(this).data("area");
			var new_height;
			$(".stage").each(function(){
				if($(this).hasClass(this_stage)){
					new_height = $(this).offset().top;
				}
			});
			$("html,body").stop().animate({scrollTop:new_height-99},800,"easeOutExpo");
		});
		
	}
	
	if($(".artist").length>0){
		$(".socialbar").stop().animate({left:-10},400,"easeOutExpo");
	}
	
	$(".youtube-play").click(function(){
		$(this).parents(".vidposter").css({display:"none"});
		$(this).parents(".vidposter").siblings("iframe").css({display:"block"});
	});
	
	$("header").find(".menutrigger").toggle(function(){
		$("header").css({height:"auto"});
		var new_height = $(".original").height();
		$("header").css({height:75});
		$("header").stop().animate({height:new_height},400,"easeOutExpo");
	},function(){
		$("header").stop().animate({height:75},400,"easeOutExpo");
	});
	
	
	//Mobile geen parallax-effect
	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {

	}
	else {		
		$(".banner_social").parallax("50%", -0.8, false);
		$(".banner_social").css({ opacity: 0 });
	}

	

  var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
  var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
  var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");


 
  if(isiPhone > -1 || isiPad > -1 || isiPod > -1) {
     $(".what-do-you-think").hide();
     $("#share_footer").hide();
 	 

  }





	var $doc_width = $(window).width();
	if($doc_width <= 979) { 

	}
	else { 				 	
	}
	
	
		
	if($doc_width <= 480) { 	
	
	}


	if($doc_width > 767) { 	
 	 $(".banner").parallax("50%", -0.8, false); 
	 $(".banner_social").css({ opacity: 0 });
	}

	
	$(window).resize(function() {	
	
		if($(window).width()>768){
			
			$("header").css({top:0,height:77});
			
		}
	
		if($(".homebg").length>0){
		if($(window).width()>768){
			$(".original").css({top:-115});
			$(window).scroll(function(){
				if($(window).scrollTop()>150){
					$(".original").stop().animate({top:0},400,"easeOutExpo");
				}if($(window).scrollTop()<150){
					$(".original").stop().animate({top:-115},400,"easeOutExpo");
				}
			});
			$(".homecontainer").css({paddingTop:$(window).height()*0.8});
		}else{
			$(".original").css({top:0});
		}
		}
		
		var homeblock_width = $(".mask").width();
		$("#home").find(".mask").css({height:homeblock_width});
		
		var block_width = $(".map_content").find(".block").width();
		$(".map_content").find(".block").css({height:block_width});

	});






  $("#dcsns-filter").find("a").click(function(){
	 return false; 
  });
  
  
	var pathname = window.location.pathname,
		url_this = pathname.split('/'),
		this_A = url_this[1];


	if(this_A == 'nl') 			{ 
		var token = "",
			clientID = "",
			client_secret = "3a6a610948bf4be298055148197c8808",
			redirectUrl = "http://xofestival.nl/nl/xolive";
	}
	else if(this_A == 'en') 	{ 
		var token = "257565991.ae23bc4.5fe076395aff47b189508c591f7d708e",
			clientID = "ae23bc4fe5964ae8acdf67ce8f361f05",
			client_secret = "db67787d50354e11ae7ceebc1b6ec055",
			redirectUrl = "http://xofestival.nl/en/xolive";

	}
  
	$('#xolive').dcSocialStream({
	feeds: {
		twitter: {
			id: '#xolive, #xofestival, #extremaoutdoor, #extremafestival, #xo-live',
			intro: 'Tweeted',
			search: 'Tweeted',
			out: 'intro,thumb,text,share',
			url: '../twitter.php',
		},

		facebook: {
			id: '368283874772',
			out: 'intro,thumb,text,user,share',
			icon: '../groot/facebook.png'
		},
		pinterest: {
			id: 'joostdehoost/party-hard/',
			icon: '../groot/pinterest.png'
		},
		instagram: {
			id: '#xolive, #xofestival, #extremaoutdoor, #extremafestival, #xo-live',
			redirectUrl: "http://xofestival.nl/nl/xolive",
			clientId: "c5533c3844f540f09aea11453b1d7544",
			out: 'intro,thumb,text',
			icon: '../groot/instagram.png'
		}
	},
	rotate: {
		delay: 0
	},
	control: false,
	order: 'random',
	filter: true,
	wall: true,
	cache: false,
	max: 'limit',
	limit: 20,
	iconPath: '/_/js/social-feed/images/dcsns-dark/',
	imagePath: '/_/js/social-feed/images/dcsns-dark/'
	});
	

	/* --------------- */
	/* 03 Hover Header */
	$(".header_hover").find(".banner_social").css({opacity:1});


	/* -------------------- */
	/* 03 Hover Home Artist */
	$(".home_artist").hover(function(){
		$(this).find(".artist_hover").css({ display: "block" });
	},function(){
		$(this).find(".artist_hover").hide();
	});
	
	
	/* ------------------------- */
	/* 04 Scroll to top function */
	$(".move_to_top").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;			
	});
	
	
	/* ----------------- */
	/* Share bottom page */
	$("#share_disc, .share_container").hover(function(){
		$(".share_container").stop().animate({ marginBottom: "-3px" }, 200);
	},function(){
		$(".share_container").stop().animate({ marginBottom: "-43px" }, 200);		
	});
	

	$("a[rel^='photo_zoom']").prettyPhoto({
		theme: 'pp_default',
		default_width: 1400,
		default_height: 800,
		gallery_markup: '<div class="pp_gallery"> \
						<a href="#" class="pp_arrow_previous">Previous</a> \
						<a href="#" class="pp_arrow_next">Next</a> \
					</div>'
		
	});
	$("a[rel^='zoom_video']").prettyPhoto({
		theme: 'pp_default',
		default_width: 1400,
		default_height: 800
	});
	



	/* -------------------- */
	/* PAGINA TONEN OP HASH */
	if(window.location.hash) {
	  	var load_first_item = window.location.hash.substring(1);
	} else {
		var load_first_item = $(".blok_first_item").val();
	}
	
	var language = $(".xo_language").val();
	$(".li_"+load_first_item).addClass("active");
	$(".info_content").load("/snippets/ajax.info.php", { page: load_first_item, taal: language });
	

	
	/* ---------- */
	/* HASHCNANGE */
	$(window).bind('hashchange', function() {
		var load_first_item = window.location.hash.substring(1);
		var language = $(".xo_language").val();
		$(".active").removeClass("active");
	  	$(".li_"+load_first_item).addClass("active");
		$(".info_content").load("/snippets/ajax.info.php", { page: load_first_item, taal: language });
	});

	
	
	$(".info_nav").find("a").click(function(){
		$(".active").removeClass("active");
		$(this).parent().addClass("active");
		var url = $(this).attr("rel");
		var language = $(".xo_language").val();
		$(".info_content").load("/snippets/ajax.info.php", { page: url, taal: language });
	});


	if ($('.banner_blok_container').is(':visible')) {
		$(".banner_blok").delay(200).animate({ marginTop: "0" }, 300, "easeOutQuart");
	}
	if ($('.banner_artist_container').is(':visible')) {
		$(".banner_artist_container").delay(400).animate({ right: "0" }, 500, "easeOutQuart");
	}


	
});


$(window).load(function(){
	

	$(".dcsns-youtube .section-thumb a, .dcsns-vimeo .section-thumb a, .dcsns-instagram .section-thumb a").prettyPhoto({
		autoplay_slideshow: false, 
		overlay_gallery: false, 
		social_tools:false, 
		deeplinking: false, 
		theme:'pp_default', 
		show_title: false
	});
		

	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {

	}
	else {		
		$(".parallax_left_bottom1").css({ marginTop: margin_top });
		$(".parallax_left_bottom2").css({ marginTop: margin_top });
		$(".parallax_left_bottom3").css({ marginTop: margin_top });
		$(".parallax_left_bottom4").css({ marginTop: margin_top });
		$(".parallax_right_bottom1").css({ marginTop: margin_top });
		$(".parallax_right_bottom2").css({ marginTop: margin_top });
		$(".parallax_right_bottom3").css({ marginTop: margin_top });
		$(".parallax_right_bottom4").css({ marginTop: margin_top });
	
		$(".parallax_layer").parallax("50%", 1.2, false);
		$(".parallax_left_bottom1").parallax("50%", 0.4, false);
		$(".parallax_left_bottom2").parallax("50%", 0.7, false);
		$(".parallax_left_bottom3").parallax("50%", 1.1, false);
		$(".parallax_left_bottom4").parallax("50%", 1.6, false);
		$(".parallax_right_bottom1").parallax("50%", 0.4, false);
		$(".parallax_right_bottom2").parallax("50%", 0.7, false);
		$(".parallax_right_bottom3").parallax("50%", 1.1, false);
		$(".parallax_right_bottom4").parallax("50%", 1.6, false);
		$(".parallax_layer2").parallax("50%", 0.6, false);
	}

	
	var height_container = $(".website_container").height();
	var height_wide = $(".wide").height();
	var height_web = $(document).height();
/* 	var height_web = (height_container + height_wide); */
	var margin_top = (height_web - 800);

	/* Footer position & snap to bottom */



/*
	$(window).scroll(function() {
		var positie_top = $(this).scrollTop();
		var document_height = $(window).height();		
		var what = $(".what-do-you-think").height();
		var doc_what = $(document_height + what);
				
		var scrollPositieBottom = (positie_top + document_height);
		var positieFooter = (height_web - 160);
		
		if(scrollPositieBottom > positieFooter) {
			var positie_van_footer = (scrollPositieBottom - positieFooter);
			var movetotop = (positie_van_footer + 10);
			$("#share_footer").css({ bottom: positie_van_footer, borderBottom: "none" });
			$(".move_to_top").css({ bottom: movetotop });
			
		}
		else {
			$("#share_footer").css({ bottom: 0, borderBottom: "3px solid #CDCBD0" });
			$(".move_to_top").css({ bottom: "10px", borderBottom: "none" });
		}
	});
	
	
	$(window).resize(function() {	
		var positie_top = $(this).scrollTop();
		var document_height = $(window).height();
		
		
		var scrollPositieBottom = (positie_top + document_height);
		var positieFooter = (height_web - 100);
		
		if(scrollPositieBottom > positieFooter) {
			var positie_van_footer = (scrollPositieBottom - positieFooter);
			var movetotop = (positie_van_footer + 10);
			$("#share_footer").css({ bottom: positie_van_footer, borderBottom: "none" });
			$(".move_to_top").css({ bottom: movetotop });
			
		}
		else {
			$("#share_footer").css({ bottom: 0, borderBottom: "3px solid #CDCBD0" });
			$(".move_to_top").css({ bottom: "10px", borderBottom: "none" });
		}
	});

*/


});


if($("#new-home").length>0){


/* Parallax Image - Placed at bottom (IE9 BUG) */
function parallaxScroll(){
 
    if(!is_touch_device()){
        viewportTop = $(window).scrollTop();
        windowHeight = $(window).height();
        viewportBottom = windowHeight+viewportTop;
 
        if($(window).width())
 
        $('[data-parallax="true"]').each(function(){
            distance = viewportTop * $(this).attr('data-speed');
            if($(this).attr('data-direction') === 'up'){ sym = '-'; } else { sym = ''; }
            $(this).css('transform','translate3d(0, ' + sym + distance +'px,0)');
        });
 
    }
}

function is_touch_device() {
return 'ontouchstart' in window
    || 'onmsgesturechange' in window;
}

/* Parallax Image */
function draw() {
    requestAnimationFrame(draw);
    parallaxScroll();
}

draw();

}


