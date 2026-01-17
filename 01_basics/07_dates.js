// dates

let myDate = new Date("2023-01-14")

console.log(myDate.toString());
console.log(myDate.toLocaleDateString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);



newDate.toLocaleString('default', {
    weekday:"long",
    
})