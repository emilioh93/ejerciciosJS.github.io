var frase = prompt("Escribe una frase");
var longitud = frase.length;
var i;
for (i = 0; i < longitud; i++) {
    if (frase.substr(i, 1) == "a" || frase.substr(i, 1) == "e" || frase.substr(i, 1) == "i" || frase.substr(i, 1) == "o" || frase.substr(i, 1) == "u") {
        document.write(frase.substr(i, 1) + " ");
    }
}