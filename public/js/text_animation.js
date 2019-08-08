
// let divs = document.getElementsByClassName("BeforeScroll");
// let divs = document.querySelectorAll("BeforeScroll");
// console.log(divs);
// <script type = "text/javascript">
$(document).ready(function(){
  //Take your div into one js variable
  $(window).scroll(function () {
      // console.log(divv);
    // Object.entries(divs).map(( object ) => {
    console.log("scrolling");
    $('.BeforeScroll').each(function(i){

    var windowpos = $(window).scrollTop();
    var pos = $(this).position();
     if (windowpos >= (pos.top - 100)) {
      $(this).addClass("AfterScroll");
    }
    //If scroll is less than 100px, remove the class AfterScroll so that your content will be hidden again
    else {
      s.removeClass("AfterScroll");
    }

    // console.log(statsValue);
});
    // $("BeforeScroll").each( function(){

    // console.log(div);
    //Take the current position (vertical position from top) of your div in the variable
    // var div = $(this)
    // console.log(div);
    // var pos = object[1][0].position();
    // console.log(pos);
    //Now when scroll event trigger do following
   // var windowpos = $(window).scrollTop();
   //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
   // I am taking 100px scroll, you can take whatever you need
   // if (windowpos >= (pos.top - 100)) {
   //   div.addClass("AfterScroll");
   // }
   // //If scroll is less than 100px, remove the class AfterScroll so that your content will be hidden again
   // else {
   //   s.removeClass("AfterScroll");
   // }

 // });
   //Note: If you want the content should be shown always once you scroll and do not want to hide it again when go to top agian, no need to write the else part
 });
});
