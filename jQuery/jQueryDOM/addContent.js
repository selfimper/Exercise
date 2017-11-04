//append 被选中元素末尾插入内容
//prepend 被选中元素的开头插入内容
//before
//after

$(document).ready(function(){
    $("#btn1").click(function(){
        // $("#p1").append(" this is my webpage");
        $("#p1").prepend(" this is my webpage ");
    });

    $("#btn2").click(function(){ //换行添加
        // $("#p2").before("hello");
        $("#p2").after("hello");
    });
}); 


//追加新的元素
function appendText(){
    //可添加html,jQuery,DOM
    var text1 = "<p>Frank</p>"
    var text2 = $("<p></p>").text("Frank1");
    var text3 = document.createElement("p");
    text3.innerHTML = "Frank2";
    $("body").append(text1,text2,text3);
}