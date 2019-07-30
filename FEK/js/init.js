$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.fixed-action-btn').floatingActionButton();
    $(".dropdown-trigger").dropdown({
        hover: true
    });
    $('.modal').modal();
    $('.modal').modal('open'); 
    
    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible();
    $('.carousel').carousel();
    setInterval(function(){
    	$('.carousel').carousel('next');
    }, 5000)
    $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true});
  });