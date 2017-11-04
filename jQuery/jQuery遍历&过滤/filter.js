//first 寻找同一元素的第一个
//last
//eq 返回当前索引元素
//filter 修改满足当前集合的元素
//not 修改不满足当前集合的元素

$(document).ready(function(){
    // $("div p").first().css({
    //     background:"red"
    // });

    // $("div p").last().css({
    //     background:"red"
    // });

    // $("div p").eq(2).css({
    //     background:"red"
    // });

    // $("div p").filter("p").css({
    //     background:"red"
    // });

    $("div p").not(".pclass").css({
        background:"red"
    });

});