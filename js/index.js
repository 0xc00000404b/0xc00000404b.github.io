/*This is something I thought would be a fun
project, build a phone/ game device.  All the games and font assets are not mine.  Also, if this device looks similar to something real, it was just something a put together after looking at so many phones my friends have from S.Korea, Japan and China.  I personally have a HTC(I bought it in Guangzhou China since I am studying abroad learning Chinese).  It's not bad, but I got the cheapest model I could (plus something made out of metal, very important to not have your phone break).  Please enjoy this fake html phone.*/

$(document).ready(function() {
 
  /*--- clock ---*/
function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        //var seconds = currentTime.getSeconds();
        if (minutes < 10){
            minutes = "0" + minutes;
        }
        //if (seconds < 10){
       //     seconds = "0" + seconds;
       // }
        var real_hours = hours - 12;
        if (hours > 11){
          real_hours - 12;
        } else {
          real_hours = hours;
        }
   if (real_hours === 0) {
    real_hours = real_hours + 12;
 }
  
   
        var v = real_hours + ":" + minutes + " ";
   
        if(hours > 11){
            v+="PM";
        } else {
            v+="AM"
        }
        setTimeout("updateTime()",1000);
        document.getElementById("time").innerHTML=v;
    }
   updateTime();
 
/*--- end clock ---*/  


//off mode 
 $("#time").hide();
 $("#slide_on").hide();
 $("#app1").hide(); 
 $("#app2").hide();
 $("#app3").hide();
 $("#app4").hide();
 $("#app5").hide(); 
 $("#app6").hide();
 $("#app7").hide();
 $("#app8").hide(); 
 $("#app9").hide(); 
 $("#app10").hide();
 $("#app11").hide();
 $("#app12").hide();
 $("#app13").hide(); 
 $("#app14").hide();
 $("#app15").hide();
 $("#app16").hide();
 $("#newsBar").hide();
 $("#newsOnBar").hide();
 $("#slideOnTrack").hide(); 
 $("#newsBarLine1").hide(); 
 $("#newsBarLine2").hide();
 $("#phoneSign").hide();
 $("#mailSign").hide(); 
 $("#more").hide(); 
//turning on 
  $("#button").one("click",function(){ 
    
    $("#screen").css("background","#133f7b");
    $("#time").show();
    $("#slide_on").show();
    $("#newsBar").show();
    $("#newsOnBar").show();
    $("#slideOnTrack").show();
    
    
    
  }); //end of turning on, continue with being on
  
 

    
  //Every thing that happens when you click the slide button

  $("#slide_on").click(function(){
    
    click_button = true;
    $(this).animate({ 
        marginLeft: "+=170px",
    }, 400 );
    $("#slide_on").fadeOut(300);
    $("#slideOnTrack").fadeOut(800);
    $("#slide_on").delay(30).hide(0);
    $("#time").fadeOut(800);
    setTimeout(function(){
    $("#newsBar").animate({marginTop: "-=140px",},800);
    $("#newsOnBar").animate({marginTop: "-=170px",},800);
    },800);
    setTimeout(function(){
      $("#time").animate({marginLeft: "+=180px",},0).animate({marginTop: "-=50px",},0).css("font-size","20px").fadeIn(800); 
         }, 800);
    setTimeout(function(){
      $("#newsBarLine1").show(); 
      $("#newsBarLine2").show();
      $("#phoneSign").show();
      $("#mailSign").show();
      $("#more").show();
    }, 1600);
    
    setTimeout(function(){
      $("#app1").fadeIn(800);
      }, 1600);
    setTimeout(function(){
      $("#app2").fadeIn(800);
      }, 1650);
    setTimeout(function(){
      $("#app3").fadeIn(800);
      }, 1700);
    setTimeout(function(){
      $("#app4").fadeIn(800);
      }, 1750);
    setTimeout(function(){
      $("#app5").fadeIn(800);
      }, 1800);
    setTimeout(function(){
      $("#app6").fadeIn(800);
      }, 1850);
    setTimeout(function(){
      $("#app7").fadeIn(800);
      }, 1900);
    setTimeout(function(){
      $("#app8").fadeIn(800);
      }, 1950);
    setTimeout(function(){
      $("#app9").fadeIn(800);
      }, 2000);
    setTimeout(function(){
      $("#app10").fadeIn(800);
      }, 2050);
    setTimeout(function(){
      $("#app11").fadeIn(800);
      }, 2100);
    setTimeout(function(){
      $("#app12").fadeIn(800);
      }, 2150);
    setTimeout(function(){
      $("#app13").fadeIn(800);
      }, 2200);
    setTimeout(function(){
      $("#app14").fadeIn(800);
      }, 2250);
    setTimeout(function(){
      $("#app15").fadeIn(800);
      }, 2300);
    setTimeout(function(){
      $("#app16").fadeIn(800);
      }, 2350);
     
    
  });// of slide butto mode, continue    
  
// oppening game apps
//setTimeout(function(){
 /*
  $("#app1").click(function(){
    setTimeout(function(){
    $(".apps").fadeOut(800);
    $("#time").fadeOut(800);
    $("#newsBar").fadeOut(800);
    $("#newsOnBar").fadeOut(800);
      setTimeout(function(){
        $("#screen").prepend('<embed src="http://games.mochiads.com/c/g/space-rush_v4/space.swf" menu="false" quality="high" width="320" height="480" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
      }, 800);
    }, 400);
  });  
 //}, 1000);
 */
// end of oppening game apps 
  
  
  
  
});