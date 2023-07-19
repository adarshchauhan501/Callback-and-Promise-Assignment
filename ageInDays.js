function ageInDays(person){
    const fullName = person.firstName + ' ' + person.lastName ;
    const ageIndays = person.age * 365;

    function logMessage(){
        console.log(" The Person's full name is " +fullName + "and their age in days is " + ageIndays + ".");
    }
    return logMessage
}


//Example Usage

const person = {
    firstName: "Adarsh",
    lastName: "Singh",
    age: 24
}

const AgeinDays = ageInDays(person);
AgeinDays()