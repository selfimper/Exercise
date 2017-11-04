//不常见
$.myjq = function(){
    alert("hello myjQuery");
}

//常见扩展方式
$.fn.myjq = function(){
    $(this).text("hello");
}