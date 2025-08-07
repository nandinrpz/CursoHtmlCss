//trocar os valores de duas variáveis sem forçar a troca com uma nova declaração e exibir os novos valores
var a = 10
var b = 20
var c = null

document.write("A variável a é: " + a + "<br>")
document.write("A variável b é: " + b + "<br>")
document.write("A variável c é: " + c + "<br>")

document.write("<br>")


c = a // atribuindo o valor de a para c
a = b // atribuindo o valor de b para a
b = c // atribuindo o valor de c (antigo a) para b
c = null // limpando a variável c

document.write("A variável a agora é: " + a + "<br>")
document.write("A variável b agora é: " + b + "<br>")
document.write("A variável c agora é: " + c + "<br>")