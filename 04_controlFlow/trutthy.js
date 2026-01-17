const userEmail = []


if (userEmail) {
    console.log("User email is valid");
}else{
    console.log("dont have user email");
    
}


// flasy values in JavaScript

// false
// 0/-0
// BigInt 0n
// ""
// null
// undefined
// NaN

// //truthy values in JavaScript
// //true
// //non empty string
// //any number other than 0/-0
// //BigInt other than 0n
// //[]
// //{}
// function(){}


// if (userEmail.length <= 0)   {
//     console.log("array is empty");
    
    
// }


const emptyObj = {}

if(Object.keys(emptyObj).length ===0){
    console.log("object is empty");
    

}


// Nullish Coalscimf operator (??)

let val1;

// val1= 5 ?? 10

// val1 = null ?? 10

// val1 = undefined ?? 15


val1 = null ?? 10 ?? 15;

console.log(val1);


//terniary operator

// condition ? true : false
const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("less than 80 ") : console.log("more than 80 ");
