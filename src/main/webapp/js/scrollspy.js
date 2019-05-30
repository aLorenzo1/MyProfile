$('body').scrollspy({ target: '#navbarSupportedContent', offset:100 });

$(".navbar-collapse ul li a[href^='#'], .navbar a[href^='#']").on('click',function(e){
  target = this.hash;
  e.preventDefault();

  $('html,body').animate({
    scrollTop : $(this.hash).offset().top},
    600, function(){
      window.location.hash = target;
  });
});
