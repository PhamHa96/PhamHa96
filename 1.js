$(function(){
	 $('.n1').click(function(){
 	 	$('html').animate({scrollTop:$('#intro').offset().top});
 	 	return false; 
 	 })
 	 $('.n2').click(function(){
 	 	$('html').animate({scrollTop:$('#detail').offset().top});
 	 	return false; 
 	 })


 	 $('.n3').click(function(){
 	 	$('html').animate({scrollTop:$('#products').offset().top});
 	 	return false; 
 	 })
 	 $('.n4').click(function(){
 	 	$('html').animate({scrollTop:$('#contact').offset().top});
 	 	return false; 
 	 })
 	 $('.n5').click(function(){
 	 	$('html').animate({scrollTop:$('#quote').offset().top});
 	 	return false; 
 	 })
	/*$('.n1').click(function(){
		$('body').animate({scrollTop:$('#intro').offset().top},2000,"easeInOutExpo");
		return false; 
	})
	$('.n2').click(function(){
		$('body').animate({scrollTop:$('#detail').offset().top},2000,"easeInOutExpo");
		return false; 
	})

	$('.n3').click(function(){
		$('body').animate({scrollTop:$('#products').offset().top},2000,"easeInOutExpo");
		return false; 
	})*/
	$(window).scroll(function(){

 	 vitrihientai = $("html").scrollTop();
 	 console.log(vitrihientai);

 	 if(vitrihientai >100){
 	 	$('.navbar-fixed-top').addClass('tienhoa');
 	 } 
 	 else if(vitrihientai <100){
 	 	$('.navbar-fixed-top').removeClass('tienhoa');
 	 }


	 	// mo rong 
	 	if(vitrihientai >= 1800) {
	 		$('.products .imagegroup').addClass('bienra');
	 	}
	 	else if(vitrihientai <1800) {
	 		$('.products .imagegroup').removeClass('bienra');
	 	}

	 	if(vitrihientai >= 1100) {
	 		$('.detail .text_title').addClass('start animated bounceInRight');
	 	}
	 	else if(vitrihientai <1100) {
	 		$('.detail .text_title').removeClass('start animated bounceInRight');
	 	}

	 	if(vitrihientai >= 1200) {
	 		$('.detail .text').addClass('start animated bounceInUp');
	 	}
	 	else if(vitrihientai <1200) {
	 		$('.detail .text').removeClass('start animated bounceInUp');
	 	}

	 	if(vitrihientai >= 2700) {
	 		$('.contact .title').addClass('start animated bounceInRight');
	 	}
	 	else if(vitrihientai <2700) {
	 		$('.contact .title').removeClass('start animated bounceInRight');
	 	}
	 	if(vitrihientai >= 2900) {
	 		$('.contact .groupcontact').addClass('start animated bounceInUp');
	 	}
	 	else if(vitrihientai <2900) {
	 		$('.contact .groupcontact').removeClass('start animated bounceInUp');
		 }
		 if(vitrihientai >= 600) {
			$('.introdetail .text_title').addClass('start animated bounceInRight');
		}
		else if(vitrihientai <600) {
			$('.introdetail .text_title').removeClass('start animated bounceInRight');
		}
		if(vitrihientai >= 700) {
			$('.introdetail .square').addClass('start animated bounceInUp');
		}
		else if(vitrihientai <700) {
			$('.introdetail .square').removeClass('start animated bounceInUp');
		}

	 })
})