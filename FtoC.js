// 화씨를 섭씨로
const userNumber = Number(prompt('섭씨로 변경할 화씨단위로 온도를 입력하시오'))
const fToC = num => (num - 32) / 1.8
const cResult = fToC(userNumber)
console.log(`화씨온도 : ${userNumber} => 섭씨온도 : ${cResult}`)