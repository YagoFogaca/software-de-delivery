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
        preco: 14.9,
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
        preco: 27.99,
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
        preco: 21.9,
    },
    mostrarOps: function (op) {
        if (op === 0) {
            for (let i in this.op1) {
                if (i === 'nome') {
                    console.log(`Lanche: ${this.op1[i]}`);
                } else if (i === 'ingredientes') {
                    console.log(`\n${this.op1[i]}`);
                } else {
                    console.log(`\nPreço: R$${this.op1[i]}`);
                }
            }
        } else if (op === 1) {
            for (let i in this.op2) {
                if (i === 'nome') {
                    console.log(`\n\nLanche: ${this.op2[i]}`);
                } else if (i === 'ingredientes') {
                    console.log(`\n${this.op2[i]}`);
                } else {
                    console.log(`\nPreço: R$${this.op2[i]}`);
                }
            }
        } else if (op === 2) {
            for (let i in this.op3) {
                if (i === 'nome') {
                    console.log(`\n\nLanche: ${this.op3[i]}`);
                } else if (i === 'ingredientes') {
                    console.log(`\n${this.op3[i]}`);
                } else {
                    console.log(`\nPreço: R$${this.op3[i]}`);
                }
            }
        }
    },
};

const bebidas = {
    op1: {
        nome: 'Coca-Coca',
        preco: 5,
    },
    op2: {
        nome: 'Pepsi',
        preco: 5,
    },
    op3: {
        nome: 'Guarana',
        preco: 5,
    },
    op4: {
        nome: 'Suco de Laranja',
        preco: 5.5,
    },
    op5: {
        nome: 'Suco de Uva',
        preco: 5.5,
    },
    mostrarOps: function (op) {
        if (op === 0) {
            for (let i in this.op1) {
                if (i === 'nome') {
                    console.log(`Bebida: ${this.op1[i]}`);
                } else {
                    console.log(`Preço: R$${this.op1[i]}`);
                }
            }
        } else if (op === 1) {
            for (let i in this.op2) {
                if (i === 'nome') {
                    console.log(`\nBebida: ${this.op2[i]}`);
                } else {
                    console.log(`Preço: R$${this.op2[i]}`);
                }
            }
        } else if (op === 2) {
            for (let i in this.op3) {
                if (i === 'nome') {
                    console.log(`\nBebida: ${this.op3[i]}`);
                } else {
                    console.log(`Preço: R$${this.op3[i]}`);
                }
            }
        } else if (op === 3) {
            for (let i in this.op4) {
                if (i === 'nome') {
                    console.log(`\nBebida: ${this.op4[i]}`);
                } else {
                    console.log(`Preço: R$${this.op4[i]}`);
                }
            }
        } else if (op === 4) {
            for (let i in this.op5) {
                if (i === 'nome') {
                    console.log(`\nBebida: ${this.op5[i]}`);
                } else {
                    console.log(`Preço: R$${this.op5[i]}`);
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
    pedido: {
        pedido: [],
        preco: 0,
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
    let fazerComplemento = prompt('Deseja adicionar um complemento? ').toUpperCase();

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
    console.log("BEM VINDO A FOGAÇA'S BURGUER\n");

    // cadastro();

    console.log(`Olá ${usuario.nome}.\nVamos te mostrar nosso cardapio`);

    continuar();

    mostrar: while (true) {
        // Mostra o menu

        console.log('O que deseja ver ?\n1- HAMGUERES \n2- BEBIDAS \n3- SOBRIMESAS');

        let mostrar = +prompt('1 , 2 , 3 ');

        if (mostrar < 1 || mostrar > 3 || isNaN(mostrar)) {
            // Valida a escolha do usuario

            console.log('..Resposta invalida..\nVamos tentar novamente');

            continuar();

            continue;
        }

        continuar();

        switch (mostrar) {
            // Mostra a escolha do usuario
            case 1:
                for (let i = 0; i < Object.keys(hamguergueres).length - 1; i++) {
                    hamguergueres.mostrarOps(i);
                }

                continuar();

                break;

            case 2:
                for (let i = 0; i < Object.keys(bebidas).length - 1; i++) {
                    bebidas.mostrarOps(i);
                }

                continuar();

                break;

            case 3:
                console.log('SOBRIMESAS Indisponivel ainda');

                continuar();

                break;
        }

        while (true) {
            // Mostrar dnv o menu

            console.log('Deseja ver novamente o menu? \n1- Sim \n2- Não');

            let verNovamente = +prompt('1 , 2 ');

            if (verNovamente != 1 && verNovamente != 2) {
                // Valida a escolha do usuario
                console.log('..Resposta invalida..\nVamos tentar novamente');

                continuar();

                continue;
            } else if (verNovamente === 1) {
                // Mostra o menu

                console.log('\nCarregando');

                continuar();

                continue mostrar;
            } else {
                // Sai do menu

                console.log('\nSaindo');

                continuar();

                break mostrar;
            }
        }
    }

    pedir: while (true) {
        console.log(`Vamos realizar seu pedido ${usuario.nome}`);

        console.log(`O que deseja pedir? `);

        continuar();

        console.log('Lanches: \n\n');

        for (let b in hamguergueres) {
            for (let i in hamguergueres[b]) {
                if (i === 'nome') {
                    console.log(`${hamguergueres[b][i]}`);
                } else if (i == 'preco') {
                    console.log('\x1b[38;5;196m', `Preço: R$${bebidas.op1.preco}`, '\x1b[0m');
                }
            }
        }

        console.log('\n\nBebidas: \n');

        for (let b in bebidas) {
            for (let i in bebidas[b]) {
                if (i === 'nome') {
                    console.log(`${bebidas[b][i]}`);
                } else if (i == 'preco') {
                    console.log('Preço:', '\x1b[38;5;196m', `R$${bebidas.op1.preco}`, '\x1b[0m');
                }
            }
        }

        break pedir;
    }
}
funcionamento();
