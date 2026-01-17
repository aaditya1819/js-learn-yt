//for of loop




const arr = [1,2,4,5,5,6];


for (const num of arr) {
    // console.log(num);
    
    
}


const  greetings = "hellow world !!"


for (const greet of greetings) {

    if (greet === ' ') {
        
        continue;
        
    }
    // console.log(greet);
    
    
}

//maps


const map = new Map()

map.set('mh','maharashtra')
map.set('up','uttar pradesh')
map.set('hr','haryyana')

// console.log(map);


for (const [key,value] of map) {
    //  console.log([key,value]);
    
    
}


const myObject = {
    'Game1':'NFS',
    'Game2':'Spiderman'
}


// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
    


    
// }

