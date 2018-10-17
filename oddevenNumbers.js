const userNumber = Number(prompt('짝수나 홀수를 입력하시오'))

const judgeNumber = num => (num % 2 == 0) ? console.log(`${num}은 짝수입니다.`) : console.log(`${num}은 홀수입니다.`)

const result = judgeNumber(userNumber)