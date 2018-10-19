//함수 구구단
//함수를 활용해 반복적으로 발생하는 코드를 줄인다.
// 공부를 위해 메인함수를 사용해 본다.

function getAllGugudan() {
    for (i = 2; i < 10; i++) {
        let result = calculateGugudan(i)
        getDanPrint(i, result)
    }
}

function calculateGugudan(danNumber) {
    let gugudanResult = [];
    for (j = 1; j < 10; j++) {
        gugudanResult.push(danNumber * j)
    }
    return gugudanResult
}

function getDanPrint(danNumber, danResult) {
    console.log(`${danNumber}단`)
    danResult.forEach((num, index) => {

    console.log(`${danNumber} x ${index+1} = ${num}`)
    })
}

getAllGugudan()