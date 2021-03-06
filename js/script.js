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

 var html = $('#about-brand').html();

 var brands = [
{
   brandName: 'Nike',

   aboutBrand: 'Nike, Inc. - американская компания, всемирно известный производитель спортивной одежды и обуви. Штаб-квартира — в городе Бивертон (штат Орегон). По мнению аналитиков, на долю компании Nike приходится почти 95 % рынка баскетбольной обуви в США[4]. В 2012 году в компании было занято более 44 000 человек по всему миру. Бренд оценивается в $ 10,7 млрд и является самой ценной торговой маркой в спортивной индустрии[5][6]. С 20 сентября 2013 г. входит в Промышленный индекс Доу-Джонса.',

   createCOmpany: 'Компания была основана 25 января 1964 года под названием Blue Ribbon Sports, и официально стала Nike, Inc. 30 мая 1978 года. Nike продает свою продукцию под собственной торговой маркой, а также Nike Golf, Nike Pro, Nike+, Air Jordan, Nike Skateboarding и в том числе под дочерними брендами Cole Haan, Hurley International и Converse. Nike также принадлежала Bauer Hockey (позже переименована Nike Bauer) в период между 1995 и 2008 годами[7]. В дополнение к производству одежды и оборудования, компания управляет розничными магазинами под названием Niketown. Nike является спонсором многих спортсменов и спортивных команд по всему миру.',
},
{
  brandName: 'Adidas',

  aboutBrand: 'Adidas AG (нем. [ˈadiˌdas], рус. произн. «адида́с», от имени Ади (Адольфа) Дасслера) — немецкий промышленный концерн, специализирующийся на выпуске спортивной обуви, одежды и инвентаря. Генеральный директор компании — Герберт Хайнер. В настоящий момент компания ответственна за дистрибуцию продукции компаний Adidas, Reebok, Y-3, RBK & CCM Hockey, а также Taylor-Made Golf[2].',

  createCOmpany: 'После второй мировой войны семейное дело братьям пришлось поднимать почти с нуля: обувь «Дасслер», как и в 1920-м году, опять производилась из остатков военной амуниции, а 47 наемных работников получали зарплату натурой - дровами и пряжей. Весной 1948 года, вскоре после смерти главы семьи, братья Дасслер разделили компанию, и каждый из них организовал собственный бизнес: Рудольф забрал себе одну фабрику, впоследствии преобразованную в знаменитый концерн «Puma», а Адольф основал компанию «Addas», впоследствии изменив бренд на «Adidas» (аббревиатура от Ади Дасслер ). Приблизительно в это же время появляется и знаменитый логотип этой фирмы.'
},
{
  brandName: 'Puma',

  aboutBrand: 'Puma SE — промышленная компания Германии, специализирующаяся на выпуске спортивной обуви, одежды, инвентаря и парфюмерии под торговой маркой Puma.',

  createCOmpany: 'Компания основана в 1948 году Рудольфом Дасслером после того, как он поссорился со своим братом Адольфом, под названием RuDa (от Rudolf Dassler). Несколько позже компания была переименована в Puma. До момента ссоры братья являлись хозяевами фирмы по производству спортивной обуви Gebrüder Dassler. После разрыва отношений Адольф основал компанию Adidas.'
}
];

 var content = tmpl(html, {
   data: brands
 });

 $('body').append(content);

});
