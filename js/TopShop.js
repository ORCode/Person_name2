function bh(){
	document.getElementsByClassName("container").style.display="none";
}
var count = 10000;

function velo(){
	document.getElementById("container").style.cssText="background-image: url(img/logo/velot.png)";
	window.count=10000;
}
function skeit(){
	document.getElementById("container").style.cssText="background-image: url(img/logo/skeit.jpg)";
	window.count=10001;
}
function rem(){
	document.getElementById("container").style.cssText="background-image: url(img/logo/rem.jpg)";
	window.count=10002;
}
function bezop(){
	document.getElementById("container").style.cssText="background-image: url(img/logo/bz.jpg)";
	window.count=10003;
}
function nextslide() {
		count++;
		var a = count%4;
	console.log(a);
	switch(a){
	case 0: 
	document.getElementById("container").style.backgroundImage="url(img/logo/velot.png)";
	document.getElementsByClassName("radio")[0].checked = true;
	break;
	case 1:
	document.getElementById("container").style.backgroundImage="url(img/logo/skeit.jpg)";
	var h = document.getElementsByClassName("radio")[1].checked = true; 
	console.log(h);
	break;
	case 2: 
	document.getElementById("container").style.backgroundImage="url(img/logo/rem.jpg)";
	document.getElementsByClassName("radio")[2].checked = true;
	break;
	case 3:
	document.getElementById("container").style.backgroundImage="url(img/logo/bz.jpg)";
	document.getElementsByClassName("radio")[3].checked = true;
	break;
	}
}

function prevslide() {
	count--;
	var a = count%4;
	console.log(a);
	switch(a){
	case 3: document.getElementById("container").style.backgroundImage="url(img/logo/bz.jpg)";
	document.getElementsByClassName("radio")[3].checked = true;
	break;
	case 2:
	document.getElementById("container").style.backgroundImage="url(img/logo/rem.jpg)";
	document.getElementsByClassName("radio")[2].checked = true;
	break;
	case 1: 
	document.getElementById("container").style.backgroundImage="url(img/logo/skeit.jpg)";
	document.getElementsByClassName("radio")[1].checked = true;
	break;
	case 0:
	document.getElementById("container").style.backgroundImage="url(img/logo/velot.png)";
	document.getElementsByClassName("radio")[0].checked = true;
	break;
	}
}
