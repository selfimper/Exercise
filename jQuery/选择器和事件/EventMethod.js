$(document).ready(function(){//判断文档是否加载完全
    // $("button").click(function(){//单机隐藏
    // $("button").dblclick(function(){//双击隐藏
    // $("button").mouseenter(function(){//鼠标进入隐藏
       $("button").mouseleave(function(){//鼠标移开隐藏
        $(this).hide(); 
    })
})