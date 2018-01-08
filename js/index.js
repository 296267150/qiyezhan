let list=document.querySelectorAll(".banner_content li");
let lunbo=document.querySelectorAll(".banner_bottom li");
let banners=document.querySelector(".banner");
let btn_left=document.querySelector(".banner_btn .left_btn");
let btn_right=document.querySelector(".banner_btn .right_btn");
lunbo.forEach(function(ele,index){
	ele.onclick=function(){
		for (let i=0;i<list.length;i++) {
			list[i].classList.remove("tianjia");
			lunbo[i].classList.remove("dianji");
		}
			this.classList.add("dianji");
			list[index].classList.add("tianjia");
		};
	})
			
	let n=0;
	function xunhuan(dir="r"){
		if(dir==="r"){
			n++
		if(n===lunbo.length){
			n=0;
			}
		}else if(dir==="l"){
			n--
			if(n===-1){
			n=list.length-1;
			}
		}
		for(let i=0;i<list.length;i++){
			list[i].classList.remove("tianjia");
			lunbo[i].classList.remove("dianji");
		}
		lunbo[n].classList.add("dianji");
			list[n].classList.add("tianjia");
		}
		var st=setInterval(xunhuan,1000);
			
		banners.onmouseover=function(){
			clearInterval(st);
		}
		banners.onmouseout=function(){
			st=setInterval(xunhuan,1000);
		}
			
		btn_right.onclick=function(){
			xunhuan("r");
		}
		btn_left.onclick=function(){
			xunhuan("l");
		}