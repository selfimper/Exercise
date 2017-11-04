//remove 
//empty

$(document).ready(function(){
    $("#btn").click(function(){
        // $("#div").remove();//删除所有内容
        $("#div").empty(); //删除内部子元素
    });
});