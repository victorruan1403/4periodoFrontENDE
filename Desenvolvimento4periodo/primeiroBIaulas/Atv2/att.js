const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let nome = 'João da Silva';
let agencia = '0001';
let numeroConta = '123456-7';
let saldo = 1000.00;

function menu() {
  console.log('\n------- CAIXA ELETRÔNICO -------');
  console.log('1 - Consultar dados da conta');
  console.log('2 - Consultar saldo');
  console.log('3 - Realizar débito');
  console.log('4 - Realizar crédito');
  console.log('0 - Sair');
  console.log('---------------------------------');

  rl.question('Escolha uma opção: ', function (opcao) {

    if (opcao === '1') {
      console.log('\nNome: ' + nome);
      console.log('Agência: ' + agencia);
      console.log('Conta: ' + numeroConta);
      menu();

    } else if (opcao === '2') {
      console.log('\nSeu saldo é: R$ ' + saldo.toFixed(2));
      menu();

    } else if (opcao === '3') {
      rl.question('\nValor do débito: R$ ', function (valor) {
        let numero = parseFloat(valor);

        if (isNaN(numero) || numero <= 0) {
          console.log('Valor inválido!');
        } else if (numero > saldo) {
          console.log('Saldo insuficiente!');
        } else {
          saldo = saldo - numero;
          console.log('Débito feito! Saldo atual: R$ ' + saldo.toFixed(2));
        }
        menu();
      });

    } else if (opcao === '4') {
      rl.question('\nValor do crédito: R$ ', function (valor) {
        let numero = parseFloat(valor);

        if (isNaN(numero) || numero <= 0) {
          console.log('Valor inválido!');
        } else {
          saldo = saldo + numero;
          console.log('Crédito feito! Saldo atual: R$ ' + saldo.toFixed(2));
        }
        menu();
      });

    } else if (opcao === '0') {
      console.log('\nAté logo!');
      rl.close();

    } else {
      console.log('\nOpção inválida!');
      menu();
    }
  });
}

console.log('Bem-vindo ao sistema bancário!');
menu();

