function resize(originSize,type) {
    var type=type||"x";
    if(type=="x"){
        var width = document.documentElement.clientWidth;
        var scale = width / originSize * 100;
    }else if(type=="y"){
        var height = document.documentElement.clientHeight;
        var scale = width / originSize * 100;
    }
    document.getElementsByTagName("html")[0].style.fontSize = scale+"px";
}
window.onload = function() {
    resize(750);
}