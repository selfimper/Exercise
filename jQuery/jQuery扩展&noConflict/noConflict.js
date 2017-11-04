 var myjq = $.noConflict();//消除$对jQuery的缩写

myjq(document).ready(function(){
    myjq("#btn").on("click",function(){
        myjq("div").text("new hello");
    });
});