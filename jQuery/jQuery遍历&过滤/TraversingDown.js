$(document).ready(function(){
    $("#div1").children("#div1").css({
        border:"3px solid blue"
    }) //向下遍历一级 chindren参数可不写
    $("#div1").find("p").css({
        border:"3px solid red"
    });//find参数必写
});