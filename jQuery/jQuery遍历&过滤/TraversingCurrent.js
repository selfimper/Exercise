//siblings 除了指定元素，其他同级元素均被修改
//next 修改指定元素同级下一元素
//nextAll 下面所有元素修改
//nextUntil 修改区间内
//prev 向上元素修改
//preAll
//preUntil

$(document).ready(function(){
    // $("h4").siblings().css({
    //     border:"3px solid red"
    // });

    // $("h4").next().css({
    //     border:"3px solid red"
    // });

    // $("h4").nextAll().css({
    //     border:"3px solid red"
    // });

    // $("h4").nextUntil("h6").css({
    //     border:"3px solid red"
    // });

    $("h4").prev().css({
        border:"3px solid red"
    });
});