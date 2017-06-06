
function menu(){
	var m = document.getElementById("nav-cont");
	if(m.className === "nav-cont"){
		m.className += " responsive"
	}else {
		m.className = "nav-cont";
	}
}

var fresh_btn = document.getElementById("trans-btn");

function rand_work(){
var site_arr = ["https://codepen.io/Freshhh/pen/xqRLOK","https://codepen.io/Freshhh/pen/xqRLOK" ,"https://codepen.io/Freshhh/pen/dpmJxr" ,"https://codepen.io/Freshhh/pen/mALPAm" ];
var x = site_arr.length;
var rand = Math.floor(Math.random() * x);
var rand_site = site_arr[rand];
window.open(rand_site);
console.log(rand_site, rand, x);
}