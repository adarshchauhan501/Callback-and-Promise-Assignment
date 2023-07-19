function manupulateString(string){
    function logString(){
        console.log('The manipulated  string is: ' + string.toUpperCase());
    }
    return logString;
}


const callback =  manupulateString("Hello , World!");
callback()