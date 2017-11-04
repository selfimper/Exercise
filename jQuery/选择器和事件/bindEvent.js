$(document).ready(function(){
    // $("#clickMe").click(function(){
    //     alert("hello")
    // });
    
    // $("#clickMe").bind("click",clickHandler1);//绑定事件
    // $("#clickMe").bind("click",clickHandler2);
    // $("#clickMe").unbind("click",clickHandler1);//解绑事件

    //推荐方法
    $("#clickMe").on("click",clickHandler1);//绑定事件
    $("#clickMe").on("click",clickHandler2);
    $("#clickMe").off("click",clickHandler1);//解绑事件
})

function clickHandler1(){
    console.log("点击1");
}
function clickHandler2(){
    console.log("点击2");
}