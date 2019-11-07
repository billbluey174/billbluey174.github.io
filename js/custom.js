// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})

$('.rbutton').click(function() {
	var sectionTo = $(this).attr('href');
	if(!$("#navbar").hasClass('active')) {
		$('.navbar-nav li').removeClass('active');
		$("#navbar").addClass('active');
	}
});

// Smooth scrolling for navbar
$(document).ready(function () {
	// Run on any internal link click
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		// I actually don't remember what this is for
		var target = this.hash,
			$target = $(target);

		// Smooth scroll to the target
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 90
		}, 900, 'swing', function () {
		});
	});
});