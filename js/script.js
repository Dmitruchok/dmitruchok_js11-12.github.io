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

 var html = $('#about').html();
 var brands = {
   barandName: 'Nike',

   aboutBrand: 'Nike, Inc. - американская компания, всемирно известный производитель спортивной одежды и обуви. Штаб-квартира — в городе Бивертон (штат Орегон). По мнению аналитиков, на долю компании Nike приходится почти 95 % рынка баскетбольной обуви в США[4]. В 2012 году в компании было занято более 44 000 человек по всему миру. Бренд оценивается в $ 10,7 млрд и является самой ценной торговой маркой в спортивной индустрии[5][6]. С 20 сентября 2013 г. входит в Промышленный индекс Доу-Джонса.',

   createCOmpany: 'Компания была основана 25 января 1964 года под названием Blue Ribbon Sports, и официально стала Nike, Inc. 30 мая 1978 года. Nike продает свою продукцию под собственной торговой маркой, а также Nike Golf, Nike Pro, Nike+, Air Jordan, Nike Skateboarding и в том числе под дочерними брендами Cole Haan, Hurley International и Converse. Nike также принадлежала Bauer Hockey (позже переименована Nike Bauer) в период между 1995 и 2008 годами[7]. В дополнение к производству одежды и оборудования, компания управляет розничными магазинами под названием Niketown. Nike является спонсором многих спортсменов и спортивных команд по всему миру.',

   labeBrand: 

};

 var content = tmpl(html, brands);

 $('body').append(content);

});
