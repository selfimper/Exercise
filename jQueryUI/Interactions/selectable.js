$(document).ready(function(){
    $("#btn").button();
    $("#select").selectable();
    $("#btn").on("click",function(){
        if($("#right").hasClass("ui-selected")){
            alert("I think so.");
        }else(
            alert("Maybe you are right, but i think somthing is better.")
        );
    });
});