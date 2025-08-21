nome = prompt("Digite seu nome: ");
altura = prompt("Digite sua altura: ");
peso = prompt("Digite seu peso: ");

altura = parseFloat(altura);
altura = altura / 100; // Convertendo cm para metros
peso = parseFloat(peso);

m = peso / Math.pow(altura, 2);

switch (true) {
    case (m < 16):
        cassificacao = "Baixo peso muito grave";
        break;
    case (m >= 16 && m < 16.99):
        classificacao = "Baixo peso grave";
        break;
    case (m >= 17 && m < 18.49):
        classificacao = "Baixo peso";
        break;
    case (m >= 18,50 && m < 24.99):
        classificacao = "Peso normal";
        break;
    case (m >= 25 && m < 29.99):
        classificacao = "Sobrepeso";
        break;
    case (m >= 30 && m < 34.99):
        classificacao = "Obesidade grau I";
        break;
    case (m >= 35 && m < 39.99):
        classificacao = "Obesidade grau II";
        break;
    default:
        classificacao = "Obesidade grau III ou mórbida";
        break;}
        document.write(nome + ", seu IMC é " + m + " e sua classificação é: " + classificacao);
