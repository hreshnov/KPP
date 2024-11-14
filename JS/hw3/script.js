
let first = Number(prompt('Введите первое число:'))
let second = Number(prompt('Введите второе число:'))
let mathOperation = prompt('Выберите операцию: `+`, `-`, `*`, `/`')

if (first === '' || second === '' || mathOperation === '' || isNaN(first) || isNaN(second)) {
    alert('Введите правильное число')
}

else {
    let calculator = function(first, second, mathOperation){
        switch(mathOperation){
            case '+':{
                alert(first + second);
                break;
            }
            case '-':{
                alert(first - second);
                break;
            }
            case '*':{
                alert(first * second);
                break;
            }
            case '/':{
                alert(first / second);
                break;
            }
            default: {
                alert('Неверная операция');
            }
        }
    }
    calculator(first, second, mathOperation)

}




