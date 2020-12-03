// JavaScript Document
$(document).ready(function(){
    $("nav").hover(function(){
        $(this).parent(this).css('background','red');
    });

    $("nav").mouseleave(function(){
		$(this).parent(this).css('background', 'linear-gradient(90deg, hsla(211, 66%, 87%, 1) 0%, hsla(348, 67%, 88%, 1) 50%, hsla(272, 26%, 72%, 1) 100%');
		
    });
});
