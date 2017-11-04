//进度条自动增长

var pb;
var max = 100;
var current = 0;

$(document).ready(function(){
    // $("#pb").progressbar({value:25});
    pb = $("#pb");
    pb.progressbar({max:100})
    setInterval(changepb,100);
});

function changepb(){
    current++;
    if(current>=100){
        current = 0;
    }
    pb.progressbar("option","value",current);
}