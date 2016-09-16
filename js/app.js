window.addEventListener("load", function() {
	var boton = document.getElementById("cri");
	var contador = 1;
	boton.addEventListener("click", function() {
		if(contador == 1) {
			document.getElementById("color").value = "red";
			document.getElementById("c1").classList.add("c-pink");
			document.getElementById("c3").classList.remove("c-violet");
		}
		if(contador == 2) {
			document.getElementById("color").value = "orange";
			document.getElementById("c2").classList.add("c-red");
			document.getElementById("c1").classList.remove("c-pink");
		}
		if(contador == 3) {
			document.getElementById("color").value = "green";
			document.getElementById("c3").classList.add("c-violet");
			document.getElementById("c2").classList.remove("c-red");
			contador = 0;
		}
		contador++;
	});
    
    var botonDos = document.getElementById("superCri");
    botonDos.addEventListener("click", function() {
		
        var color = document.getElementById("color").value;
        if (color == "Red" || color == "red"){
            document.getElementById("c1").style.border = "4px solid pink";
            document.getElementById("c2").style.border = "0px solid pink";
            document.getElementById("c3").style.border = "0px solid pink";
        } else if (color == "Yellow" || color == "yellow"){
            document.getElementById("c1").style.border = "0px solid red";
            document.getElementById("c2").style.border = "4px solid red";
            document.getElementById("c3").style.border = "0px solid red";
        } else if (color == "Green" || color == "green"){
            document.getElementById("c1").style.border = "0px solid blue";
            document.getElementById("c2").style.border = "0px solid blue";
            document.getElementById("c3").style.border = "4px solid blue";
        }
		
	});
});