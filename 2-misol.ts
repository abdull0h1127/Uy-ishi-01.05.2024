type num = number

function positiveSum(arr: number[]): num{
    let count: num = 0
    for(let i: num = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count += arr[i]
        } else 0
    }
    return count
}

let result1 = positiveSum([1, 2, 3, 4, 5]);
console.log(result1)