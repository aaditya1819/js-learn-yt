// const tinderUser = new Object()

const tinderUser= {}

tinderUser.id ="123abc"
tinderUser.name="aaditya"
tinderUser.isLoggedn = false



// console.log(tinderUser);


const regulaUser = {
    email:"aadityadhanwate@hgmail.com",
    fullname: {
        usernameFullName: {
            f_name: "aaditya",
            l_name: "dhanwate"
        }
            
    }



}


// console.log(regulaUser.fullname.usernameFullName.l_name);

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

const obj4 = {
    5:"c",
    6:"d"
}
// const obj3 = Object.assign(obj1,obj2,obj4)


const obj3={...obj1,...obj2,...obj4} 

// console.log(obj3);
// console.log(obj3 === obj1);



const users = [
    {
        id:"1",
        email:"h@gmail.com",


    }
]


// users[1].email


// console.log(tinderUser);

// console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedn'));



const course = {
    courseNmme : "js in hindi",
    price : "999",
    courseTeacher: "hitesh"
}


const {courseNmme:instructor} = course


console.log(instructor);


// const  navbar=  ({company})=> {

// }



// navbar(compant = "aaditya")





{
    name: "aaditya",
    courSename: "js in hindi",
    pric: "free"
}