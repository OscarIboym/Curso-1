

var peso;
var pesoEnMarte; // CamelCase

alert ( "quieres saber tu peso en marte?" );
peso = prompt ("cual es tu peso en Kg?", "70");
peso = parseInt(peso);

pesoEnMarte = (peso / 9.81) * 3.711;

alert ( "tu peos en marte es: " + pesoEnMarte + " Kg.");




//alert: Función
// () : Parametros de la función
// "" : Cadenas de texto
//	var nombre = "Oscar";
//	var apellido = "Iboy";
//	var edad = 19;

//	alert (nombre + " " + apellido + "\n" + edad + " años.");
//	alert (5 + 8 + "2");
	