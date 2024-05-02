function filter_list(l: (number | string)[]): (number | string)[] {
    return l.filter(item => typeof item !== 'string');
}

let filteredList = filter_list([1, 2, 'a', 'b']);
console.log(filteredList); 

