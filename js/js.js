/**
 * Created by szy on 2016/3/17.
 */
//window.onload=function(){
//
//  var oDiv=document.getElementById("list");
//  var oA=oDiv.getElementsByTagName("a")[0];
//
//  oDiv.innerHTML=oDiv.innerHTML+oDiv.innerHTML;
//
//  var timer = setInterval(move,50);
//  function move(){
//    if(oDiv.offsetTop<-oDiv.offsetHeight/2)
//    {
//      oDiv.style.top="0";
//    }
//    oDiv.style.top=oDiv.offsetTop+(-1)+"px";
//  }
//  oDiv.onmouseover=function(){
//    clearInterval(timer);
//  }
//  oDiv.onmouseout=function(){
//    timer = setInterval(move,50);
//  }
//
//}
//slide
//$(function(){
//  var t = setInterval(autoSlide,2000);
//  function autoSlide(){
//    $('.slide-box').animate({'margin-top':'-60px'},500,function(){
//      $(this).find("li:first").appendTo(this);
//      $(this).css({ "margin-top": "0px" });
//    });
//  }
//})
//
$(function(){
  var t = setInterval(autoSlide,2000);
  function autoSlide(){
    $('.list').animate({'margin-top':'-42px'},500,function(){
      $(this).find("a:first").appendTo(this);
      $(this).css({ "margin-top": "0px" });
    });
  }


})