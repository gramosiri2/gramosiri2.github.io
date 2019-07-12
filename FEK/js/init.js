$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown({
        hover: true
    });
    $('.modal').modal();
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