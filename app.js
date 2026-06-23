/*-------------- Constants --------------*/
Const choicesArr = ('rock','paper','scissors')
/*-------------- Variables --------------*/
let userChoice = ''
let computer
let randomIndex = Math.floor(Math.random)
/*------ Cached Element References ------*/
const choices = document.querySelector('#choices')

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

const reset = document.querySelector('#reset')

/*----------- Event Listeners -----------*/
choices.addEventListener('click', function(event){
    userChoice = event.target.id

    // we want to hide buttons that are not userChoice
    if (userChoice === 'rock'){
        // add hidden class to paper and scissors buttons
        paper.classList.add('hidden')
        scissors.classList.add('hidden')
    } else if (userChoice === 'paper') {
        rock.classList.add('hidden')
        scissors.classList.add('hidden')
    } else {
        rock.classList.add('hidden')
        paper.classList.add('hidden')
    }
computerChoice = choicesArr
    console.log('userChoice: ', userChoice)
    
})

reset.addEventListener('click', function(){
    paper.classList.remove('hidden')
    scissors.classList.remove('hidden')
    rock.classList.remove('hidden')

})

/*-------------- Functions --------------*/
