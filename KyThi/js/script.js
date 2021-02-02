$(document).ready(function() {
	$('.nut-Nghe ul li').click(function(event) {
		/* Act on the event */
		var vi_tri_hien_tai = $('.active_nut').index()+1;
		var vi_tri_click = $(this).index()+1;
		$('.nut-Nghe ul li').removeClass('active_nut');
		$(this).addClass('active_nut');
		if(vi_tri_click>vi_tri_hien_tai){
	      $('.one').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
	         $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('one');
	      });
	      $('.row.r1:nth-child('+vi_tri_click+')').addClass('one').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
	         $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
	      });
	   }
	   if(vi_tri_click<vi_tri_hien_tai){
	      $('.one').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
	         $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('one');
	      });
	      $('.row.r1:nth-child('+vi_tri_click+')').addClass('one').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
	         $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
	      });
	   }
		});
	$('.nut-cty ul li').click(function(event) {
		/* Act on the event */
		var vi_tri_hien_tai = $('.active_nut1').index()+1;
		var vi_tri_click = $(this).index()+1;
		$('.nut-cty ul li').removeClass('active_nut1');
		$(this).addClass('active_nut1');
		if(vi_tri_click>vi_tri_hien_tai){
	      $('.two').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
	         $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('two');
	      });
	      $('.row.r2:nth-child('+vi_tri_click+')').addClass('two').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
	         $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
	      });
	   }
	   if(vi_tri_click<vi_tri_hien_tai){
	      $('.two').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
	         $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('two');
	      });
	      $('.row.r2:nth-child('+vi_tri_click+')').addClass('two').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
	         $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
	      });
	   }
		});
});
