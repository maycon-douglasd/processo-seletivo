
function calculateSum() {
    let INDICE = 13, SOMA = 0, K = 0;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    document.getElementById('result1').textContent = `O valor da SOMA é: ${SOMA}`;
}


function checkFibonacci() {
    const num = parseInt(document.getElementById('fibonacciInput').value);
    if (isNaN(num)) {
        document.getElementById('result2').textContent = 'Por favor, insira um número válido.';
        return;
    }
    let a = 0, b = 1;
    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    const message = (b === num || num === 0)
        ? `${num} pertence à sequência de Fibonacci.`
        : `${num} não pertence à sequência de Fibonacci.`;
    document.getElementById('result2').textContent = message;
}


function processFaturamento() {
    const input = document.getElementById('faturamentoJson').value;
    try {
        const data = JSON.parse(input);
        const valores = data.filter(v => v > 0);
        const menor = Math.min(...valores);
        const maior = Math.max(...valores);
        const media = valores.reduce((sum, val) => sum + val, 0) / valores.length;
        const diasAcimaDaMedia = valores.filter(v => v > media).length;

        document.getElementById('result3').innerHTML = `
        <p>Menor faturamento: ${menor}</p>
        <p>Maior faturamento: ${maior}</p>
        <p>Dias acima da média: ${diasAcimaDaMedia}</p>
      `;
    } catch (error) {
        document.getElementById('result3').textContent = 'Erro: Certifique-se de inserir um JSON válido.';
    }
}


function calculatePercentual() {
    const faturamento = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };
    const total = Object.values(faturamento).reduce((sum, val) => sum + val, 0);
    let resultHtml = '';
    for (const [estado, valor] of Object.entries(faturamento)) {
        const percentual = ((valor / total) * 100).toFixed(2);
        resultHtml += `<p>${estado}: ${percentual}%</p>`;
    }
    document.getElementById('result4').innerHTML = resultHtml;
}


function reverseString() {
    const str = document.getElementById('stringInput').value;
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    document.getElementById('result5').textContent = `String invertida: ${reversed}`;
}