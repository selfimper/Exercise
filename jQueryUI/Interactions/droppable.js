$(document).ready(function(){
    $("#div1").draggable();
    $("#div2").droppable(); //放置交互事件

    $("#div2").on("drop",function(event,ui){
        $("#div2").text("drop事件");
    })
})