//Cách 1: Sử dụng vòng lặp
function findMissingNumber(arr){
    for(i=0; i<arr.length-1; i++){
        if(arr[i] + 1 !== arr[i+1]){
            return arr[i] +1
        }
    }
    return "Has no missingNumber"
}

console.log( "Cách 1:"+findMissingNumber([1,2,3,5]))
console.log("Cách 1:"+findMissingNumber([10, 11, 12, 14]))

//Cách 2: Sử dụng tổng 
function findMissingNumber2(arr){
    let n = arr.length + 1 
    let sum = (n*(arr[0]+arr[arr.length-1])/2) //Tính tổng của mảng nếu dãy số không thiếu 1 số
    let realSum = arr.reduce((sum,num)=> sum+num,0)  //Tính tổng thật sự của mảng
    if(sum - realSum !== 0){
        return sum - realSum
    }else if(
        sum - realSum == 0
    ){
       return "Has no missingNumber"
    }

}

console.log("Cách 2:"+findMissingNumber2([1,2,3,5]))
console.log("Cách 2:"+findMissingNumber2([10, 11, 12, 14]))