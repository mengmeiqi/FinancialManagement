var oAbout = document.getElementById("about");
var aLi = oAbout.getElementsByTagName("li");
var oContent = document.getElementById("con");
var aDiv = oContent.getElementsByTagName("div");
for(var i=0; i<aLi.length; i++){
    aLi[i].index = i;//给每个li对象自定义属性，保存住当时的i的值
    //相当于:
    //aLi[0].index = 0;
    //aLi[1].index = 1;
    //aLi[2].index = 2;
    aLi[i].onclick = function(){
        for(var i=0; i<aLi.length; i++){
            aLi[i].className = "";
            aDiv[i].className = "";
        }
        this.className = "selected";//class的名字
        aDiv[this.index].className = "selected";
    };
}

