//배열로 구구단 구현

let gugudanResult = [];
for (i = 2; i < 10; i++) {
    console.log(`${i}단`)
    for (j = 1; j < 10; j++) {
        gugudanResult.push(i * j)
        console.log(`${i} x ${j} = ${i*j}`)
    }
}