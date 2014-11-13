head.ready(function() {

// slick

	$('.js-slick').slick({
		dots: true,
		arrows: false
	});

	
	$('.overlay i').on('click', function(){
		$('.popup').removeClass('is-open');
		$('.overlay').hide();
	});

	$('.popup__close').on('click', function(){
		$(this).parent().removeClass('is-open');
		$('.overlay').hide();
	});

// popups

	$('.js-call').on('click', function(){
		$('.overlay').show();
		$('.popup_feedback').addClass('is-open');
		return false;
	});

	$('.js-order').on('click', function(){
		$('.overlay').show();
		$('.popup_order').addClass('is-open');
		return false;
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