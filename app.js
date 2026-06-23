/*-------------- Constants --------------*/

/*-------------- Variables --------------*/
let userChoice = ''

/*------ Cached Element References ------*/
const choices = document.querySelector('#choices')

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#rock')
const reset = document.querySelector('#reset')
console.log(reset)
/*----------- Event Listeners -----------*/
choices.addEventListener('click', function(event){
    userChoice = event.target.id

//we want to hide buttons are not userchoice
if(userChoice === 'rock'){
    // add hidden class to papper and scissors button
    paper.classList.add('hidden')
    scissors.classList.add('hidden')
}

    console.log('userChoice: ', userChoice)
reset.addEventListener('click', function()){
    paper.classList.remove('hidden')
    scissors.classList.remove('hidden')
    rock.classList.remove('hidden')
}

})


/*-------------- Functions --------------*/