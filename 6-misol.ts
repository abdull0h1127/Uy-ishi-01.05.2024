function hasUniqueChars(string: string){
    for(let i: number = 0; i < string.length; i++ ){
        for(let j: number = i + 1; j < string.length; j++){
            if(string[i] === string[j]){
                return false
            }
        }
    }
    return true
}