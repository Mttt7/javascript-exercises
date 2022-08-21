const reverseString = function(str) {
    let list=[]
    let j = str.length-1
    for (let i = 0; i < str.length; i++) {
        list[j] = str[i]
        j--
    }
        
    let result=list.join('')
    console.log(result)
    return result

};

// Do not edit below this line
module.exports = reverseString;
