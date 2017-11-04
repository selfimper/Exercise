var clickMe;

//自定义事件对象
$(document).ready(function(){
    clickMe = $("#clickMe");
    clickMe.click(function(){
        var e = jQuery.Event("myEvent");
        clickMe.trigger(e);
    });

    clickMe.bind("myEvent",function(event){
        console.log(event);
    })
});