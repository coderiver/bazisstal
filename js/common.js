head.ready(function() {

// slick

	$('.js-slick').slick({
		dots: true,
		arrows: false
	});

	
	$('.overlay i').on('click', function(){
		$('.popup').removeClass('is-open');
		$('.overlay').hide();
		$('body').removeClass('no-scroll');
	});

	$('.popup__close').on('click', function(){
		$(this).parent().removeClass('is-open');
		$('.overlay').hide();
		$('body').removeClass('no-scroll');
	});

// popups

	$('.js-call').on('click', function(){
		$('.overlay').show();
		$('.popup_feedback').addClass('is-open');
		$('body').addClass('no-scroll');
		return false;
	});

	$('.js-order').on('click', function(){
		$('.overlay').show();
		$('.popup_order').addClass('is-open');
		$('body').addClass('no-scroll');
		return false;
	});

	$('.js-info').on('click', function(){
		$('.overlay').show();
		$('.js-popup1').addClass('is-open');
		$('body').addClass('no-scroll');
		return false;
	});

	$('.js-full').on('click', function(){
		$('.overlay').show(); 
		$('.js-popup2').addClass('is-open');
		$('.js-scroll').each(function(){
				$(this).jScrollPane();
				var api = $(this).data('jsp');
				var throttleTimeout;

				$(window).resize(function(){
					if (!throttleTimeout) {
						throttleTimeout = setTimeout(
							function()
							{
								api.reinitialise();
								throttleTimeout = null;
							},
							50
						);
					}
				});
			});
		$('body').addClass('no-scroll');
		return false;
	});

// validation
	var form_validate = $('.js-validate');
	if (form_validate.length) {
		form_validate.each(function () {
			var form_this = $(this);
			$.validate({
				form : form_this
			});
		});
	};

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

 // scrollpane
 
 $('.js-scroll').each(function(){
		$(this).jScrollPane();
		var api = $(this).data('jsp');
		var throttleTimeout;

		$(window).resize(function(){
			if (!throttleTimeout) {
				throttleTimeout = setTimeout(
					function()
					{
						api.reinitialise();
						throttleTimeout = null;
					},
					50
				);
			}
		});
	}); 

});