//Kiểm tra số trùng lặp
function findDuplicates(arr){
    let count = new Map()
    let duplicates = [];

    for(let num of arr){
        count.set(num,(count.get(num) || 0) + 1)
    }
    for(let [key,value] of count){
        if(value>1){
            duplicates.push(key)
        }
    }
    return duplicates
    
}

console.log(findDuplicates([1, 2, 3, 4, 2, 5, 6, 3]));
console.log(findDuplicates([7, 8, 9, 10]));
console.log(findDuplicates([1, 1, 1, 2, 2, 3]));
