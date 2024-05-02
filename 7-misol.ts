function doubleChar(str: string): string{
    let result: string = "";
    for(let i: number = 0; i < str.length; i++){
        result += str[i].repeat(2)
    }
    return result
}

console.log(doubleChar("abcd"));