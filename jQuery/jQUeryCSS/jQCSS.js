$(document).ready(function(){

    //写法一：单一属性
    // $("div").css("width","100px");
    // $("div").css("height","100px");
    // $("div").css("background-color","red");

    //写法二：多属性
    // $("div").css({
    //     width:"100px",height:"100px",backgroundColor:"blue",border:"5px solid grey"
    // });

    $("div").addClass("style1");//添加css类

    $("div").click(function(){
        // $(this).addClass("style2");//点击更改  removeClass/移除样式
        $(this).toggleClass("style2");
    })
});