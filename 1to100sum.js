// 1-100까지 합을 구하기
    let array = [];
    let i = 1;
    while (i <= 100) {
        array.push(i)
        i++
    }

let arraySum = array.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  console.log(arraySum)