$(window).scroll(function(){
          var wScroll = $(this).scrollTop();
          
     /* $(".services-boxes").each(function(){
           if(wScroll +300 > $(this).offset().top){
               $(this).find(".services-boxes-info").addClass("showing");
           }
       });*/
          
         if(wScroll + 390 > $(".dentristy ").offset().top){
              $(" .dentristy .dentristy-apl").each(function(i,el){
                 setTimeout(function(){
                  $(el).addClass("ssow");
                  
              }, 200 * i);
                                       
            });
              
          }
          
            if(wScroll + 420 > $(".dentristy-two").offset().top){
              $(" .dentristy-two .dentristy-apl-two").each(function(i,el){
                 setTimeout(function(){
                  $(el).addClass("ssow");
                  
              }, 200 * i);
                                       
            });
              
          }
    
      
    
    
    
          
          
          
      });
