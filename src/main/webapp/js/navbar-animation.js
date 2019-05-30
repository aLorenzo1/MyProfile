var larghezza = window.screen.width;

$(window).scroll(function() {

    if(larghezza > 980){
      if($(this).scrollTop()>30) {
          document.getElementById("navbar").style.backgroundColor= "#19161F";
          document.getElementById("navbarSupportedContent").style.backgroundColor= "#19161F";
      } else {
          document.getElementById("navbar").style.backgroundColor= "transparent";
          document.getElementById("navbarSupportedContent").style.backgroundColor= "transparent";
      }
    }
});
