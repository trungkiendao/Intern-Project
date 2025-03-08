function isValidPassword(password){
    //Kiểm tra độ dài
    if(password.length <8){
        return false
    }
    let hasUpperCase = false
    let hasDigit = false
    let hasSpecialCharacters = false
    let specialCharacters = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/"

    //Dùng vòng lặp để duyệt qua từng kí tự
    for(character of password){
        //Kiem tra có ít nhất 1 chữ viết hoa
       if(character >= 'A' && character <= 'Z'){
        hasUpperCase = true
       }
       //Kiểm có ít nhất 1 số
       if(character >= '0' && character <= '9'){
        hasDigit = true
       }

       //Kiểm tra có ít nhất 1 kí tự đặc biệt
       if(specialCharacters.includes(character)){
        hasSpecialCharacters = true
       }    
    }
    //Nếu thoả mãn cả 3 điều kiện trả về true, nếu có ít nhất 1 điều kiện không thoả mãn trả về false
    return hasUpperCase && hasDigit && hasSpecialCharacters;
}
console.log(isValidPassword("Hello@123")); 
console.log(isValidPassword("hello123")); 
console.log(isValidPassword("HELLO@123")); 
console.log(isValidPassword("Hello123")); 
console.log(isValidPassword("H@1")); 
