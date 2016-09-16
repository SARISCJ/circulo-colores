###CIRCULO DE COLORES

###BOTON CRI
El boton CRI lo que debe hacer es que al hacer click cambie el borde del primer circulo y luego del segundo y del tercero, asi sucesivamente. 

###SOLUCIÓN 
1. Para eso hice un script el que incluye eventos, uno de ellos es el click, que nos permitira ejecutar una accion en el botón CRI. la acción que se ejecutara será que aparezca un borde de color en cada uno de los círculos. A continuacion se muestra el codigo:

```javascript
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
```

###BOTON SUPER CRI
El boton SUPER CRI lo que debe hacer es que el usuario al digitar uno de los colores de los circulos que se muestran debe cambiar el color del borde del circulo mencionado.  

###SOLUCIÓN 
1. Para eso hice un script el que incluye eventos, uno de ellos es el click, que nos permitira ejecutar una accion en el botón SUPER CRI. la acción que se ejecutara será que aparezca un borde de color en cada uno de los círculos mencionados por el usuario. A continuacion se muestra el codigo:

```javascript
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
```