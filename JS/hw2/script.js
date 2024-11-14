const userNum = prompt("Введите число:");
const num = Number(userNum);

const multiplesNum = [];

for (let i = 1; i <= num; i++) {
    if (i % 5 === 0) {
        multiplesNum.push(i);
    }
}

if (multiplesNum.length > 0) {
    console.log("Числа кратные 5:", multiplesNum);
} else {
    console.log("Sorry, no numbers");
}
