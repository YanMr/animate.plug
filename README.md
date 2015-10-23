#参数说明
//调用参数<br>
window.onload=function(){<br>
	 animate(obj,{style:key,style1:key},function(){<br>
		 //前一个动画结束后，执行的回调函数<br>
		  animate(obj1,{style:key,style1:key})<br>
		 })<br>
	}<br>
	#功能说明<br>
	Uniform animation original animation plug-in, <br>
	support,<br>
	support the buffer animation, <br>
	animation support multiple object, <br>
	upport for multiple object animation at the same time,<br> 
	support the callback function<br>
#插件诞生的故事<br>
前天遇到一个客户，他需要写个手机APP主页，然后App主页有个交互效果，</br>
他给我提了一个很奇葩的需求<br>
第一，要用jquery实现这效果<br>
第二，要用JavaScript也同样实现这个效果<br>
当时我就郁闷了，心想：“为什么要这样“？后来得到客户的答案是：”他想学习“！<br>
当时我有种一群乌鸦飞过的感觉！
今天，他效果完成了！<br>
后来想想以后要是遇到这种客户怎么办？<br>
于是，我花了几分时间，把代码单独提取了出来，然后优化了下<br>
于是animate.plug就在今天诞生了
