function hasUniqueChars(string: string): boolean{
    for(let i: number = 0; i < string.length; i++ ){
        for(let j: number = i + 1; j < string.length; j++){
            if(string[i] === string[j]){
                return false
            }
        }
    }
    return true
}

console.log(hasUniqueChars("  nAa"))
console.log(hasUniqueChars("abcdef"))