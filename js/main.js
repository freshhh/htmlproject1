
function menu(){
	var m = document.getElementById("nav-cont");
	if(m.className === "nav-cont"){
		m.className += " responsive"
	}else {
		m.className = "nav-cont";
	}
}