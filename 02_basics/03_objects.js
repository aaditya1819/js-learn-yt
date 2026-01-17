//singleton 


//object literals
// Object.create
const mySym = Symbol("key1")

const jsUser = {
    name:"aaditya",
    "full name" :"aaditya dhanwate",
    [mySym]:"mykey",
    age: 18,
    location: "nashik",
    email: "aadityakjdlkasj",
    isLoggedIn: false,
    lastLoggedIn: ['monday','saturday']



}




// console.log(jsUser["email"]);

// console.log(jsUser["full name"]);

// console.log(typeof jsUser[mySym]);


jsUser.email= "aaditya@gmail.com"

// Object.freeze(jsUser)
jsUser.email= "aaditya@openai.com"

// console.log(jsUser["email"]);
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("hellow js users");
    
}

jsUser.greeting2 = function(){
    console.log(`hellow js users, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());





// myarray = ["h","a"]
// myarray[0]