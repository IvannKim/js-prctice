//BMI 측정
const userStrNumber = prompt('키와 몸무게를 입력해주세요.(단,띄워쓰기로 구분해주세요.)').split(' ')
const userNumber = userStrNumber.map(arr => parseInt(arr));

const calculatorBmi = (arr) => arr[1]/(arr[0]/100*arr[0]/100)

const bmiResult = calculatorBmi(userNumber).toFixed(2)

console.log(`키 : ${userNumber[0]}cm, 몸무게 : ${userNumber[1]}kg`)
console.log(`BMI 지수 : ${bmiResult[0]}`)