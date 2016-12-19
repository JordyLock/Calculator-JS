function pressed (parms){
	register.innerHTML += parms.target.innerHTML;

}
var	button1 = document.getElementById("btn1");


button1.addEventListener("click", pressed);

document.getElementById("btn2").addEventListener("click", pressed);








