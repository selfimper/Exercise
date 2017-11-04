$(document).ready(function(){
    $("#btn1").click(function(){
        $("#p1").text("Hello World"); //修改内容
    });
    $("#btn2").click(function(){
        $("#p2").html("<a href='http://google.com'>google</a>");
    });
    $("#btn3").click(function(){
        $("#i3").val("google");
    });
    $("#btn4").click(function(){
        $("#aid").attr({  //同时放置多个属性
            "href":"http://www.google.com",
            "title":"hello"
        });
    });

    $("#btn5").click(function(){
        $("#p5").text(function(i,ot){//回掉  /ot原来的内容 i为数字，默认为0
            return "old: "+ot+" new:这是新内容"+(i);
        });
    });
});