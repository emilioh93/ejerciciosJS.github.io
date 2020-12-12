var num1 = parseInt(prompt("Ingrese un primer valor"));
var num2 = parseInt(prompt("Ingrese un segundo valor"));

// Ejercicio 5
document.write("La suma de " + num1 + " y " + num2 + " es " + (num1 + num2));

//Ejercicio 6
if (num1 > num2) {
    document.write("<br>El primer valor: " + num1 + " es mayor que el segundo valor: " + num2);
} else if (num1 == num2) {
    document.write("<br>El primer valor: " + num1 + " es igual al segundo valor: " + num2);
} else {
    document.write("<br>El segundo valor: " + num2 + " es mayor que el primer valor: " + num1);
}