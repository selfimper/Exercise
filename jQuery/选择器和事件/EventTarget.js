$(document).ready(function(){
    $("body").bind("click",bodyHandler);
    $("div").bind("click",divHandler);
    $("div").bind("click",divHandler1);
});

function bodyHandler(event){
    conlog(event);
}

function divHandler(event){
    conlog(event);
    // event.stopPropagation(); //阻止父级冒泡
    event.stopImmediatePropagation();////阻止所有的冒泡
}

function divHandler1(event){
    conlog(event);
}

function conlog(event){
    console.log(event);
}