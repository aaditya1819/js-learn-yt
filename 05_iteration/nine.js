


const mynums = [1,2,3]

let start = 9999999999999999999999999999999999;
const sum= mynums.reduce((acc,current)=>{
    console.log(`acc ${acc} and cur ${current}`);
    
    return acc+current
},start)
console.log(sum);



const shoppingCart = [
    {
        itemName:'js course',
        price:'2999'

    },
    {
        itemName:'python',
        price:'2999'

    },
    {
        itemName:'mobile dev',
        price:'2999'

    },
    {
        itemName:'Data Science',
        price:'2999'

    }
]


const totalPrice = shoppingCart.reduce((acc,current)=> (acc +Number(current.price)),0)


console.log(totalPrice);
