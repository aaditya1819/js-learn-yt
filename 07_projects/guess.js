let random = parseInt((Math.random()*100 +1));

console.log(random);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const userGuess = document.querySelector('.guesses')
const userLastG = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const resultParas = document.querySelector('.resultParas')


const p = document.createElement('p')


let prevGuess = []

let numGuess = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess =parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)

    })
    
}


function validateGuess(guess){

    if (isNaN(guess)) {
        alert('Please enter a valid number')
        
    }else if(guess<1){
        alert("please enter the valid number more than 1")

    }else if(guess>100){
        alert("please enter the valid number less than 1")

    }else{
        prevGuess.push(guess)
        
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over . Random number was ${random}`)
            endGame()
            
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
    //
}

function checkGuess(guess){
    if (guess === random) {
        displayMessage(`You Gueesesd right`)
        endGame()
        
    }else if(guess < random){
        displayMessage(`Number is two low`)
    }else if(guess > random){
        displayMessage(`Number is two high`)
    }
    //
}
function displayGuess(guess){
    userInput.value=''
    userGuess.innerHTML+=`${guess} `
    numGuess++
    userLastG.innerHTML=`${11-numGuess}`
    //
}


function displayMessage(guess){
    lowOrHi.innerHTML = `<h2>${guess}</h2>`
    //
}
function endGame(guess){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2id='newGame'> Start new game</h2id=>`
    resultParas.appendChild(p)
    playGame=false
    newGame()
    
    
    //
}


function newGame(guess){
    const newGamebtn = document.querySelector('#newGame')
    newGamebtn.addEventListener('clcik',function(e){
        random = parseInt((Math.random()*100 +1));
        prevGuess=[]
        numGuess=1
         userLastG.innerHTML=`${11-numGuess}`
          
        

        
        
        playGame=true


    })

    //
}




