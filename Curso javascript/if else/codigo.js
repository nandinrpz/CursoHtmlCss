/*if(condicao) {

}else {
    
}

if (condicao) {
    // Código a ser executado se a condição for verdadeira
}else if (outraCondicao) {
    // Código a ser executado se a outra condição for verdadeira
} else {
    // Código a ser executado se nenhuma das condições anteriores for verdadeira
}*/

/*var idade = prompt("Digite sua idade: ")
idade = parseInt(idade)
if (idade <= 18) {
    document.white("Você é menor de idade.")
}else if (idade > 18 && idade <= 60) {
    document.white("Você é adulto.")
}else {
    document.white("Você é idoso.")
}*/

var nota = prompt("Digite a nota do aluno: ")
nota = parseFloat(nota)
var media = 7

if (nota >= media) {
    document.write("Aprovado")
}else {
    document.write("Reprovado")
}
