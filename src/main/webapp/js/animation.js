function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("divImgProfilo").style.animationName = "fadeInDown";
    document.getElementById("aboutText").style.animationName = "fadeInLeft";
    document.getElementById("divTextCarouselProjects").style.animationName = "fadeInUp";
    document.getElementById("divProgressCircle").style.animationName = "fadeInUp";


  } else {
    document.getElementById("divImgProfilo").style.animationName = "fadeInRight";
    document.getElementById("aboutText").style.animationName = "fadeInRight";
    document.getElementById("divTextCarouselProjects").style.animationName = "fadeInRight";
    document.getElementById("divProgressCircle").style.animationName = "fadeInRight";

  }
}

var x = window.matchMedia("(max-width: 1000px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
