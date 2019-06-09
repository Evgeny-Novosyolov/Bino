$(document).ready(function(){
	$('.fa-toggle-on').click(function(){
    $(this).toggleClass('open');
    $('.header__logo').toggle();
    $('.menu').toggle();
    $('.header__content').toggle();
	});
});