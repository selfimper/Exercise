$(document).ready(function(){
    $("#in").on("click",function(){
        $("#div1").fadeIn(1000);
    });
    $("#in").on("click",function(){
        $("#div2").fadeIn(1000);
    });
    $("#in").on("click",function(){
        $("#div3").fadeIn(1000);
    });

    $("#out").on("click",function(){
        $("#div1").fadeOut(1000);
    });
    $("#out").on("click",function(){
        $("#div2").fadeOut(1000);
    });
    $("#out").on("click",function(){
        $("#div3").fadeOut(1000);
    });

    $("#toggle").on("click",function(){
        $("#div1").fadeToggle(1000);
    });
    $("#toggle").on("click",function(){
        $("#div2").fadeToggle(1000);
    });
    $("#toggle").on("click",function(){
        $("#div3").fadeToggle(1000);
    });

    $("#t0").on("click",function(){//淡化
        $("#div1").fadeTo(1000,0.5);
    });
    $("#to").on("click",function(){
        $("#div2").fadeTo(1000,0.7);
    });
    $("#to").on("click",function(){
        $("#div3").fadeTo(1000,0.3);
    });
});