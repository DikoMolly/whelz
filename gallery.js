function openFunction(){
	document.getElementById("menu").style.display="block";
	document.getElementById("menu").style.transition="5s"
}


function closeFunction(){
	document.getElementById("menu").style.display="none";
	document.getElementById("menu").style.transition="5s"
}

function dark(){
	document.querySelector(".truck-gallery").style.background="grey";
	document.querySelector(".truck-gallery").style.color="white";
	document.querySelector(".truck-gallery").style.transition="3s";
}
function white(){
	document.querySelector(".truck-gallery").style.background="white";
	document.querySelector(".truck-gallery").style.color="white";
	document.querySelector(".truck-gallery").style.transition="3s";
}
function openFunction(){
	document.querySelector(".push").style.display="none";
	document.getElementById("menu").style.display="block";
}
function closeFunction(){
	document.querySelector(".push").style.display="block"
	document.getElementById("menu").style.display="none";
}






