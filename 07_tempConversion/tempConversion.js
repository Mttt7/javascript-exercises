const ftoc = function(ftemp) {
  if(ftemp==32) return 0
  else{
  let ctemp=+(((ftemp-32)*5)/9).toFixed(1)
  return ctemp 
  }
};

const ctof = function(ctemp) {
  if(ctemp==32) return 0
  else{
    let ftemp=+(1.8*ctemp+32).toFixed(1)
    return ftemp
  }
};



// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
