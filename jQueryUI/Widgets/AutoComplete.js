//自动补全

$(document).ready(function(){
    var autotags = ["frank","google","hello","html","css","javascript"];
    $("#tags").autocomplete({
        source:autotags
    });
});