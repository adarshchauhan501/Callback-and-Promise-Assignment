// +++++++++++++++++++++++ Double Using Callback ++++++++++++++++++

function doubleElement(arr, callback){
    let doubleArry = [];
    for (const num of arr) {
        let doubledNumber = callback(num);
        doubleArry.push(doubledNumber)
    }
    return doubleArry
}


function double(num){
    return num * 2;
}

let Array1 = [1, 2, 3, 4, 5, 6, 7, 8];
let doubleValueArray = doubleElement(Array1, double)
console.log(doubleValueArray)
