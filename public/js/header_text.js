$(document).ready(function(){
	$(window).scroll(function(){
  	var about_pos = $('#home').offset().top;
    var about_height = $('#home').height();
    var menu = $('#navbar');
    if (menu.length) {
      var menu_pos = menu.offset().top;
      var menu_height = $('#navbar').height();
      var scroll = $(window).scrollTop();
      console.log('about',about_pos);
      console.log('menu',menu_pos);
      console.log('scroll',scroll);

      if(menu_pos > light_pos && menu_pos < (light_pos + light_height)) {
      	$('.navbar').addClass('menu_blue');
        $('.navbar').removeClass('menu_pink');
      }
      else {
      	$('.navbar').removeClass('menu_pink');
        $('.navbar').addClass('menu_blue');
      }
    }
    console.log("poop");

  })
})
