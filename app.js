let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random()*3);
    return options[randomNum];
}

const drawGame = () => {
    msg.innerText = "It's a Draw! Play Again.";
    msg.style.backgroundColor = '#16262E';
}

const showWin = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'Green';
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = 'Red';
    }

}

const playGame = (userChoice) => {
    console.log("User choice is: ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice is: ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            //scissors, paper
            userWin = compChoice === 'paper'? false : true;
        }
        else if(userChoice === 'paper'){
            // rock, scissors
            userWin = compChoice === 'scissors'? false : true;
        }
        else if(userChoice === 'scissors'){
            // rock, paper
            userWin = compChoice === 'rock'? false : true;
        }
        showWin(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})