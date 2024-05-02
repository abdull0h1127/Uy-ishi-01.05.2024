type Num = {
    a: number,
    b: number
}

function arithmetic(data: Num, operator: string): number {
    if(operator === 'add'){
        return data.a + data.b
    } else if(operator === "subtract"){
        return data.a - data.b
    } else if(operator === 'multiply'){
        return data.a * data.b
    } else if(operator === "divide"){
        return data.a / data.b
    } else {
        throw new Error('Invalid operator');
    }
}

let result = arithmetic({ a: 1, b: 2 }, 'add');
console.log('Result:', result)
