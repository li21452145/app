~function(){
    var conLeft=document.getElementById("conLeft");
    var conRight=document.getElementById("conRight");
    var oaList= $.children(conLeft,"a");
    var odList= $.children(conRight,"div");
    console.log(oaList,odList);
    var oaListH3=$.children(conLeft,"h1")[0];
    oaListH3.onclick=function(){
        if(oaListH3.innerHTML=="jQuery 教程"){
            zhiAnimate(conLeft,{height:"24.2rem"},20);
            oaListH3.innerHTML="收起";
            return
        }if(oaListH3.innerHTML=="收起"){
            zhiAnimate(conLeft,{height:"2.2rem"},20);
            oaListH3.innerHTML="jQuery 教程";
            return
        }

    };
    function changeTab(n) {
        for (var i = 0; i < oaList.length; i++) {
            oaList[i].className = null;
            odList[i].className = "con";
        }
        oaList[n].className = "bg";
        odList[n].className = "con bg";
    }

    for (var i = 0; i < oaList.length; i++) {
        oaList[i].index = i;
        oaList[i].onclick = function () {
            changeTab(this.index);
        }
    }
}();
