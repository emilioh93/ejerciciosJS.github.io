var numero = parseInt(prompt("Introduce un número"));

if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0) {
    document.write("El número " + numero + " si es divisible por 2 o 3 o 5 o 7.");
} else {
    document.write("El número " + numero + " no si es divisible por 2 o 3 o 5 o 7.");
}

if (numero % 2 == 0) {
    document.write("<br>El número " + numero + " es divisible por 2.");
} else if (numero % 3 == 0) {
    document.write("<br>El número " + numero + " es divisible por 3.");
} else if (numero % 5 == 0) {
    document.write("<br>El número " + numero + " es divisible por 5.");
} else if (numero % 7 == 0) {
    document.write("<br>El número " + numero + " es divisible por 7.");
} else {
    document.write("<br>Intenta con otro número.");
}