$(document).ready(function(){
    // $("#btn1").click(function(){
    //     alert("text: "+$("#text").text()); //获取元素
    // });
    // $("#btn1").click(function(){
    //     alert("text: "+$("#text").html());//html可以获取到标签
    // });
    // $("#btn1").click(function(){
    //     alert("text: "+$("#it").val());//获取属性
    // });
    $("#btn2").click(function(){
        alert("text: "+$("#aid").attr("href"));//获取超链接属性
    });
});