// //if satement 
// const isUserLoggedIn = true

// const temperature = 25

// if (temperature < 24) {
//     console.log("It's a cold day")
    

// }else{
//     console.log("It's a hot day")
// }




// if (isUserLoggedIn === true) {
    
// }


// const score = 200

// if(score>100){
//     const powerLvel = "fly"
//     console.log(`You have the power to ${powerLvel}`)
    
// }
// console.log(`You have the power to ${powerLvel}`)


const blance =1000 

// if (blance >500)  console.log("Low blance");


// if(blance < 550){
//     console.log("less than");
    

// }else{
//      if(blance>550){
//             console.log("more than");

//         if(blance == 1000){
//             console.log("you are pretty reach");


            
//         }else{
//             console.log("you need to ear some more money ");
            
//         }
//      }
// }
    



const debitCard = true
const loggedInFromGoogle = false
const loggedInFromFacebook = false



if(loggedInFromFacebook || loggedInFromGoogle){
    console.log("u need to logged in first");
    
   
}else{
    const userLoggedIn = true
     if(userLoggedIn && debitCard){
    console.log("You can make a purchase");
}else  if (!userLoggedIn){
    console.log("Please log in to make a purchase");
}else if (!debitCard){
    console.log("You need a debit card to make a purchase");


}else{
    console.log("for purchase ypou nedd debicard and logged in ");
    
}

}