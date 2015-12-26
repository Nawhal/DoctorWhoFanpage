
	$(document).ready(function(){
        var desktop = document.body.clientWidth>699;

		if(desktop){ //useless for phones
			
			//Silly trick for safari: when you refresh a page on safari, the setTimeout functions don't stop...
			var id = window.setInterval(function() {}, 0);//get the last time out id
			while (id--) {//and clear em all
				window.clearInterval(id); // will do nothing if no timeout with id is present
			};
            
           // $('.column.right .tab-content .content_column').css('max-width',  $('.leftcolumntable').css('max-width')  );
            $('.center').css('max-width',  parseInt($('.leftcolumntable').css('max-width'))*2 +150 );
//alert( ($('.leftcolumntable').css('max-width') ));
			setTimeout(function(){
				$('#home_slide_nav').css('margin-top',  $('.homeslide.current').height()  );
			},1500);

			//$('#home_slide_nav').css('margin-top',  $('.homeslide.current').height()   );
			$( window ).resize(function() {
                desktop = document.body.clientWidth>699;
				$('#home_slide_nav').css('margin-top',  $('.homeslide.current').height()  );
				var positionQuipopup =( $(window).width()-980)/2;
				if (positionQuipopup<=0) {
					positionQuipopup=($('#quitpopup').width()/2)
				}
				$('#quitpopup').css('right', positionQuipopup-($('#quitpopup').width()/2));
				$('#quitpopup').css('top', (-($('#quitpopup').height()/2)));
			});
			
          
          
            $('.slideinfo_right').on('click tap',function(){
				
				
                
                actual_slide= $('.slide-link.current').attr('number');
                actual_slide = parseInt(actual_slide);
                actual_slide ++;
                if (actual_slide>=slides_number) {
                    actual_slide=0;
                }
                
                
                
                var slide_id = '#slide-' + actual_slide;
				var slide_nav_id = '#nav_slide-' + actual_slide;

				$('.slide-content').fadeOut(800);
					
				$('.slide-link').removeClass('just_clicked');//onglets
				$('.slide-link').removeClass('current');//onglets
				$(slide_nav_id).addClass('current');
				$(slide_nav_id).addClass('just_clicked');
                
                
                
				var slide_id="slide-"+actual_slide;
				
				$('.slide-content').fadeOut(800);//addClass('fade-out-long');//Fade out current tab
	
				
				//$(".slide-content").removeClass('fade-out-long');
						
				$('#'+slide_id).fadeIn(800);//
				//$('#'+slide_id).addClass('fade-in');
				
				$('#'+slide_id).addClass('current');
					setTimeout(function(){//wait for the fade out to finish
					
						//	$('.slide-content').removeClass('current');//contenu
						//
						//$(slide_id).addClass('current');
						//$(".slide-content").removeClass('fade-out');
						//
						//$(slide_id).addClass('fade-in');
						$('.slide-content').removeClass('current');//contenu
						
						$('#'+slide_id).addClass('current');
					},800);
				
			});
            $('.slideinfo_left').on('click tap',function(){
				
				
                
                actual_slide= $('.slide-link.current').attr('number');
                actual_slide = parseInt(actual_slide);
                actual_slide --;
                if (actual_slide<0) {
                    actual_slide=slides_number-1;
                }
                
                
                
                var slide_id = '#slide-' + actual_slide;
				var slide_nav_id = '#nav_slide-' + actual_slide;

				$('.slide-content').fadeOut(800);
					
				$('.slide-link').removeClass('just_clicked');//onglets
				$('.slide-link').removeClass('current');//onglets
				$(slide_nav_id).addClass('current');
				$(slide_nav_id).addClass('just_clicked');
                
                
                
				var slide_id="slide-"+actual_slide;
				
				$('.slide-content').fadeOut(800);//addClass('fade-out-long');//Fade out current tab
	
				
				//$(".slide-content").removeClass('fade-out-long');
						
				$('#'+slide_id).fadeIn(800);//
				//$('#'+slide_id).addClass('fade-in');
				
				$('#'+slide_id).addClass('current');
					setTimeout(function(){//wait for the fade out to finish
					
						//	$('.slide-content').removeClass('current');//contenu
						//
						//$(slide_id).addClass('current');
						//$(".slide-content").removeClass('fade-out');
						//
						//$(slide_id).addClass('fade-in');
						$('.slide-content').removeClass('current');//contenu
						
						$('#'+slide_id).addClass('current');
					},800);
				
			});
			$('.slide-link').on('click tap',function(){
				
				$(this).addClass('just_clicked');
				if($(this).hasClass('current')){
					return;
				}
				var slide_id=$(this).attr('slide-tab');
				
				
				$('.slide-content').fadeOut(800);//addClass('fade-out-long');//Fade out current tab
					
				$('.slide-link').removeClass('current');//onglets
				$(this).addClass('current');
				$(this).addClass('just_clicked');
					
				
				//$(".slide-content").removeClass('fade-out-long');
						
				$('#'+slide_id).fadeIn(800);//
				//$('#'+slide_id).addClass('fade-in');
				
				$('#'+slide_id).addClass('current');
					setTimeout(function(){//wait for the fade out to finish
					
						//	$('.slide-content').removeClass('current');//contenu
						//
						//$(slide_id).addClass('current');
						//$(".slide-content").removeClass('fade-out');
						//
						//$(slide_id).addClass('fade-in');
						$('.slide-content').removeClass('current');//contenu
						
						$('#'+slide_id).addClass('current');
					},800);
			});
	
			
			$('.video_slideinfo').on('click tap',(function(){
				var iframe = $(this).find(".iframe").html();
				$('#video_popup').addClass('show');
				iframe=iframe.replace('<!--', '');
				iframe=iframe.replace('-->', '');
				document.getElementById('popup_content_video').innerHTML = iframe;//get here iframe code from database.
				

				setTimeout(function(){//wait for the fade out to finish	
	
					$('#video_popup').fadeIn(800);
					//$('#video_popup').addClass('faded');
					//
					//$('#popup_content').removeClass('fade-out');
					$('#popup_content').fadeIn(800);//addClass('fade-in');
				},400);
				//$('#quitpopup').css('right', (($(window).width()-$('#popup_content_video').children().width())/2)-($('#quitpopup').width()/2));
				var positionQuipopup =( $(window).width()-980)/2;
				if (positionQuipopup<=0) {
					positionQuipopup=($('#quitpopup').width()/2)
				}
				$('#quitpopup').css('right', positionQuipopup-($('#quitpopup').width()/2));
				$('#quitpopup').css('top', (-($('#quitpopup').height()/2)));
			}));
			$('#video_popup').on('click tap',(function(){
				//alert($('#popup_content_video').offset().right);
				$('#video_popup').removeClass('faded');
				$('#video_popup').fadeOut(200);//.addClass('fade-out');
				setTimeout(function(){//wait for the fade out to finish
					
					$('#video_popup').removeClass('show');
				},400);	
				document.getElementById('popup_content_video').innerHTML = '';
				$('#popup_content').removeClass('faded');
				$('#popup_content').fadeOut(200);//.addClass('fade-out');
	
			}));
			
			var slides_number = $('#homeslides').attr('nbslides');
			var actual_slide =0;
			var timeDisplayed = parseInt($('.homeslide.current').attr('displaytime'));
			var test = setTimeout(function(){nextSlide(0);},timeDisplayed);

            var touch = 'ontouchstart' in document.documentElement; //detection for touch devices

				if (touch) {
	

					$('.homeslide').click(function() {
						var clicks = $(this).data('clicks');
						if (!clicks) {
							
								$(this).find("div:first").fadeIn(200);
							$(this).find("div:first").addClass('faded');
						} else {
							$(this).find("div:first").fadeOut(200);
							
							$(this).find("div:first").removeClass('faded');
						}
						$(this).data("clicks", !clicks);
					});
				}
				else{
                     $('.case_product').hover(
                        function(){
                            $(this).removeClass('nothoveredlol');
                            $(this).find(".grid_info").fadeIn(200);
                            $('.nothoveredlol').css('opacity',0.3);
                        },
                        function(){
                            $(this).find(".grid_info").fadeOut(200);
                            $('.nothoveredlol').css('opacity',1);
                            
                            $(this).addClass('nothoveredlol');
                        }
                    );
					$( '.homeslide' ).hover(
						function(){
							
								$(this).find("div:first").fadeIn(200);
							$(this).find("div:first").addClass('faded');

							
						},
						function(){
							$(this).find("div:first").fadeOut(200);
							
							$(this).find("div:first").removeClass('faded');
						}
					);
				}
			function nextSlide(type){
					timeDisplayed = parseInt($('.homeslide.current').attr('displaytime'));
					
					if ($('.homeslide.current').children('.slideinfo').hasClass('faded')) {//if you're hovering one slide, don't change!
						setTimeout(function(){nextSlide(0);},timeDisplayed);
						return;
					}
					if ($('#video_popup').hasClass('show')) {//if you're hovering one slide, don't change!
						setTimeout(function(){nextSlide(0);},timeDisplayed);
						return;
					}
					
                    //(Math.round(Math.random()*parseInt(slides_number))+'\n'+Math.random()+'\n'+parseInt(slides_number));
                    if (type == 0) {
                        actual_slide = Math.round(Math.random()*parseInt(slides_number));
                        while(actual_slide==$('.slide-link.current'))
                            actual_slide = Math.round(Math.random()*parseInt(slides_number));
                    }
                    if (type ==2) {
                        actual_slide= $('.slide-link.current').attr('number');
                        actual_slide = parseInt(actual_slide);
                        actual_slide ++;
                        if (actual_slide>=slides_number) {
                            actual_slide=0;
                        }
                    }
                    if (type ==1) {
                        actual_slide= $('.slide-link.current').attr('number');
                        actual_slide = parseInt(actual_slide);
                        actual_slide --;
                        if (actual_slide<0) {
                            actual_slide=slides_number-1;
                        }
                    }
                    
                    
					//actual_slide= $('.slide-link.current').attr('number');
					//actual_slide = parseInt(actual_slide);
					//actual_slide ++;
					
					//
					
					if ($('.slide-link').hasClass('just_clicked')) {//if you've just clicked to change a slide, don't change right now!
						$('.slide-link').removeClass('just_clicked');
						setTimeout(function(){nextSlide(0);},5000);
						return;
					}

	
					var slide_id = '#slide-' + actual_slide;
					var slide_nav_id = '#nav_slide-' + actual_slide;
					
					var $window = $(window);


					
					timeDisplayed=parseInt($(slide_id).attr('displaytime'));
					//$('.slide-content').removeClass('fade-in-long');//Fade out current tab
					//$('.slide-content').addClass('fade-out-long');//Fade out current tab
					$('.slide-content').fadeOut(800);
					
					$('.slide-link').removeClass('current');//onglets
					$(slide_nav_id).addClass('current');
					
	
						//$(".slide-content").removeClass('fade-out-long');
						
						//$(slide_id).addClass('fade-in-long');
	
					$(slide_id).fadeIn(800);
					$(slide_id).addClass('current');
					setTimeout(function(){//wait for the fade out to finish
					
						//	$('.slide-content').removeClass('current');//contenu
						//
						//$(slide_id).addClass('current');
						//$(".slide-content").removeClass('fade-out');
						//
						//$(slide_id).addClass('fade-in');
						$('.slide-content').removeClass('current');//contenu
						
						$(slide_id).addClass('current');
				
					},800);
					setTimeout(function(){nextSlide(0);},timeDisplayed);
					return;
	
					
			}
            
		}else{
            	$('.tab-link').on('click tap',function(){
			var tab_id = $(this).attr('data-tab');
			
			$('.tab-link').removeClass('current');//onglets
			$(this).addClass('current');
		
			$('.tab-content').addClass('fade-out');//Fade out current tab
		
			setTimeout(function(){//wait for the fade out to finish
			
				$('.tab-content').removeClass('current');//contenu
				
				$("#"+tab_id).addClass('current');
				$(".tab-content").removeClass('fade-out');
				
				$("#"+tab_id).addClass('fade-in');
			
		
		
			},200);	
		});
        }
		
			
	});
