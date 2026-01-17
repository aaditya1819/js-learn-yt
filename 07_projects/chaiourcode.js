const allButtons = document.querySelectorAll('.color-box')


const body = document.querySelector('body')
allButtons.forEach((btn)=>{
    console.log(btn);
    btn.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);

        if (e.target.classList.contains('grey')) {
            body.style.background='grey'
            
        }
        if (e.target.classList.contains('white')) {
            body.style.background='white'
            
        }
        if (e.target.classList.contains('blue')) {
            body.style.background='blue'
            
        }
        if (e.target.classList.contains('yellow')) {
            body.style.background='yellow'
            
        }
        
    })

})
