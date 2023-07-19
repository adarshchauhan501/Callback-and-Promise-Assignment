function greetPerson(name){
    return new Promise((resolve, reject) => {
        const greeting = `Hello  ${name}!`
        


    if(name && typeof name === "string"){
        resolve(greeting);
    }else{
        reject('Invalid Name');
    }
});
}


// Example Usage;

const name1 = `Adarsh Singh`


greetPerson(name1).then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error);
});