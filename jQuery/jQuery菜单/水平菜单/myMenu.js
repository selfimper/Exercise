//slideDown()
//slideUp()
//slideToggle()
$(document).ready(function(){
    $(".main").hover(function(){
        $(this).children("ul").slideToggle();
    });
});