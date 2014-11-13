head.ready(function() {

// slick

	$('.js-slick').slick({
		dots: true,
		arrows: false
	});

// map
	
  if ($('.map').length) {
    ymaps.ready(function () {
      var myMap = new ymaps.Map('YMapsID', {
          center: [55.763447, 37.620868],
          zoom: 12,
          controls: []
      });
     // Создаем метку с помощью вспомогательного класса.
        myPlacemark1 = new ymaps.Placemark([55.753591, 37.620242], {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            balloonContent: 'Балун',
            hintContent: 'г. Москва, Красная Площадь 23, оф. 214'
        }, {
            // Опции.
            // Стандартная фиолетовая иконка.
            preset: 'twirl#violetIcon'
        });

     myMap.geoObjects.add(myPlacemark1)

    });
  };	

});