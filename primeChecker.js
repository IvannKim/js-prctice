//소수 판별 프로그램
//사용자가 입력한 숫자가 소수인지 아닌지 알려주는 프로그램을 작성해 봅시다.

const userNumber = Number(prompt('소수인지 판별할 수를 입력하시오'))
let isPrimeNumber = `${userNumber}은 소수입니다.`

for (i = 2; i < userNumber; i++) {
    if (userNumber % i === 0) isPrimeNumber = `${userNumber}은 소수가 아닙니다.`
}

console.log(isPrimeNumber)