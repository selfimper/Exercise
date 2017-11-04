//parent() 只能向上遍历一层，看到直接父类
//parents() 全部都能遍历
//parentUntil() 两个元素区间内选择

$(document).ready(function(){
    // $("a").parent().css({
    //     border:"3px solid red"
    // });

    // $("a").parents().css({
    //     border:"3px solid red"
    // });

    
    $("a").parentsUntil("#div1").css({
        border:"3px solid red"
    });
});