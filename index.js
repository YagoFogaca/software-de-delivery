const prompt = require('prompt-sync')();
console.clear();

const hamguergueres = {
    op1: {
        nome: 'X-Burguer',
        ingredientes: [
            'Pão',
            ' Bife 90g',
            ' Queijo',
            ' Presunto',
            ' Batata palha',
            ' Alface',
            ' Tomate',
            ' Maionese caseira',
            ' Ketchup',
        ],
    },
    op2: {
        nome: 'X-Bacon',
        ingredientes: [
            'Pão',
            ' Bife 90g',
            ' Queijo',
            ' Presunto',
            ' Bacon',
            ' Batata palha',
            ' Alface',
            ' Tomate',
            ' Maionese caseira',
            ' Ketchup',
        ],
    },
    op3: {
        nome: 'X-Tudo',
        ingredientes: [
            'Pão',
            ' Bife 90g',
            ' Queijo',
            ' Presunto',
            ' Bacon',
            ' Ovo',
            ' Batata palha',
            ' Alface',
            ' Tomate',
            ' Maionese caseira',
            ' Ketchup',
        ],
    },
    mostrarOps: function (op) {
        if (op === 0) {
            for (let i in this.op1) {
                if (i === 'nome') {
                    console.log(`Nome: ${this.op1[i]}`);
                } else {
                    console.log(`Lanche: ${this.op1[i]}`);
                }
            }
        } else if (op === 1) {
            for (let i in this.op2) {
                if (i === 'nome') {
                    console.log(`Nome: ${this.op2[i]}`);
                } else {
                    console.log(`Lanche: ${this.op2[i]}`);
                }
            }
        } else if (op === 2) {
            for (let i in this.op3) {
                if (i === 'nome') {
                    console.log(`Nome: ${this.op3[i]}`);
                } else {
                    console.log(`Lanche: ${this.op3[i]}`);
                }
            }
        }
    },
};

const usuario = {
    nome: '',
    cpf: '',
    endereco: {
        rua: '',
        numero: '',
        complemento: '',
    },
};

const cadastro = () => {
    console.log(`Vamos fazer seu cadastro`);

    continuar();

    while (true) {
        let nome = prompt('Qual é o seu nome? ');

        if (nome.length < 3) {
            console.log('\n..Nome invalido..');
            continuar();
            continue;
        }
        console.log(`\nNome cadastrado com sucesso`);
        usuario.nome = nome;
        break;
    }

    continuar();

    while (true) {
        let cpf = prompt('Qual é o seu CPF? ');

        if (cpf.length < 11) {
            console.log('\n..CPF invalido..');
            continuar();
            continue;
        }
        console.log(`\nCPF cadastrado com sucesso`);

        usuario.cpf = cpf;

        break;
    }

    continuar();

    console.log('Vamos fazer o cadastro do seu endereço');

    continuar();

    while (true) {
        let rua = prompt(`Rua: `);

        if (rua.length < 3) {
            console.log('\n..Rua invalido..');
            continuar();
            continue;
        }
        console.log(`\nRua cadastrado com sucesso`);

        usuario.endereco.rua = rua;

        continuar();

        break;
    }

    while (true) {
        let numero = prompt('Qual o número: ');

        if (numero.length < 2) {
            console.log('\n..Número invalido..');
            continuar();
            continue;
        }
        console.log(`\nNúmero cadastrado com sucesso`);

        usuario.endereco.numero = numero;

        continuar();

        break;
    }
    let fazerComplemento = prompt(
        'Deseja adicionar um complemento? ',
    ).toUpperCase();

    if (fazerComplemento === 'SIM') {
        let complemento = prompt('Qual o complemento: ');

        console.log(`\nComplemento cadastrado com sucesso`);

        usuario.endereco.complemento = complemento;

        continuar();
    }
};

function continuar() {
    console.log(`\nAperte ENTER para continuar`);

    prompt();

    console.clear();
}

function funcionamento() {
    // cadastro();

    continuar();

    console.log(`Olá ${usuario.nome}.\nVamos te mostrar nosso cardapio`);

    continuar();

    for (let i = 0; i < Object.keys(usuario).length; i++) {
        hamguergueres.mostrarOps(i);

        continuar();
    }
}

console.log("BEM VINDO A FOGAÇA'S BURGUER");

continuar();

funcionamento();
