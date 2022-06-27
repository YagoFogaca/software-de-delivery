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
        preco: 21.9,
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
        preco: 27.9,
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
};

const sobremesas = {
    op1: {
        nome: 'Brigadeirão',
        preco: 5.5,
    },
    op2: {
        nome: 'Pé de moleque',
        preco: 5,
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
    sacola: {
        pedido: [],
        preco: 0,
        pagamento: '',
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

function cardapio() {
    console.log('Lanches: ');
    let indice = 0;
    for (let b in hamguergueres) {
        for (let i in hamguergueres[b]) {
            if (i === 'nome') {
                console.log(`\n${(indice += 1)}- ${hamguergueres[b][i]}`);
            } else if (i === 'ingredientes') {
                console.log(`\n${hamguergueres[b][i]}`);
            } else if (i == 'preco') {
                console.log('Preço: \x1b[38;5;196m', `R$${hamguergueres[b][i].toFixed(2)}`, '\x1b[0m');
            }
        }
    }

    console.log('\nBebidas:');

    for (let b in bebidas) {
        for (let i in bebidas[b]) {
            if (i === 'nome') {
                console.log(`\n${(indice += 1)}- ${bebidas[b][i]}`);
            } else if (i == 'preco') {
                console.log('Preço:', '\x1b[38;5;196m', `R$${bebidas[b][i].toFixed(2)}`, '\x1b[0m');
            }
        }
    }

    console.log('\nSobremesas:');

    for (let b in sobremesas) {
        for (let i in sobremesas[b]) {
            if (i === 'nome') {
                console.log(`\n${(indice += 1)}- ${sobremesas[b][i]}`);
            } else if (i == 'preco') {
                console.log('Preço:', '\x1b[38;5;196m', `R$${sobremesas[b][i].toFixed(2)}`, '\x1b[0m');
            }
        }
    }
}

function funcionamento() {
    let pedido = [];
    let preco = 0;
    console.log("BEM VINDO A FOGAÇA'S BURGUER\n");

    cadastro();

    console.log(`Olá ${usuario.nome}.\nVamos te mostrar nosso cardapio`);

    continuar();

    pedir: while (true) {
        cardapio();

        console.log(`\n\nVamos realizar seu pedido ${usuario.nome}\n`);

        console.log(`O que deseja pedir? Escolha somente os números ESCOLHA SOMENTE OS NÚMEROS`);

        let escolha = +prompt();

        if (escolha < 1 || escolha > 10) {
            console.log('\nResposta invalida\nVamos tentar novamente');

            continuar();

            continue pedir;
        }
        switch (escolha) {
            case 1:
                pedido.push(hamguergueres.op1.nome);

                pedido.push(hamguergueres.op1.preco);
                obs: while (true) {
                    console.log('Deseja fazer alguma obeservação?\nex: [SEM SALADA]');

                    let obs = prompt('[ S / N ]  ').toLowerCase();

                    if (obs != 's' && obs != 'n') {
                        continue obs;
                    } else if (obs === 's') {
                        console.log('Escreva sua observação: ');

                        obs = prompt('....  ');

                        pedido.push(obs);

                        usuario.sacola.pedido.push(pedido);

                        break obs;
                    } else {
                        pedido.push('Sem observação');

                        usuario.sacola.pedido.push(pedido);

                        break obs;
                    }
                }
                break;
            case 2:
        }

        pedido: while (true) {
            console.log('\n\nO que deseja fazer? \n');

            console.log('1- Para pedir novamente \n2- Para ver sacola');

            let pedirNov = +prompt('[ 1 / 2 ]  ').toLowerCase();

            if (pedirNov < 1 || pedirNov > 2) {
                continue pedido;
            } else if (pedirNov === 1) {
                pedido = [];

                continuar();

                continue pedir;
            } else if (pedirNov === 2) {
                continuar();

                for (let i = 0; i < usuario.sacola.pedido.length; i++) {
                    console.log(usuario.sacola.pedido[i][1]);
                    preco += usuario.sacola.pedido[i][1];
                }

                usuario.sacola.preco = preco.toFixed(2);

                console.log(usuario.sacola);
                finalizar: while (true) {
                    console.log('\nO que deseja fazer? \n');

                    console.log('1- Para pedir novamente \n2- Finalizar pedido');

                    pedirNov = +prompt('[ 1 / 2 ]  ').toLowerCase();

                    if (pedirNov < 1 || pedirNov > 2) {
                        continue finalizar;
                    } else if (pedirNov === 1) {
                        pedido = [];

                        continuar();

                        continue pedir;
                    } else {
                        break pedido;
                    }
                }
            }
        }

        continuar();

        break pedir;
    }

    pagamento: while (true) {
        console.log('Sua sacola ficou dessa forma: ');

        console.log(usuario.sacola);

        console.log('\n\n1- Pagar com pix \n2- Pagar com cartão de credito \n3- Pagar com cartão de debito');

        let pagamento = +prompt('[ 1 / 2 / 3]  ');

        if (pagamento < 1 && pagamento > 3) {
            continue pagamento;
        } else if (pagamento === 1) {
            pagamento = 'Pagamento por pix';
        } else if (pagamento === 2) {
            pagamento = 'Cartão de credito';
        } else {
            pagamento = 'Cartão de debito';
        }

        usuario.sacola.pagamento = pagamento;

        break pagamento;
    }
}

funcionamento();

continuar();

console.log(usuario.sacola);

console.log('\n\nSeu pedido está sendo preparado\n\n');

setTimeout(() => {
    console.log('Seu pedido está pronto.');
}, '5000');
