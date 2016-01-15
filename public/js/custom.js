$(document).ready(function(){
    $(".thumbnail").hover(function() {
      $(this).css("opacity", "0.7");
    },
    function() {
      $(this).css("opacity", "1");

	})
	
})


$(document).ready(function(){
  $("img.lazy").lazyload({
    effect : "fadeIn"
  });
})


$(document).ready(function() {

 
     $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
})