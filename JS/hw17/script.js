function calculateFibonacci() {
    const F0 = parseInt(document.getElementById('F0').value);
    const F1 = parseInt(document.getElementById('F1').value);
    const n = parseInt(document.getElementById('n').value);

    if (isNaN(F0) || isNaN(F1) || isNaN(n)) {
        document.getElementById('result').innerText = "Пожалуйста, введите все значения.";
        return;
    }

    let result;

    if (n >= 0) {
        result = generalizedFibonacci(F0, F1, n);
    } else {
        result = generalizedFibonacciNegative(F0, F1, n);
    }

    document.getElementById('result').innerText = `Результат: ${result}`;
}

function generalizedFibonacci(F0, F1, n) {
    let a = F0, b = F1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function generalizedFibonacciNegative(F0, F1, n) {
    let a = F0, b = F1;
    for (let i = -1; i >= n; i--) {
        let temp = b - a;
        b = a;
        a = temp;
    }
    return a;
}
