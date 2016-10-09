/*document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
});*/

$(function() {
  $(function(){ $("select").uniform();
 });

$('nav li').mouseover(function(){
       $(this).children('ul').slideDown();
       $(this).children('.submenu_1 a').css('background', 'linear-gradient(to right, #000, #636060)');
       $(this).mouseleave(function(){
         $(this).children('.submenu_1 a').css('background', 'linear-gradient(to left, #000, #636060)');
         $(this).children('ul').slideUp();
       });

    });
})
