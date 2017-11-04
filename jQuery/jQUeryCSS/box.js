$(document).ready(function(){
    alert($("div").height());
    alert($("div").innerHeight());//element+padding
    alert($("div").outerHeight());//element+padding+border
    alert($("div").outerHeight(true));//element+padding+border+margin
});