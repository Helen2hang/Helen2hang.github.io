//navbar effect
$(document).ready(function(){
    $(window).scroll(function() {
        if ($(window).width() >= 767) {  
      if ($(document).scrollTop() > 50 ) {
        $(".navbar").css({"background-color": "black",  
        "-webkit-transition": "background-color 0.3s ease-out",
        "-moz-transition": "background-color 0.3s ease-out",
        "-o-transition": "background-color 0.3s ease-out",
        "transition": "background-color 0.3s ease-out"});
      } else {
        $(".navbar").css("background-color", "transparent");
      }
  }
    });
  });

//add smooth scrolling
$(document).ready(function(){
$(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
      window.location.hash = hash;
    });
  }
});
  
});
