var vshow=0;
function showMenu(){
	if(vshow%2 == 0 && window.matchMedia('(min-width: 1024px)').matches){
        document.getElementById("sort").style.cssText=" animation-name: sidebar; \
        animation-duration:1s; animation-fill-mode: forwards;";
        document.getElementById("tovarosort").style.cssText=" animation-name: onmenu; \
        animation-duration:1s; animation-fill-mode: forwards;";
    	vshow++;
    }
    else if(window.matchMedia('(max-width: 1024px)').matches && vshow%2==0){
        document.getElementById("sort").style.cssText="animation-name: sidebar; \
        animation-duration:1s; animation-fill-mode: forwards;";  
        document.getElementById("tovarosort").style.cssText=" animation-name: onmenu; \
        animation-duration:1s; animation-fill-mode: forwards;"; 
        document.getElementsByClassName('menuonoff')[0].style.cssText='display:none';
        document.getElementsByClassName('okover')[0].style.display='block';
    	vshow++;
    	}
    else if(vshow%2 != 0 ){
		document.getElementById("sort").style.cssText="animation-name: sidebar2; \
  		animation-duration:1s; animation-fill-mode: forwards;";  
   		document.getElementById("tovarosort").style.cssText=" animation-name: offmenu; \
   		animation-duration:1s; animation-fill-mode: forwards;";
    	vshow++;
    	}
   }

function showMenuex(){ 
        document.getElementById("sort").style.cssText="animation-name: sidebar2; \
        animation-duration:1s; animation-fill-mode: forwards;";  
        document.getElementById("tovarosort").style.cssText=" animation-name: offmenu; \
        animation-duration:1s; animation-fill-mode: forwards;"; 
        if(window.matchMedia('(max-width: 1024px)').matches){
        document.getElementsByClassName('menuonoff')[0].style.display='block';
        document.getElementsByClassName('okover')[0].style.cssText='display:none';
   		vshow++;
    }
}

var vc=0; 
var sc=0; 
var rc=0; 
var bc=0; 
function velo(){
	if (vc%2==0){
    	document.getElementsByClassName('katsor')[3].style.display='none';
		document.getElementsByClassName('katsor')[2].style.display='none';
		document.getElementsByClassName('katsor')[1].style.display='none';
		document.getElementsByClassName('katsor')[0].style.display='inline-block';
		vc++; 
	console.log('vc' + vc);
	}
    else{ 
		document.getElementsByClassName('katsor')[0].style.cssText='display:none';
		vc++;
	console.log('vc' + vc);
	}
	window.sc=0; 
	window.rc=0; 
	window.bc=0;
}
function skeit(){
	if (sc%2==0){
    	document.getElementsByClassName('katsor')[3].style.display='none';
		document.getElementsByClassName('katsor')[2].style.display='none';
		document.getElementsByClassName('katsor')[0].style.display='none';
		document.getElementsByClassName('katsor')[1].style.display='inline-block';
		sc++;
	console.log('sc ' + sc);
	}
    else{ 
		document.getElementsByClassName('katsor')[1].style.display='none';
		sc++;
	console.log('sc ' + sc);
	}
	window.vc=0;
	window.rc=0; 
	window.bc=0;
}
function rem(){
	if (rc%2==0){
		document.getElementsByClassName('katsor')[3].style.display='none';
		document.getElementsByClassName('katsor')[1].style.display='none';
		document.getElementsByClassName('katsor')[0].style.display='none';
		document.getElementsByClassName('katsor')[2].style.display='inline-block';
		rc++;
	console.log('rc ' + rc);
	}
    else{ 
		document.getElementsByClassName('katsor')[2].style.cssText='display:none';
		rc++;
	console.log('rc ' +rc);
	}
	window.vc=0; 
	window.sc=0; 
	window.bc=0;
}
function bezop(){
	if (bc%2==0){
		document.getElementsByClassName('katsor')[2].style.display='none';
		document.getElementsByClassName('katsor')[1].style.display='none';
		document.getElementsByClassName('katsor')[0].style.display='none';
		document.getElementsByClassName('katsor')[3].style.display='inline-block';
		bc++;
	console.log('bc ' + bc);
	}
    else{ 
    	document.getElementsByClassName('katsor')[3].style.display='none';
		bc++;
	console.log('bc ' + bc);
	}
	window.vc=0; 
	window.sc=0; 
	window.rc=0; 
}