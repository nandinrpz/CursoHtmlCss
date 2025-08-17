var parametro = prompt("Digite um número");
//com o comando prompt, precisamos modificar de string para int ou float
switch (parseInt(parametro)) {
    case 1:
        document.write("parametro 1");
        break;
    case 2:
        document.write("parametro 2");
        break;
    case 3:
        document.write("parametro 3");
        break;
    default:
        document.write("Número não encontrado");
        

}