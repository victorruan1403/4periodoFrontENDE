let nome; 

const nomeNulo = null;

const aluno = {
    id: 60008931,
    nome: "Victor",
    ativo: true,
    pos: null,
    dataNascimento: new Date("2006-03-14"),
    endereco: {
        rua: "Paraiba",
        numero: 486,
        bairro: "Favela Chupa osso",
        cidade: "Diamante d Oeste"  
     },
}

const frutas = ["banana", "maça", "laranja", "abacaxi", "melancia"];

console.log(frutas);

function soma(n1, n2) { 
    return n1 + n2;
}

console.log(soma(2, 40));
console.log((() => 2 + 6)()); // chamando a arrow function

const valor1 = "2";
const valor2 = 2;

// dois valores iguais, == checa apenas o valor 
if (valor1 == valor2) {
    console.log("São iguais");
}

// três iguais === checa tipo e valor 
if (valor1 === valor2) {
    console.log("São iguais");
}

frutas.forEach(fruta => console.log(fruta));


