const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(nums) {
  console.log(nums)
  console.log('len of nums', nums.length)
  if (nums.length == 0) return 0
  else {
    let sum = 0
    for (let i=0;i<nums.length;i++) {
      sum += Number(nums[i])
    }
    return sum
  }
};

const multiply = function(nums) {
  let result = 1
  for(let i=0;i<nums.length;i++){
    result*=nums[i]
  }
  return result
};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
  let result=1
	for(let i=1;i<=num;i++){
    result*=i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
