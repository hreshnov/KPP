const factorial = (num) => {
  if (num < 0) return "Невозможно вычислить факториал отрицательного числа";
  return num === 0 || num === 1 ? 1 : num * factorial(num - 1);
};


const calculateBtn = document.getElementById("calculateBtn");
const resultElement = document.getElementById("result");

calculateBtn.onclick = () => {
  const number = parseInt(document.getElementById("numInput").value);
  
  if (isNaN(number) || number < 0) {
      resultElement.textContent = "Пожалуйста, введите положительное целое число.";
  } else {
      const result = factorial(number);
      resultElement.textContent = `Факториал числа ${number} равен ${result}`;
  }
};
