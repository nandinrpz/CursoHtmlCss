// todas as condições abaixo devem ser verdadeiras para que o resultado seja verdadeiro
// true && true = true
if(2 == 2 && 3 >= 1) {
    document.write("Verdadeiro <br>");
}else {
    document.write("Falso <br>");
}
// apenas uma condição true é suficiente para que o resultado seja verdadeiro
//true || false = true 
if(2 == 2 || 3 >= 1) {
    document.write("Verdadeiro <br>");
}else {
    document.write("Falso <br>");
}
// inverte o valor booleano
// true = false
if(!4 == 4) {
    document.write("Verdadeiro <br>");
}else {
    document.write("Falso <br>");
}

var nota = prompt("Digite sua nota: ");
var media = 7;
var frequencia = prompt("Digite sua frequência: ");
var frequenciaMaxima= 15;

if(nota >= media && frequencia <= frequenciaMaxima ) {
    document.write("Aprovado <br>");
}else {
    document.write("Reprovado <br>");
}

var resultado = nota >= media && frequencia <= frequenciaMaxima ? "Aprovado" : "Reprovado";
document.write(resultado + "<br>");