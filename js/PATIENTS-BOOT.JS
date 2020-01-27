$(window).scroll(function(){
        
        var scroll = $(this).scrollTop();
        
        
        if(scroll > $(".animate").offset().top - ($(window).height()/1.6
            ))
        {
            $(".animate").addClass("animated pulse");
        }
        
     
//     if(scroll > $(".main-aford-left").offset().top - ($(window).height()/1.6
//            ))
//     {
//           $(".main-aford-left").addClass("animated slideInLeft");
//     }

       
     
     
//     if(scroll > $(".tax-right").offset().top - ($(window).height()/1.9
//            )){
//           $(".tax-right").addClass("animated zoomIn");
//        }
     
     
     
     
//     
//     
//     if(scroll > $(".hybrid-left").offset().top - ($(window).height()/1.3
//            )){
//           $(".hybrid-left").addClass("animated slideInLeft");
//        }
//     
//     
     
     
     
     
     
     
     
     
     if(scroll > $(".").offset().top - ($(window).height()/1.6
            )){
           $(".").addClass("animated bounceInRight");
        }
     
     
      var image =document.getElementsByClassName("img");
      new simpleParallax(image, {
          scale:1.9,
          orientation: "right"
                                
            });
     
     
     
     
     
    });
 
       