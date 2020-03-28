$(document).ready(function () {
  
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

/*===============================
=            PRELOAD            =
===============================*/
$("body").css({"overflow-y":"hidden"});
var cargarImg = $("img");
var cargarScript = $("script");
var cargarCSS = $("link");
var cargarVideos = $("video");
var cargarAudios = $("audio");
var totalObjetos = [];
var numItem = 0;
var valorPorcentaje = 0;
var incremento = 0;
var numCarga = 0;
totalObjetos.push(cargarImg, cargarScript, cargarCSS, cargarVideos, cargarAudios);
totalObjetos.forEach(funcionForEach);
function funcionForEach(item, index){
  for(var i = 0; i < item.length; i++){
    numItem++;
    valorPorcentaje = 100/numItem;
  }
  for(var i = 0; i < item.length; i++){
    preload(i, item);  
  }
}
function preload(i, item){
  setTimeout(function(){
    $(item[i]).ready(function(){
      numCarga++
      incremento = Math.floor(numCarga * valorPorcentaje);     
      $("#porcentajeCarga").html(incremento+"%");
      $("#rellenoCarga").css({"width":incremento+"%"})
      if(incremento >= 100){
        $("#preload").delay(350).fadeOut("slow");
        $("body").delay(350).css({"overflow-y":"scroll"})
      }
    })
  },i*100)
}
/*=====  End of PRELOAD  ======*/

  // SLIDER 
  var swiper = new Swiper('.swiper-container', {
    speed: 600,
    parallax: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

/*
  JavaScript For Responsive Bootstrap Carousel

    Author: Razboynik
    Author URI: http://filwebs.ru
    Description: Bootstrap Carousel Effect Ken Burns

    */

    $(function ($) {

      /*-----------------------------------------------------------------*/
    /* ANIMATE SLIDER CAPTION
    /* Demo Scripts for Bootstrap Carousel and Animate.css article on SitePoint by Maria Antonietta Perna
    /*-----------------------------------------------------------------*/
    "use strict";
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';
        elems.each(function () {
          var $this = $(this),
          $animationType = $this.data('animation');
          $this.addClass($animationType).one(animEndEv, function () {
            $this.removeClass($animationType);
          });
        });
      }
    //Variables on page load
    var $immortalCarousel = $('.animate_text'),
    $firstAnimatingElems = $immortalCarousel.find('.item:first').find("[data-animation ^= 'animated']");
    //Initialize carousel
    $immortalCarousel.carousel();
    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);
    //Other slides to be animated on carousel slide event
    $immortalCarousel.on('slide.bs.carousel', function (e) {
      var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
      doAnimations($animatingElems);
    });



  })(jQuery);