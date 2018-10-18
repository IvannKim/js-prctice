//사용자가 입력한 수들의 갯수와 합을 구하는 프로그램을 작성해 봅시다. (단 0을 입력받으면 입력 종료)
// const userStrNumbers = prompt('갯수와 합을 구하고 싶은 수들을 입력해').split(' ')
// const userNumbers = userStrNumbers.map(numbers => parseInt(numbers))
const userNumbers = [2, 3, 5]
console.log(userNumbers.length)
let arraySum = userNumbers.reduce((acc, cur) => {
    return acc + cur;
}, 0);
console.log(arraySum)