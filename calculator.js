//문자열 계산기
// 사용자가 입력한 값에 따라 사칙연산을 계산할 수 있는 계산기를 구현한다.
// 예를 들어 "2 + 3 * 4 / 2"와 같은 순서로 값을 입력하는 경우 실행 결과 값인 10을 출력해야 한다.
// 사용자가 입력할 수 있는 값의 수는 제한되어 있지 않다.
// 나눗셈의 결과 값은 정수로 값이 떨어지지 않더라도 정수 값만 사용하는 것으로 한다.

const userStrExpression = prompt(`계산하고 싶은 식을 적어주세요.`).split(' ')
const userStrExpression = ('2 + 3').split(' ')

function checkExpression(expression) {
    let result = []
    if (expression[1] === '+') {
        result = expression[0] + expression[2]
    }
}

checkExpression(userStrExpression)