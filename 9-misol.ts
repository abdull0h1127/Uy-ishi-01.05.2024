function double(arr: number[]): number[]{
    return arr.map(function(element: number){
        return element * 2
    })
}

console.log(double([1,2,10,57]));
