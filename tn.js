$(function(){
  
  var $glitch = $('h1');
  var hackHeight = $glitch.height();
  var hackWidth = $glitch.width();
  
  function glitchOut(){
      var reHackHeight = Math.floor(Math.random(0, hackHeight) * 1000);
      var reHackWidth = Math.floor(Math.random(0, hackWidth) * 1000);

      $glitch.css({
          'background-position': reHackWidth+"px "+reHackHeight+"px"
      });
  }
  
  (function glitchOutLoop(){
    var rand = Math.floor((Math.random()* 4)+1)*1000;

    setTimeout(function(){
      glitchOut();
      glitchOutLoop();
    },rand);
  }());
});
