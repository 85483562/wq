
document.addEventListener('readystatechange',function(){
	if(document.readyState==='complete'){
	var slides=document.querySelectorAll('#slides .samples')
	console.log(slides)
	var arrs=['slides-1','slides-2','slides-3','slides-4','slides-5','slides-6','slides-7','slides-8','slides-9']
	lunbo=function(){
		arrs.push(arrs.shift());
		for(var i=0;i<slides.length;i++){
			slides[i].setAttribute('class','samples '+arrs[i]);
			slides[i].onmouseover=function(){
				clearInterval(t);
			}
			slides[i].onmouseout=function(){
				t=setInterval(lunbo,2000);
			}
		}
	}
	var t=setInterval(lunbo,2000)
	}
},false)























/*监听document的readystatechange事件
和监听window的load事件的区别
readystatechange 触发时间：页面中的dom元素加载完成之后
load             触发时间：页面中链接都加载完成之后
(href src  图片  引入的样式 引入的脚本)
根据具体的情况选择不同事件去监听*/