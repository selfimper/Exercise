//选择器(元素，ID，类)
$(document).ready(function(){
    $("button").click(function(){
        $("p").text("p元素被修改了");//#pid  .p2
    })
})