	$(document).ready(function() {
	  // Cоздаем переменные для кнопки и для меню
	  var pull = $("#navigation-toggle");
	  var nav = $(".navigation ul");

	   // Описываем событие при нажатии на кнопку
	   $(pull).on("click", function(e) {

	   // Отменяем стандартное поведение ссылки в браузере
	   e.preventDefault();

	   // Открываем / Скрываем меню
	   $(nav).slideToggle();

	  });


     // Скрываем меню при нажатии на ссылку
	   
	   var w = $(window).width();
       if(w > 992) {
       	$('nav.navigation a').on("click", function(){
       		$(nav).slideToggle();

       	});
       }

      



	  //slide2id - плавная прокрутка по ссылкам внутри страницы
	  $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector: "nav a"
	  });

	});