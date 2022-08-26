const findTheOldest = function(people) {
  
    let currYear = new Date()
    let oldestPerson
    let oldestAge=0

  
    for(let i=0;i<people.length;i++){
      
      if(people[i].yearOfDeath==undefined){
         let age = currYear.getFullYear()-people[i].yearOfBirth

         if(age>oldestAge){
            oldestAge=age
            oldestPerson=people[i]
          }
        }

        if(Number.isInteger(people[i].yearOfDeath)){
          let age = people[i].yearOfDeath-people[i].yearOfBirth

          if(age>oldestAge){
            oldestAge=age
            oldestPerson=people[i]
          }
        }
        
    }
    return oldestPerson
};



// Do not edit below this line
module.exports = findTheOldest;
