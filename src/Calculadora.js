function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    if (num2 === 0) {
        throw new Error("Divisão por zero não é permitida");
    }
    return num1 / num2;
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('calculadoraForm');
    const resultadoDiv = document.getElementById('resultado');
    const limparBtn = document.getElementById('limpar');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operacao = document.getElementById('operacao').value;

        try {
            let resultado;

            switch (operacao) {
                case '+':
                    resultado = soma(num1, num2);
                    break;
                case '-':
                    resultado = subtracao(num1, num2);
                    break;
                case '*':
                    resultado = multiplicacao(num1, num2);
                    break;
                case '/':
                    resultado = divisao(num1, num2);
                    break;
                default:
                    throw new Error('Operação inválida');
            }

            resultadoDiv.innerHTML = `O resultado da ${operacao === '+' ? 'soma' : operacao === '-' ? 'subtração' : operacao === '*' ? 'multiplicação' : 'divisão'} entre ${num1} e ${num2} é: <strong>${resultado}</strong>`;
            resultadoDiv.style.background = '#d4edda';

        } catch (error) {
            resultadoDiv.innerHTML = `<span style="color: red;">Erro: ${error.message}</span>`;
            resultadoDiv.style.background = '#f8d7da';
        }
    });

    limparBtn.addEventListener('click', function () {
        form.reset();
        resultadoDiv.innerHTML = '';
        resultadoDiv.style.background = '#e9ecef';
    });
});