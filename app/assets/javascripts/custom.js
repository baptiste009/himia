// On-load scripts
$(window).load(function(){

});

// Mouseup handle
jQuery(document).mouseup(function(e){
    var container = $("");
    if (!container.is(e.target) && container.has(e.target).length === 0){
        container.hide();
    }
});

// jQuery scripts
$(document).ready(function(){

	// Jump toggle
	$('a.goto').on('click',function(){
		var gotoId = $(this).data('goto');
		$('html, body').animate({
			scrollTop: $('#'+gotoId).offset().top 
		}, 1000);
		return false;
	});
	$('#section_next').on('click',function(){
		var sectionId = $(this).data('section');
		$('html, body').animate({
			scrollTop: $('#'+sectionId).offset().top -50
		}, 1000);
		return false;
	});

	// Checkbox
	$('.checkbox').on('click',function(){
		var checkbox = $('input',this);
		if(checkbox.is(':checked') == true){
			$(this).removeClass('selected');
		}else{
			$(this).addClass('selected');
		}
	});
	$('input').iCheck({ checkboxClass: 'icheckbox_square', radioClass: 'iradio_square' });

	// Bootstrap
	$('.nav-tabs li').click(function(){
		setTimeout(function(){bxcontrol.reloadSlider();},0)
	})
	$('[data-toggle="tooltip"]').tooltip({
		container: 'body'
	});
	$('[data-toggle="popover"]').popover({
		container: 'body'
	});
});
