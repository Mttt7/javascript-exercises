const repeatString = function(str,times) {
    let i
    let result=''
    if(times>=0){
        for(i=0;i<times;i++){
            result+=str
        }
    }else{
        return 'ERROR'
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
