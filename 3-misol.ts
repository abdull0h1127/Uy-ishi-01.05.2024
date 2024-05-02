type num3 = {
    bullets: number,
    dragons: number
}

function hero(data: num3): boolean{
    if(data.bullets / 2 >= data.dragons){
        return true
    } else {
        return false
    }
}

let result3 = hero({ bullets: 10, dragons: 5 })
console.log(result3)