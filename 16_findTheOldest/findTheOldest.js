const findTheOldest = function(people) {

    const oldest = people.reduce((oldestSoFar, currentPerson) =>{

        let oldestAge;
        if(!oldestSoFar.yearOfDeath){
            oldestAge = new Date().getFullYear() - oldestSoFar.yearOfBirth;
        }
        else{
            oldestAge = oldestSoFar.yearOfDeath - oldestSoFar.yearOfBirth;
        }


        let currentAge;
        if(!currentPerson.yearOfDeath){
            currentAge = new Date().getFullYear() - currentPerson.yearOfBirth;
        }
        else{
            currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        }


        if(currentAge > oldestAge){
            return currentPerson;

        } 
        else{
            return oldestSoFar;
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
