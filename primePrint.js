//1-10000 소수 출력하기

const numbers = {
    all: [],
    prime: [],
    isPrime: function (number) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) return false;
        }
        return true;
    },
    addPrime: function (numbers) {
        numbers.forEach((num) => {
            if (this.isPrime(num)) {
                this.prime.push(num)
            }
        })
    },
    addAll: () => {
        for (i = 2; i <= 10000; i++) {
            numbers.all.push(i)
        }
    }
}
numbers.addAll()

numbers.addPrime(numbers.all)

