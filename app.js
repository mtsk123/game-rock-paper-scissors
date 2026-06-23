/*-------------- Constants --------------*/
const choicesArr = ['rock', 'paper', 'scissors']

/*-------------- Variables --------------*/
let userChoice = ''
let computerChoice = ''

/*------ Cached Element References ------*/
const choices = document.querySelector('#choices')

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

const reset = document.querySelector('#reset')

/*----------- Event Listeners -----------*/
choices.addEventListener('click', function(event){
event.target.setattribute('disabled','disabled')
    userChoice = event.target.id

    if (userChoice === 'rock'){
        paper.setattribute('disabled','disabled')
        scissors.setattribute('disabled','disabled')
    } else if (userChoice === 'paper') {
        rock.setattribute('disabled','disabled')
        scissors.setattribute('disabled','disabled')
    } else {
        rock.setattribute('disabled','disabled')
        paper.setattribute('disabled','disabled')

    // computer makes a choice
    let randomIndex = Math.floor(Math.random() * 3)
    computerChoice = choicesArr[randomIndex]

    console.log('userChoice: ', userChoice)
    console.log('computerChoice: ', computerChoice)
})

reset.addEventListener('click', function(){
    paper.classList.remove('hidden')
    scissors.classList.remove('hidden')
    rock.classList.remove('hidden')
})

/*-------------- Functions --------------*/