$(document).ready(function(){
	var imgItems = $('.slider li').length; // Numero de Slides
	var imgPos = 1;

	// Agregando paginacao --
	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//------------------------

	$('.slider li').hide(); // Ocultando todos os slides
	$('.slider li:first').show(); // Mostramos el primer slide
	$('.pagination li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

	// Executando todas as funcao
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 3000);

	// FUNCAO =========================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posicao de paginacao selecionada

		$('.slider li').hide(); // Ocultando todos os slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostrando Slide selecionado

		// Mudando estilos da paginacao selecionada
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultando todos os slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostrando o Slide selecionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultando todos os slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostrando os Slide selecionado
	}

});