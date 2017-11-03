window.onload = function(){
    imgLocation("container","box");
    var imgData={"data":[{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"}]};
    window.onscroll = function(){
        if(checkFlag()){
            var cpartent = document.getElementById("container");
            for(var i = 0;i<imgData.data.length;i++){
                var ccontent = document.createElement("div");
                ccontent.className="box";
                cpartent.appendChild(ccontent);
                var boximg = document.createElement("div");
                boximg.className="box_img";
                ccontent.appendChild(boximg);
                var img = document.createElement("img");
                img.src = "img/"+ imgData.data[i].src;
                boxing.appendChild(img);
            }
            imgLocation("container","box");
        }
    }
}

function checkFlag(){
    var cparent = document.getElementById("container");
    var ccontent = getChileElement(cparent,"box");
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    var pageHight = document.documentElement.clientHeight||document.body.clientHeight;
    if(lastContentHeight<scrollTop+pageHight){
        return true;
    }
    // console.log(lastContentHeight);
}

function imgLocation(parent,content){
    //将parent下多有的content全部取出
    var cparent = document.getElementById(parent);
    var ccontent = getChileElement(cparent,content);
    var imgWidth = ccontent[0].offsetWidth;
    var num = Math.floor(document.documentElement.clientWidth / imgWidth);
    cparent.style.cssText = "width:"+imgWidth*num+"px;margin: 0 auto";

    var boxHeightArr = [];
    for(var i = 0;i<ccontent.length;i++){
        if(i<num){
            boxHeightArr[i] = ccontent[i].offsetHight;
            // console.log(boxHeightArr[i]);
        }else{
            var minheight = Math.min.apply(null,boxHeightArr);
            var minindex =  getminheightLocation(boxHeightArr,minheight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minheight+"px";
            ccontent[i].style.left = ccontent[minindex].offsetLeft+"px";
            boxHeightArr[minindex] = boxHeightArr[minindex]+ccontent[i].offsetHight;
            // console.log(minheight);
        }
    }
}

function getminheightLocation(boxHeightArr,minHeight){
    for(var i in boxHeightArr){
        if(boxHeightArr[i] == minHeight){
            return i;
        }
    }
}

function getChileElement(parent,content){
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");
    for(var i = 0;i<allcontent.length;i++){
        if(allcontent[i].className==content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}