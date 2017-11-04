$(document).ready(function(){
    $(".main>a").click(function(){
        var ulNode = $(this).next("ul");
        // if(ulNode.css("display") == "none"){
        //     ulNode.css("display","block");
        // }else{
        //     ulNode.css("display","none");
        // }

        //jquery提供的效果
        //show/hide
        //ulNode.toggle();//数字，slow，normal，fast

        //slideDown()/slideUp()
        ulNode.slideToggle();
    });
});