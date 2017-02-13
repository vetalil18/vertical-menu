$(function () {
	var $links = $('.main-menu a');
	$links.on('click', function(e) {
		var $submenu = $(this).siblings('.submenu');
		e.preventDefault();
		console.log('$submenu', $submenu);
		$submenu.slideToggle();
	});
});