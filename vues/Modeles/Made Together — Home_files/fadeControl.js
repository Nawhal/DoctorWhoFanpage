function fadeController(){
  var _delay = 300;
  var _trans = 300;
  $("body").animate({opacity:1}, _trans);
  if($("#intro-bkg").length > 0){
    
  }
  if($("#case-intro-bkg").length > 0){
    //console.log("fadeController");
    //$("#case-title").delay(_delay).animate({opacity:1}, _trans);
    //$("#case-intro").delay(_delay).animate({opacity:1}, _trans);
    //$("#case-arrow").delay(_delay).animate({opacity:1}, _trans);
  }
  if($("#staff-bkg").length > 0){
    
  }
  if($("#planner").length > 0){
    
  }
  if($("#services-intro-bkg").length > 0){
      
  }
}

var html = document.getElementsByTagName('html')[0];
html.className += '  wf-loading';
setTimeout(function() {
  html.className = html.className.replace(' wf-loading', '');
  
}, 5000);

WebFontConfig = { fontdeck: { id: '31827' },
active: function() {
    fadeController();
  } };

(function() {
  var wf = document.createElement('script');
  wf.src = 'http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();