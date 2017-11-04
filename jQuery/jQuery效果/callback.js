$(document).ready(function(){
    $("button").click(function(){
        // $("p").hide(1000,function(){
        //     alert("动画结束，为回掉函数")
        // });
        $("p").css("color","red").slideUp(1000).SlideDown(1000);
    });
});