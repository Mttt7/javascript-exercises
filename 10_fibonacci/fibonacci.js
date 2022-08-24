const fibonacci = function(ind) {
    if(typeof ind =='string'){
        ind=Number(ind)
    }
    if(ind>=0){
        let arrFib=[0,1]
        for(let i=2;i<=ind;i++){
            arrFib.push(arrFib[i-2]+arrFib[i-1])
        }
    return arrFib[ind]
    }else return 'OOPS'
};

// Do not edit below this line
module.exports = fibonacci;
