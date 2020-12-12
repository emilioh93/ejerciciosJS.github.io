var num1 = parseInt(prompt("Ingrese un primer valor"));
var num2 = parseInt(prompt("Ingrese un segundo valor"));
var num3 = parseInt(prompt("Ingrese un tercer valor"));

if (num1 > num2 && num1 > num3) {
    document.write("<br>El primer valor: " + num1 + " es mayor que el segundo valor: " + num2 + " y mayor que el tercer valor: " + num3);
} else if (num2 > num1 && num2 > num3) {
    document.write("<br>El segundo valor: " + num2 + " es mayor que el primer valor: " + num1 + " y mayor que el tercer valor: " + num3);
} else if (num3 > num1 && num3 > num2) {
    document.write("<br>El tercer valor: " + num3 + " es mayor que el primer valor: " + num1 + " y mayor que el segundo valor: " + num2);
} else {
    document.write("<br>Todos los valores son iguales");
}