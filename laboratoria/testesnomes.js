var nome = prompt("Qual é o seu nome e sobrenome? ");

letraInicialNome = nome.slice(0,1);
letraPosicaoSobrenome = nome.indexOf(" ") + 1
letraInicialSobrenome = nome.slice(letraPosicaoSobrenome, letraPosicaoSobrenome + 1)



document.write("A letra inicial do seu nome é " + letraInicialNome.toUpperCase() + " e a letra inicial do seu sobrenome é " + letraInicialSobrenome.toUpperCase()); 
