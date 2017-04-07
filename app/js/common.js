$(function() {

	// Custom JS
	$(window).resize(
		function(){
			if(screen.width < 1024){
				$('.contacts-btn').text('Subscribe');
			}else{
				$('.contacts-btn').text('Subscribe Now');
			}
		}
	);



$(document).ready(function(){
	$(".nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});



	$('.service_element-left')
		.waypoint( function(dir) {
			if ( dir === 'down' )
				$(this)
				.removeClass('fadeOutLeft')
				.addClass('fadeInLeft');
			else
				$(this)
				.removeClass('fadeInLeft')
				.addClass('fadeOutLeft');
		}, {
			offset: '70%'
		})
 
		.waypoint( function(dir) {
			if( dir === 'down' )
				$(this)
				.removeClass('fadeInLeft')
				.addClass('fadeOutLeft');
			else
				$(this)
				.removeClass('fadeOutLeft')
				.addClass('fadeInLeft');
		}, {
			offset: -100
		});


		$('.service_element-right')
		.waypoint( function(dir) {
			if ( dir === 'down' )
				$(this)
				.removeClass('fadeOutRight')
				.addClass('fadeInRight');
			else
				$(this)
				.removeClass('fadeInRight')
				.addClass('fadeOutRight');
		}, {
			offset: '70%'
		})
 
		.waypoint( function(dir) {
			if( dir === 'down' )
				$(this)
				.removeClass('fadeInRight')
				.addClass('fadeOutRight');
			else
				$(this)
				.removeClass('fadeOutRight')
				.addClass('fadeInRight');
		}, {
			offset: -100
		});



		// $('.howitworks-element')
		// .waypoint( function(dir) {
		// 	if ( dir === 'down' )
		// 		$(this)
		// 		.removeClass('fadeOutDownBig')
		// 		.addClass('fadeInDownBig');
		// 	else
		// 		$(this)
		// 		.removeClass('fadeInDownBig')
		// 		.addClass('fadeOutDownBig');
		// }, {
		// 	offset: '70%'
		// })
 
		// .waypoint( function(dir) {
		// 	if( dir === 'down' )
		// 		$(this)
		// 		.removeClass('fadeInDownBig')
		// 		.addClass('fadeOutDownBig');
		// 	else
		// 		$(this)
		// 		.removeClass('fadeOutDownBig')
		// 		.addClass('fadeInDownBig');
		// }, {
		// 	offset: -50
		// });

	

});
