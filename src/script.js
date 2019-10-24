var s = skrollr.init();

$(window).scroll(function(evt){
  if ($(window).scrollTop()>0)
    $(".navbar").addClass("navstyle");
    
  else
    $(".navbar").removeClass("navstyle");  
});

