//사칙연산
const userStrNumbers = prompt('사칙연산을 할 두 수를 입력해주세요.(단, 띄워쓰기로 구분해주세요.').split(' ')
const userNumbers = userStrNumbers.map(arr => parseInt(arr));

console.log(`${userNumbers[0]} + ${userNumbers[1]} = ${userNumbers[0] + userNumbers[1]}`)
console.log(`${userNumbers[0]} - ${userNumbers[1]} = ${userNumbers[0] - userNumbers[1]}`)
console.log(`${userNumbers[0]} ÷ ${userNumbers[1]} = ${userNumbers[0] / userNumbers[1]}`)
console.log(`${userNumbers[0]} * ${userNumbers[1]} = ${userNumbers[0] * userNumbers[1]}`)