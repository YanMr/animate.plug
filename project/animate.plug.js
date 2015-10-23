/**
 * Created by 严明  on 2015/10/23.
 */
//调用参数
window.onload=function(){
	 animate(obj,{style:key,style1:key},function(){
		 //前一个动画结束后，执行的回调函数
		  animate(obj1,{style:key,style1:key})
		 })
	}
	
//animate
function animate(obj,json,fn){
	var  flag=true;//假设
	clearInterval(obj.timer);//清除定时器
	obj.timer=setInterval(function(){
		for(var attr in json){
       var cur=0;
	   //判断json中有没有opacity
	   if(attr=="opacity"){
			var cur=Math.round(parseFloat(getStyle(obj,attr))*100)
			}else{
				 var cur=parseInt(getStyle(obj,attr))
				}
		var speed=(json[attr]-cur)/8;		
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(cur!=json[attr]){
			flag=false;
			}else{
				flag=true
			}
			if(attr=="opacity")
			{
					cur+=speed;
					obj.style.filter='alpha(opacity:'+cur+')'
				    obj.style.opacity=cur/100 
			}
			else
			{
						obj.style[attr]=cur+speed+"px";
		    }		
	      }
			if(flag){
                 clearInterval(obj.timer);
				    //执行回调函数
                    if(fn){
				         fn()
				}
			}
	      },30)
		
	}
//获取样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj,false)[attr];
			}
	}	 	

