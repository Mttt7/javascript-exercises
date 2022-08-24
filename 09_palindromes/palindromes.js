const palindromes = function (str) {
    let validStr=''
    for(let i=0;i<str.length;i++){
        if(str[i].match(/[a-z]/i)){
            validStr+=str[i]
        }
    }
    validStr=validStr.toLowerCase()

    let ReversedStr=''
    for(let i =validStr.length-1;i>=0;i--){
        ReversedStr+=validStr[i]
    }
    if(ReversedStr===validStr) return true
    else return false
};

// Do not edit below this line
module.exports = palindromes;
