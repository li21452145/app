
!(function(){

    var cons=document.getElementById('cons');
    var list=document.getElementById('list');
    var oA=list.getElementsByTagName("li");
    var oBox=utils.children(cons,'div');
    var div1=oBox[0];
    var H1=div1.scrollHeight;
    div1.style.height=H1+"px";
    for(var i=0;i<oA.length;i++){
        oA[i].i=i;
        var oa=oA[i];
        oa.onclick=function(){
            if(this.className=='bg'){
                return
            }
            this.className='bg';
            var box=oBox[this.i];
            box.style.display='block';
            var oas=utils.siblings(this);
            var boxs=utils.siblings(box);
            for(var i=0;i<oas.length;i++){
                oas[i].className='';
                boxs[i].style.display="none";
                console.log(boxs[i],oas[i])
                var div2=oBox[1];
                var H2=div2.scrollHeight;
                div2.style.height=H2+"px";
                var div3=oBox[2];
                var H3=div3.scrollHeight;
                div3.style.height=H3+"px";
            }
            utils.win("scrollTop",0)
        }
    }
})();
