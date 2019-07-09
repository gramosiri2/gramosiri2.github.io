$(document).ready(function(){
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
    $('.modal').modal();
    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible();
    $('.carousel').carousel();
    setInterval(function(){
    	$('.carousel').carousel('next');
    }, 5000)
  });

