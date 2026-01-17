//primitive data type

// 7 types : String ,Number ,Boolean ,null , undefined,Symbol,BigInt

const score = 100;

const scoreValue = 100.3;


const isLoggedIn = false;


const outSideTemp = null;
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber =34234324324234n




//Refrence type /Non primitive
//Array,Objects,Functions

const heros = ["iron man","spiderman","benten"];

let myObj = {
    name:"aaditya",
    age:22
}

const myFuction =  function(){
        console.log("hellow world!!")
}

console.log(typeof myFuction);


//-------------------------------

//Stack (Primitive),Heap(non-primitive)


let myYoutubename="aaditya"

