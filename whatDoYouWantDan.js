//원하는 단수 출력

const userStrDanNumber = ('8 7').split(' ')

const userNumber = userStrDanNumber.map(numbers => parseInt(numbers))

for (i = 2; i <= 8; i++) {
    console.log(`${i}단`)
    for (j = 1; j <= 7; j++) {
        console.log(`${i} x ${j} =  ${i * j}`)
    }
}