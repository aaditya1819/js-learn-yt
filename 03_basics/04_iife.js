(function chai(){

    //names iife
    console.log('DB CONNECTED');
})();


(function chai2(){
    console.log('DB CONNECTED 2');
})();

((name)=>{
    console.log(`DB CONNECTED 3 ${name}`);
})("aaditya");



function one(){
    console.log("calling one");
    two()
}

function two(){
    console.log("calling two");
    three()
}


function three(){
    console.log("calling three");
    
}

one()
two()
three()