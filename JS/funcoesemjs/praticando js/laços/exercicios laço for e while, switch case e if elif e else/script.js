// Exercício 1
const idade = parseInt(prompt('Idade: '));
if (idade >= 18) {
    alert('Você já pode ser preso, cuidado.');
} else {
    alert('Você ainda não pode ser preso.');
}

// Exercício 2
const numero = parseInt(prompt('Número: '));
if (numero % 2) {
    alert('Ímpar');
} else {
    alert('Par');
}

// Exercício 3
for (let num = 1; num < 11; num++) {
    console.log(num)
}

// Exercício 4
let nota = parseFloat(prompt('Nota: '))
if (nota >= 7) {
    alert(`Nota: ${nota}.\nAprovado.`)
} else if (nota < 7 && nota >= 5) {
    alert(`Nota: ${nota}\nRecuperação.`)
} else {
    alert(`Nota: ${nota}.\nReprovado.`)
}

// Exercício 5
let num = 10
while (num > 0) {
    console.log(num)
    num = num - 1
}

// Exercício 6
const dia = prompt('Dia: ')
switch (dia) {
    case '1':
        alert('Domingo')
        break
    case '2':
        alert('Segunda')
        break
    case '3':
        alert('Terça')
        break
    case '4':
        alert('Quarta')
        break
    case '5':
        alert('Quinta')
        break
    case '6':
        alert('Sexta')
        break
    case '7':
        alert('Sábado')
        break
    default:
        alert('Escolha um valor entre 1 e 7')
        break
}