const { use } = require("react");


const user = {
    username: "aaditya",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}


// user.welcomeMessage()

// user.username = "andy"
// user.welcomeMessage()



// console.log(this);


// const chai = function(){
//     let username = "aaditya"
//     console.log(this.username);
    


// }

// chai()

const chai = () => {
    let username = "aaditya"
    console.log(this);
}

// chai()

// const addTwo = (num1,num2) => {
// return num1 + num2

// }

// const addTwo = (num1,num2) =>  (num1 + num2)
const addTwo = (num1,num2) => ({username: "aaditya", price: 999})


console.log(addTwo(5,10));



const myArray = [2,5,6,7,8]



myArray.forEach(()=>)