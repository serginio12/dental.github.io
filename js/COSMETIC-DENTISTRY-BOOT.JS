$(window).scroll(function(){
        
        var scroll = $(this).scrollTop();
        
        
        if(scroll > $(".animate").offset().top - ($(window).height()/6.5
            ))
        {
            $(".animate").addClass("animated pulse");
        }
        
     
     if(scroll > $(".hid1").offset().top - ($(window).height()/1.5
            )){
           $(".hid1").addClass("ssow");
        }
    
      if(scroll > $(".hid2").offset().top - ($(window).height()/1.5
            )){
           $(".hid2").addClass("ssow");
        }
    
     if(scroll > $(".hid3").offset().top - ($(window).height()/1.5
            )){
           $(".hid3").addClass("ssow");
        }
    
     if(scroll > $(".hid4").offset().top - ($(window).height()/1.5
            )){
           $(".hid4").addClass("ssow");
        }
     
    });
 