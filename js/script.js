/*document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
});*/

$(function() {
 var $leftArrovClick = $('.carousel-arrow-left');
 var $rightArrovClick = $('.carousel-arrow-right ');
 var elementsList = $('.carusel');

 var pixelsOffset = 360;
 var currentLeftValue = 0;
 var elementsCount = elementsList.find('li').length;
 var minimumOffset = - ((elementsCount - 2) * pixelsOffset);
 var maximumOffset = 0;

 $leftArrovClick.click(function () {
   if (currentLeftValue != maximumOffset) {
     currentLeftValue += 360;
     elementsList.animate({ left : currentLeftValue + "px"}, 500);
   }
 });

 $rightArrovClick.click(function () {
   if (currentLeftValue != minimumOffset) {
     currentLeftValue -= 360;
     elementsList.animate({ left : currentLeftValue + "px"}, 500);
   }
 });
});
